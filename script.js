const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

function renderProducts() {
  container.innerHTML = "";
  Object.entries(products).forEach(([category, items]) => {
    const section = document.createElement("div");
    section.className = "category";
    section.innerHTML = `<h2>${category}</h2>`;
    const productList = document.createElement("div");
    productList.className = "products";

    items.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>₹${product.price}</strong></p>
        <button class="buy-btn" onclick="buyProduct('${product.name}', ${product.price}, '${product.image}')">Buy Now</button>
      `;
      productList.appendChild(card);
    });

    section.appendChild(productList);
    container.appendChild(section);
  });
}

function buyProduct(name, price, image) {
  localStorage.setItem("buyProduct", JSON.stringify({ name, price, image }));
  window.location.href = "buy.html";
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  document.querySelectorAll(".product-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? "block" : "none";
  });
});

renderProducts();
