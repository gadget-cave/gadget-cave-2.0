document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productContainer");
  const categoryButtons = document.getElementById("categoryButtons");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popup-title");
  const popupImages = document.getElementById("popup-images");
  const popupDescription = document.getElementById("popup-description");
  const popupLongDesc = document.getElementById("popup-longDescription");
  const popupBuy = document.getElementById("popup-buy");
  const popupClose = document.getElementById("popup-close");

  let currentProduct = null;

  // Unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];
  categories.forEach(category => {
    const btn = document.createElement("button");
    btn.textContent = category;
    btn.addEventListener("click", () => {
      document.querySelectorAll("#categoryButtons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      displayProducts(category === "All" ? products : products.filter(p => p.category === category));
    });
    categoryButtons.appendChild(btn);
  });

  // Show all products initially
  displayProducts(products);

  function displayProducts(items) {
    productContainer.innerHTML = "";
    items.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button class="buy-now">More Details</button>
      `;
      card.querySelector(".buy-now").addEventListener("click", () => showPopup(product));
      productContainer.appendChild(card);
    });
  }

  function showPopup(product) {
    currentProduct = product;
    popupTitle.textContent = product.name;

    // Main + Extra images
    popupImages.innerHTML = `<img src="${product.image}" alt="${product.name}" />`;
    product.extraImages.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      popupImages.appendChild(img);
    });

    popupDescription.textContent = product.description;
    popupLongDesc.textContent = product.longDescription || "";
    popup.style.display = "flex";
  }

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popupBuy.addEventListener("click", () => {
    if (currentProduct) {
      // Redirect to WhatsApp payment message with product name
      const message = `Hi, I'm interested in buying: ${currentProduct.name} - ${currentProduct.price}`;
      const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    }
  });

  // Close popup on background click
  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
});
