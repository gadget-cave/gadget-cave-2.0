const container = document.getElementById("productContainer");
const popup = document.getElementById("productPopup");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const mainPopupImage = document.getElementById("mainPopupImage");
const thumbnails = document.getElementById("popupThumbnails");
const popupClose = document.getElementById("popupClose");
const buyNowBtn = document.getElementById("buyNowBtn");

let selectedProduct = "";

function renderProducts() {
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.images[0]}" />
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="openPopup(${index})">Buy Now</button>
    `;
    container.appendChild(card);
  });
}

function openPopup(index) {
  const product = products[index];
  selectedProduct = product.name;
  popupTitle.textContent = product.name;
  popupPrice.textContent = product.price;
  mainPopupImage.src = product.images[0];

  thumbnails.innerHTML = "";
  product.images.forEach((img) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.onclick = () => mainPopupImage.src = img;
    thumbnails.appendChild(thumb);
  });

  popup.style.display = "flex";
}

popupClose.onclick = () => popup.style.display = "none";

buyNowBtn.onclick = () => {
  sessionStorage.setItem("selectedProduct", selectedProduct);
  window.location.href = "buy.html";
};

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  container.innerHTML = "";
  products.forEach((product, index) => {
    if (product.name.toLowerCase().includes(query)) {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.images[0]}" />
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="openPopup(${index})">Buy Now</button>
      `;
      container.appendChild(card);
    }
  });
});

renderProducts();
