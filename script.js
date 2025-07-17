window.onload = () => {
  displayProducts(products);
};

function displayProducts(productList) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  productList.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("product");

    productBox.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button class="buy-button" onclick="buyNow(${product.id})">Buy Now</button>
    `;

    container.appendChild(productBox);
  });
}

function filterCategory(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  const amount = product.price;
  const upiUrl = `upi://pay?pa=hixzam313@okaxis&pn=GadgetCave&am=${amount}&tn=Payment for ${product.name}`;
  window.location.href = upiUrl;
}
