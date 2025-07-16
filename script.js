document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("productContainer");
  const catArea = document.getElementById("categoryButtons");
  const searchInput = document.getElementById("searchInput");

  const cats = ["All", ...new Set(products.map(p=>p.category))];
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.className = "category-btn";
    btn.onclick = () => {
      catArea.querySelectorAll("button").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(cat, searchInput.value);
    };
    if (cat === "All") btn.classList.add("active");
    catArea.append(btn);
  });

  searchInput.oninput = () => {
    const active = catArea.querySelector("button.active").textContent;
    renderProducts(active, searchInput.value);
  };

  function renderProducts(cat, search) {
    container.innerHTML = "";
    let arr = products;
    if (cat && cat !== "All") arr = arr.filter(p => p.category===cat);
    if (search) arr = arr.filter(p => p.name.toLowerCase().includes(search.trim().toLowerCase()));
    arr.forEach((p,i) => createCard(p,i));
  }

  function createCard(p,i){
    const c = document.createElement("div");
    c.className="product-card";
    c.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="price">${p.price}</div>
      <button class="buy-now" onclick="openPopup(${i})">Buy Now</button>
    `;
    container.append(c);
  }

  renderProducts("All","");

  window.openPopup = idx => {
    const p = products[idx];
    document.getElementById("popup-title").textContent = p.name;
    document.getElementById("popup-description").innerHTML = p.longDescription || p.description;
    document.getElementById("popup-images").innerHTML =
      [p.image, ...(p.extraImages||[])].map(u=>`<img src="${u}">`).join("");
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup-buy").onclick = () => {
      localStorage.setItem("selectedProduct", JSON.stringify(p));
      window.location.href = "buy.html";
    };
  };

  document.getElementById("popup-close").onclick = () => {
    document.getElementById("popup").style.display="none";
  };
});
