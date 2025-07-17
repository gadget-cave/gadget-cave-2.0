const productList = document.getElementById("productList");
const popup = document.getElementById("popupContainer");

products.forEach((product, index) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<img src="${product.images[0]}" alt="${product.name}" /><h3>${product.name}</h3><p>₹${product.price}</p>`;
  div.onclick = () => showPopup(product);
  productList.appendChild(div);
});

function showPopup(product) {
  popup.innerHTML = `
    <div class="popup-content">
      ${product.images.map(img => `<img src="${img}" alt="${product.name}" />`).join('')}
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Price:</strong> ₹${product.price}</p>
      <button onclick="buyNow('${product.name}', '${product.price}')">Buy Now</button>
    </div>
  `;
  popup.style.display = "flex";
  popup.onclick = (e) => { if (e.target === popup) popup.style.display = "none"; };
}

function buyNow(name, price) {
  localStorage.setItem("selectedProductName", name);
  localStorage.setItem("selectedProductAmount", price);
  window.location.href = "buy.html";
}
