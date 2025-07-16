const categoryContainer = document.getElementById("categoryContainer");
const productContainer = document.getElementById("productContainer");
const searchBar = document.getElementById("searchBar");

let currentCategory = "All";

// Setup categories
const catSet = ["All", ...new Set(products.map(p => p.category))];
catSet.forEach(c => {
  const btn = document.createElement("div");
  btn.textContent = c;
  btn.className = "category-btn" + (c === "All" ? " active" : "");
  btn.onclick = () => {
    currentCategory = c;
    document.querySelectorAll(".category-btn").forEach(el => el.classList.toggle("active", el.textContent === c));
    renderProducts();
  };
  categoryContainer.appendChild(btn);
});

// Search handling
searchBar.addEventListener("input", () => renderProducts());

// Render products
function renderProducts() {
  productContainer.innerHTML = "";
  const keyword = searchBar.value.trim().toLowerCase();

  products
    .filter(p => (currentCategory === "All" || p.category === currentCategory))
    .filter(p => p.name.toLowerCase().includes(keyword))
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p><strong>₹${p.price}</strong></p>
        <button class="buy-btn" onclick="initBuy(${p.id})">Buy Now</button>
      `;
      productContainer.appendChild(card);
    });
}

// Begin purchase
function initBuy(id) {
  const prod = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(prod));
  window.location.href = "buy.html";
}

renderProducts();
