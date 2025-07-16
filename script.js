// Load and render products
const productContainer = document.getElementById("productContainer");
const categoryTabs = document.getElementById("categoryTabs");
const searchInput = document.getElementById("search-bar");

// Load products by default
let currentCategory = "All";

// Render products to screen
function renderProducts(category = "All", keyword = "") {
  productContainer.innerHTML = "";

  let filtered = products.filter(product => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = product.name.toLowerCase().includes(keyword.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    productContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach(product => {
    const box = document.createElement("div");
    box.className = "product";
    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <strong>${product.price}</strong>
      <button class="buy-now-btn">Buy Now</button>
    `;
    box.querySelector(".buy-now-btn").onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "buy.html";
    };
    productContainer.appendChild(box);
  });
}

// Create category tabs
function renderCategories() {
  const categories = ["All", ...new Set(products.map(p => p.category))];
  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.className = "category-btn";
    if (category === currentCategory) btn.classList.add("active");
    btn.onclick = () => {
      currentCategory = category;
      document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(currentCategory, searchInput.value);
    };
    categoryTabs.appendChild(btn);
  });
}

searchInput?.addEventListener("input", () => {
  renderProducts(currentCategory, searchInput.value);
});

// Initialize
renderCategories();
renderProducts();
