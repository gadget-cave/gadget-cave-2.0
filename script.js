function displayProducts(products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}" />
      <div class="product-info">
        <div class="product-name">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-price">₹${product.price}</div>
      </div>
    `;

    card.addEventListener("click", () => showPopup(product));
    container.appendChild(card);
  });
}

function showPopup(product) {
  document.getElementById("popup-title").innerText = product.name;
  document.getElementById("popup-description").innerText = product.description;
  document.getElementById("popup-price").innerText = "₹" + product.price;
  document.getElementById("popup-image").src = product.image;

  const popup = document.getElementById("popup");
  popup.style.display = "flex";

  document.getElementById("popup-buy").onclick = () => {
    window.location.href = "https://wa.me/919876543210?text=I'm interested in " + encodeURIComponent(product.name);
  };
}

document.getElementById("popup-close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("searchBar").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.description.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

window.onload = () => {
  displayProducts(products);
};
