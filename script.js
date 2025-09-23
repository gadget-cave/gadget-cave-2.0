window.onload = () => {
    displayProducts(products);
};

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
    if (category === "All") {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const productName = encodeURIComponent(product.name);
        const productPrice = product.price; // Correctly using the number price
        window.location.href = `buy.html?id=${productId}&product=${productName}&amount=${productPrice}`;
    }
}

function searchProducts() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
    });
    displayProducts(filteredProducts);
}
