const products = [
  {
    name: "Smart Watch",
    mainImage: "images/watch.jpg",
    description: "A high-quality smart watch with fitness tracking and notifications.",
    extraImages: ["images/watch-side.jpg", "images/watch-back.jpg"]
  },
  {
    name: "Wireless Earbuds",
    mainImage: "images/earbuds.jpg",
    description: "Crisp sound, long battery life, and noise cancellation.",
    extraImages: ["images/earbuds-case.jpg", "images/earbuds-close.jpg"]
  },
  {
    name: "Bluetooth Speaker",
    mainImage: "images/speaker.jpg",
    description: "Portable speaker with powerful bass and waterproof design.",
    extraImages: ["images/speaker-front.jpg", "images/speaker-top.jpg"]
  }
];

// Load products
const productList = document.getElementById("product-list");

products.forEach(product => {
  const box = document.createElement("div");
  box.className = "product-box";

  const img = document.createElement("img");
  img.src = product.mainImage;

  const title = document.createElement("h3");
  title.textContent = product.name;

  box.appendChild(img);
  box.appendChild(title);

  box.addEventListener("click", () => openModal(product));
  productList.appendChild(box);
});

// Modal handling
function openModal(product) {
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalImage").src = product.mainImage;
  document.getElementById("modalDescription").textContent = product.description;

  const extraImages = document.getElementById("extraImages");
  extraImages.innerHTML = "";

  product.extraImages.forEach(img => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.onclick = () => {
      document.getElementById("modalImage").src = img;
    };
    extraImages.appendChild(thumb);
  });

  document.getElementById("productModal").style.display = "block";
}

document.querySelector(".close-btn").onclick = () => {
  document.getElementById("productModal").style.display = "none";
};

window.onclick = event => {
  const modal = document.getElementById("productModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
