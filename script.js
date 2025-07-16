function renderProducts(productsToRender) {
  const container = document.getElementById('productContainer');
  container.innerHTML = "";

  productsToRender.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <p><strong>${p.price}</strong></p>
      <button class="buy-btn" onclick="buyProduct(${p.id})">Buy Now</button>
    `;
    container.appendChild(card);
  });
}

function buyProduct(id) {
  const product = products.find(p => p.id === id);
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "buy.html";
}

document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(value));
  renderProducts(filtered);
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
