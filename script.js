function displayProducts(productsToShow) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';
  productsToShow.forEach(product => {
    const box = document.createElement('div');
    box.className = 'product-box';
    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
      <button class="buy-btn" onclick="buyNow('${product.name}', '${product.price}')">Buy Now</button>
    `;
    container.appendChild(box);
  });
}

function searchProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(search));
  displayProducts(results);
}

function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

function buyNow(name, price) {
  window.location.href = `buy.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
}

window.onload = () => displayProducts(products);
