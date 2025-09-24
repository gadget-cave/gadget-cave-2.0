// Database setup for IndexedDB
const DB_NAME = "GadgetCaveDB";
const DB_VERSION = 1;
let db;

const request = indexedDB.open(DB_NAME, DB_VERSION);

request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore("products", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = (event) => {
    db = event.target.result;
    loadProductsFromDB();
};

request.onerror = (event) => {
    console.error("Database error:", event.target.error);
    // You can add a fallback here if the database fails
};

// Function to load all products from the database
function loadProductsFromDB() {
    const transaction = db.transaction(["products"], "readonly");
    const objectStore = transaction.objectStore("products");
    const requestAll = objectStore.getAll();

    requestAll.onsuccess = (event) => {
        const products = event.target.result;
        displayProducts(products);
    };

    requestAll.onerror = (event) => {
        console.error("Error loading products:", event.target.error);
    };
}

// All other functions remain the same, but they use the `products` array
// loaded from the database.
function displayProducts(productList) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    productList.forEach((product) => {
        const productBox = document.createElement("div");
        productBox.classList.add("product");
        productBox.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button class="buy-button" onclick="buyNow(${product.id})">Buy Now</button>
        `;
        container.appendChild(productBox);
    });
}

function filterCategory(category) {
    const transaction = db.transaction(["products"], "readonly");
    const objectStore = transaction.objectStore("products");
    const requestAll = objectStore.getAll();

    requestAll.onsuccess = (event) => {
        const products = event.target.result;
        if (category === "All") {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered);
        }
    };
}

function searchProducts() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const transaction = db.transaction(["products"], "readonly");
    const objectStore = transaction.objectStore("products");
    const requestAll = objectStore.getAll();

    requestAll.onsuccess = (event) => {
        const products = event.target.result;
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        displayProducts(filteredProducts);
    };
}

function buyNow(productId) {
    const transaction = db.transaction(["products"], "readonly");
    const objectStore = transaction.objectStore("products");
    const requestProduct = objectStore.get(productId);

    requestProduct.onsuccess = (event) => {
        const product = event.target.result;
        if (product) {
            const productName = encodeURIComponent(product.name);
            const productPrice = product.price;
            window.location.href = `buy.html?id=${productId}&product=${productName}&amount=${productPrice}`;
        }
    };
}
