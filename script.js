let allProducts = [];
const productContainer = document.getElementById("productContainer");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImages = document.getElementById("popup-images");
const popupDescription = document.getElementById("popup-description");
const popupBuy = document.getElementById("popup-buy");

function displayProducts(category = "All") {
  productContainer.innerHTML = "";

  let filtered = category === "All"
    ? allProducts
    : allProducts.filter(p => p.category === category);

  filtered.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";
    box.innerHTML = `
      <img src="${product.image[0]}" />
      <div class="product-title">${product.title}</div>
      <div>₹${product.price}</div
