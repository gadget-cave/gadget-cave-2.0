// Load products from product.js
document.addEventListener("DOMContentLoaded", () => {
  const allProducts = window.products; // 'products' array must be global in product.js
  displayProducts(allProducts);
  setupCategories(allProducts);
  setupSearchBar(allProducts);
});

// Function to display products
function displayProducts(productList) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  productList.forEach(product => {
    const box = document.createElement("div");
    box.className = "product";

    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <button class="buy-now" onclick='handleBuyNow(${JSON.stringify(product)})'>Buy Now</button>
    `;

    container.appendChild(box);
  });
}

// Function to filter by category
function setupCategories(allProducts) {
  const categoryContainer = document.getElementById("categoryContainer");
  const categories = ["All", ...new Set(allProducts.map(p => p.category || "Other"))];

  categoryContainer.innerHTML = "";

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.innerText = cat;
    btn.onclick = () => {
      const filtered = cat === "All" ? allProducts : allProducts.filter(p => p.category === cat);
      displayProducts(filtered);
    };
    categoryContainer.appendChild(btn);
  });
}

// Function to handle Buy Now
function handleBuyNow(product) {
  localStorage.setItem("selectedProductName", product.name);
  localStorage.setItem("selectedProductImage", product.image);
  window.location.href = "buy.html";
}

// Function to handle search
function setupSearchBar(allProducts) {
  const searchBar = document.getElementById("search-bar");

  searchBar.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();

    const filtered = allProducts.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    );

    displayProducts(filtered);
  });
}
