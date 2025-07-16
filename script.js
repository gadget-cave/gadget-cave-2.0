// Display categories
const categories = [...new Set(products.map(p => p.category))];
const categoryContainer = document.getElementById('categoryContainer');
const productContainer = document.getElementById('productContainer');

categories.forEach(cat => {
  const btn = document.createElement("div");
  btn.className = "category-box";
  btn.textContent = cat;
  btn.onclick = () => loadProducts(cat);
  categoryContainer.appendChild(btn);
});

// Load all by default
loadProducts();

function loadProducts(category = "") {
  productContainer.innerHTML = "";

  const filtered = category ? products.filter(p => p.category === category) : products;

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>₹${product.price}</strong></p>
      <button class="buy-btn" onclick="buyNow(${product.id})">Buy Now</button>
    `;
    productContainer.appendChild(card);
  });
}

function buyNow(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "buy.html";
}

// Search
document.getElementById("searchBar").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
  productContainer.innerHTML = "";
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>₹${product.price}</strong></p>
      <button class="buy-btn" onclick="buyNow(${product.id})">Buy Now</button>
    `;
    productContainer.appendChild(card);
  });
});
