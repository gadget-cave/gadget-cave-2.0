// -- PRODUCT DISPLAY & POPUP
function displayProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  const grouped = {};
  products.forEach((p, idx) => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push({ ...p, _idx: idx });
  });

  Object.keys(grouped).forEach(cat => {
    const section = document.createElement("div");
    section.className = "category-section";
    const h = document.createElement("h2");
    h.textContent = cat;
    h.className = "category-heading";
    section.appendChild(h);
    const grid = document.createElement("div");
    grid.className = "product-grid";

    grouped[cat].forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" class="product-image">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p class="price">${p.price}</p>
        <button class="buy-now-button" onclick="openPopup(${p._idx})">Buy Now</button>
      `;
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}

window.openPopup = idx => {
  const p = products[idx];
  localStorage.setItem("selectedProduct", JSON.stringify(p));
  document.getElementById("popup-title").textContent = p.name;
  document.getElementById("popup-description").innerHTML = p.longDescription || p.description;
  document.getElementById("popup-images").innerHTML = [p.image, ...(p.extraImages || [])].map(u => `<img src="${u}">`).join("");
  document.getElementById("popup").style.display = "flex";
};

document.getElementById("popup-close")?.addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("buy-now-btn")?.addEventListener("click", () => {
  window.location.href = "buy.html";
});

// -- SEARCH
document.getElementById("search-bar")?.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q));
  window.products = filtered; // override list for next render
  displayProducts();
});

// -- LOGIN / REGISTER
function getUser() { return JSON.parse(localStorage.getItem("user") || 'null'); }

if (location.pathname.endsWith("login.html")) {
  document.getElementById("loginForm").onsubmit = e => {
    e.preventDefault();
    const m = document.getElementById("loginMobile").value;
    const p = document.getElementById("loginPassword").value;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const u = users.find(u => u.mobile === m && u.password === p);
    if (u) {
      localStorage.setItem("user", JSON.stringify(u));
      window.location = "index.html";
    } else alert("Invalid credentials");
  };
}

if (location.pathname.endsWith("register.html")) {
  document.getElementById("registerForm").onsubmit = e => {
    e.preventDefault();
    const n = document.getElementById("regName").value;
    const m = document.getElementById("regMobile").value;
    const pw = document.getElementById("regPassword").value;
    const cf = document.getElementById("regConfirmPassword").value;
    if (pw !== cf) return alert("Passwords don't match");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(u => u.mobile === m)) return alert("Mobile already registered");
    const newUser = { name: n, mobile: m, password: pw };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    window.location = "index.html";
  };
}

// -- BUY FLOW & PAYMENT
if (location.pathname.endsWith("buy.html")) {
  document.getElementById("addressForm").onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    localStorage.setItem("deliveryInfo", JSON.stringify(data));
    document.getElementById("paymentSection").style.display = "block";
  };

  document.getElementById("confirmOrderBtn").onclick = () => {
    const del = JSON.parse(localStorage.getItem("deliveryInfo") || "{}");
    const p = JSON.parse(localStorage.getItem("selectedProduct") || "{}");
    const usr = getUser();
    if (!usr) return alert("Please login first");

    const order = { ...del, product: p.name, price: p.price.replace("₹", ""), phone: usr.mobile };
    const ords = JSON.parse(localStorage.getItem("orders") || "[]");
    ords.push(order);
    localStorage.setItem("orders", JSON.stringify(ords));

    const msg = 
      `Name: ${del.name}%0A` +
      `Address: ${del.address}%0A` +
      (del.house ? `House: ${del.house}%0A` : "") +
      (del.landmark ? `Landmark: ${del.landmark}%0A` : "") +
      `City: ${del.city}, District: ${del.district}, State: ${del.state}, Pincode: ${del.pincode}%0A` +
      `Phone: ${del.phone}%0A` +
      `Product: ${p.name}%0AAmount: ${p.price}%0AOrder Completed ✅`;

    alert(`Pay ${p.price} via UPI to hixzam313@okaxis`);
    window.location = `https://wa.me/919744340057?text=${msg}`;
  };
}

// -- SHOW ORDERS
if (location.pathname.endsWith("account.html")) {
  const div = document.getElementById("order-history");
  const usr = getUser();
  if (!usr) return div.innerHTML = "<p>Please login to view orders.</p>";

  const ords = JSON.parse(localStorage.getItem("orders") || "[]").filter(o => o.phone === usr.mobile);
  div.innerHTML = ords.length === 0
    ? "<p>No orders yet.</p>"
    : ords.map(o => `
        <div class="order-box">
          <strong>${o.product}</strong><br>
          ₹${o.price}<br>
          ${o.address}, ${o.city} - ${o.pincode}
        </div>`).join("");
}

// -- INITIAL LOAD
if (location.pathname.endsWith("index.html") || location.pathname === "/") {
  window.onload = displayProducts;
}
