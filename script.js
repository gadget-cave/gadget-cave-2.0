// Render categories and products
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");
  const catArea = document.getElementById("categoryButtons");
  const allCats = ["All", ...new Set(products.map(p => p.category))];

  // Populate category buttons
  allCats.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll('#categoryButtons button').forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showProducts(cat);
    };
    if (cat === "All") btn.classList.add("active");
    catArea.appendChild(btn);
  });

  function showProducts(cat) {
    container.innerHTML = "";
    const list = cat === "All" ? products : products.filter(p => p.category === cat);
    list.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="price">${p.price}</div>
        <button class="buy-now" onclick="openPopup(${products.indexOf(p)})">Buy Now</button>
      `;
      container.appendChild(card);
    });
  }

  showProducts("All");

  // Popup setup
  window.openPopup = idx => {
    const p = products[idx];
    document.getElementById("popup-title").textContent = p.name;
    document.getElementById("popup-description").innerHTML = p.longDescription || p.description;
    document.getElementById("popup-images").innerHTML =
      [p.image, ...(p.extraImages || [])].map(u => `<img src="${u}">`).join("");
    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-buy").onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(p));
      window.location.href = "buy.html";
    };
  };

  document.getElementById("popup-close").onclick = () => {
    document.getElementById("popup").style.display = "none";
  };
});
