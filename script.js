// For homepage: index.html
if (document.getElementById("product-list")) {
  const container = document.getElementById("product-list");
  const searchBar = document.getElementById("search-bar");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");
  const popupTitle = document.getElementById("popup-title");
  const popupImages = document.getElementById("popup-images");
  const popupDescription = document.getElementById("popup-description");
  const buyNowBtn = document.getElementById("buy-now-btn");

  let selectedProduct = null;

  function displayProducts(filtered) {
    container.innerHTML = "";
    filtered.forEach(product => {
      const box = document.createElement("div");
      box.className = "product";
      box.innerHTML = `
        <img src="${product.image}" />
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <strong>${product.price}</strong>
      `;
      box.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") return;
        selectedProduct = product;
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        popupTitle.textContent = product.name;
        popupImages.innerHTML = [product.image, ...(product.extraImages || [])]
          .map(url => `<img src="${url}">`).join("");
        popupDescription.innerHTML = product.description + "<br><br>" + (product.longDescription || "");
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
      container.appendChild(box);
    });
  }

  popupClose.onclick = () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  };

  popup.addEventListener("click", e => {
    if (e.target === popup) popupClose.click();
  });

  buyNowBtn.onclick = () => {
    if (selectedProduct) {
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
      window.location.href = "buy.html";
    }
  };

  searchBar.addEventListener("input", () => {
    const q = searchBar.value.toLowerCase();
    const f = products.filter(p => p.name.toLowerCase().includes(q));
    displayProducts(f);
  });

  displayProducts(products);
}

// For buy.html
if (document.getElementById("addressForm")) {
  const form = document.getElementById("addressForm");
  const paySection = document.getElementById("paymentSection");
  const confirmBtn = document.getElementById("confirmOrderBtn");

  form.onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem("deliveryInfo", JSON.stringify(data));
    paySection.style.display = "block";
  };

  confirmBtn.onclick = () => {
    const delivery = JSON.parse(localStorage.getItem("deliveryInfo") || "{}");
    const product = JSON.parse(localStorage.getItem("selectedProduct") || "{}");
    const msg =
      `Name: ${delivery.name}%0A` +
      `Address: ${delivery.address}%0A` +
      (delivery.house ? `House No: ${delivery.house}%0A` : "") +
      (delivery.landmark ? `Landmark: ${delivery.landmark}%0A` : "") +
      `City: ${delivery.city}, District: ${delivery.district}, State: ${delivery.state}, Pincode: ${delivery.pincode}%0A` +
      `Phone: ${delivery.phone}%0A` +
      `Product: ${product.name}%0AAmount: ${product.price}%0AOrder Completed ✅`;

    alert(`Please pay ${product.price} to UPI ID: hixzam313@okaxis`);
    window.location.href = `https://wa.me/919744340057?text=${msg}`;
  };
}
