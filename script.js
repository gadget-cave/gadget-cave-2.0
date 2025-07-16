const productContainer = document.getElementById("productContainer");
const categoryContainer = document.getElementById("categoryContainer");
const searchBar = document.getElementById("search-bar");

// Group products by category
const categories = [...new Set(products.map(p => p.category))];

// Create category filter buttons
categories.forEach(category => {
  const btn = document.createElement("button");
  btn.className = "category-button";
  btn.innerText = category;
  btn.onclick = () => showProducts(products.filter(p => p.category === category));
  categoryContainer.appendChild(btn);
});

// Display all products by default
showProducts(products);

// Search functionality
searchBar.addEventListener("input", () => {
  const keyword = searchBar.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword)
  );
  showProducts(filtered);
});

function showProducts(list) {
  productContainer.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <button class="buy-now-btn" onclick="buyNow('${product.name}', '${product.image}', '${product.price}')">Buy Now</button>
    `;
    productContainer.appendChild(card);
  });
}

function buyNow(name, image, price) {
  const orderDetails = { name, image, price };
  localStorage.setItem("order", JSON.stringify(orderDetails));
  window.location.href = "buy.html";
}
