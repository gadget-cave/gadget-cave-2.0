document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  products.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";

    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">₹${product.price}</div>
      <button onclick="buyNow(${product.id}, ${product.price})">Buy Now</button>
    `;

    container.appendChild(box);
  });
});

function buyNow(id, price) {
  localStorage.setItem("selectedAmount", price);
  window.location.href = "buy.html";
}
