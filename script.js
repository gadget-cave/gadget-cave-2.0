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
      <div>₹${product.price}</div>
    `;
    box.addEventListener("click", () => showPopup(product));
    productContainer.appendChild(box);
  });
}

function showPopup(product) {
  popupTitle.innerText = product.title;
  popupImages.innerHTML = product.image.map(url => `<img src="${url}" style="width:100%;margin-bottom:10px;" />`).join('');
  popupDescription.innerText = product.description;
  popupBuy.onclick = () => {
    const buyUrl = `buy.html?product=${encodeURIComponent(product.title)}&price=${product.price}`;
    window.location.href = buyUrl;
  };
  popup.style.display = "flex";
}

document.getElementById("popup-close").onclick = () => {
  popup.style.display = "none";
};

document.getElementById("searchInput").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  displayFiltered(filtered);
});

function displayFiltered(filtered) {
  productContainer.innerHTML = "";
  filtered.forEach(product => {
    const box = document.createElement("div");
    box.className = "product-box";
    box.innerHTML = `
      <img src="${product.image[0]}" />
      <div class="product-title">${product.title}</div>
      <div>₹${product.price}</div>
    `;
    box.addEventListener("click", () => showPopup(product));
    productContainer.appendChild(box);
  });
}

function setupCategories() {
  const categories = ["All", ...new Set(allProducts.map(p => p.category))];
  const buttonContainer = document.getElementById("categoryButtons");
  buttonContainer.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.innerText = cat;
    btn.className = "category-button";
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      displayProducts(cat);
    });
    if (cat === "All") btn.classList.add("active");
    buttonContainer.appendChild(btn);
  });
}

window.onload = () => {
  allProducts = products;
  setupCategories();
  displayProducts();
};
