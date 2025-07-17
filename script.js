document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");
  const searchInput = document.getElementById("search");

  function createProductCard(product) {
    return `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button class="buy-button" onclick="location.href='buy.html?product=${encodeURIComponent(product.name)}&amount=${product.price}'">Buy Now</button>
      </div>
    `;
  }

  function renderProducts(products) {
    container.innerHTML = "";
    for (const category in products) {
      const section = document.createElement("div");
      section.className = "category-section";
      section.innerHTML = `<h2 class="category-title">${category}</h2><div class="products">${products[category].map(createProductCard).join("")}</div>`;
      container.appendChild(section);
    }
  }

  function filterProducts(query) {
    const filtered = {};
    for (const category in productsData) {
      const matched = productsData[category].filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
      if (matched.length > 0) filtered[category] = matched;
    }
    renderProducts(filtered);
  }

  searchInput.addEventListener("input", e => filterProducts(e.target.value));
  renderProducts(productsData);
});
