const categoryButtonsDiv = document.getElementById("categoryButtons");
const productContainer = document.getElementById("productContainer");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImages = document.getElementById("popup-images");
const popupDescription = document.getElementById("popup-description");
const popupBuy = document.getElementById("popup-buy");
const popupClose = document.getElementById("popup-close");

// 1. Get unique categories
const categories = ["All", ...new Set(products.map(p => p.category))];

// 2. Generate category buttons
categories.forEach(category => {
  const btn = document.createElement("button");
  btn.textContent = category;
  btn.addEventListener("click", () => {
    document.querySelectorAll("#categoryButtons button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showProducts(category === "All" ? products : products.filter(p => p.category === category));
  });
  categoryButtonsDiv.appendChild(btn);
});

// 3. Show all by default
showProducts(products);

// 4. Show product cards
function showProducts(productList) {
  productContainer.innerHTML = "";
  productList.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";
    box.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150'" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">₹${product.price}</p>
      </div>
    `;
    box.addEventListener("click", () => openPopup(product));
    productContainer.appendChild(box);
  });
}

// 5. Open Popup
function openPopup(product) {
  popupTitle.textContent = product.name;
  popupDescription.textContent = product.description;
  popupImages.innerHTML = "";
  product.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    image.alt = product.name;
    image.onerror = () => image.src = "https://via.placeholder.com/100";
    popupImages.appendChild(image);
  });
  popupBuy.onclick = () => window.location.href = product.buyLink;
  popup.style.display = "flex";
}

// 6. Close Popup
popupClose.onclick = () => popup.style.display = "none";
popup.onclick = e => {
  if (e.target === popup) popup.style.display = "none";
};
