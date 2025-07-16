// ---------------------------------------
// 1. DATA DISPLAY (Index page)
// ---------------------------------------
function displayProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  const grouped = {};
  products.forEach((p, i) => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push({ ...p, _index: i });
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
        <button class="buy-now-button" onclick="openPopup(${p._index})">Buy Now</button>
      `;
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  });
}

function openPopup(idx) {
  const p = products[idx];
  localStorage.setItem("selectedProduct", JSON.stringify(p));
  document.getElementById("popup-title").textContent = p.name;
  const imgs = [p.image, ...(p.extraImages||[])].map(u => `<img src="${u}">`).join("");
  document.getElementById("popup-images").innerHTML = imgs;
  document.getElementById("popup-description").innerHTML = p.longDescription || p.description;
  document.getElementById("popup").style.display = "flex";
}

document.getElementById("popup-close")?.addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("buy-now-btn")?.addEventListener("click", () => {
  window.location.href = "buy.html";
});

document.getElementById("search-bar")?.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q));
  displayProducts();
  products = filtered;
});

// ---------------------------------------
// 2. LOGIN & REGISTER
// ---------------------------------------
function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}
if (location.pathname.includes("login.html")) {
  document.getElementById("loginForm").onsubmit = e => {
    e.preventDefault();
    const m = document.getElementById("loginMobile").value;
    const p = document.getElementById("loginPassword").value;
    const users = JSON.parse(localStorage.getItem("users")||"[]");
    const u = users.find(u=>u.mobile===m && u.password===p);
    if (u) {
      localStorage.setItem("user", JSON.stringify(u));
      window.location="index.html";
    } else alert("Invalid login");
  };
}
if (location.pathname.includes("register.html")) {
  document.getElementById("registerForm").onsubmit = e => {
    e.preventDefault();
    const n=document.getElementById("regName").value;
    const m=document.getElementById("regMobile").value;
    const pw=document.getElementById("regPassword").value;
    const cf=document.getElementById("regConfirmPassword").value;
    if (pw!==cf) return alert("Password mismatch");
    const users=JSON.parse(localStorage.getItem("users")||"[]");
    if (users.find(u=>u.mobile===m)) return alert("Mobile exists");
    users.push({ name: n, mobile: m, password: pw });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify({ name:n, mobile:m }));
    window.location="index.html";
  };
}

// ---------------------------------------
// 3. BUY FLOW (buy.html)
// ---------------------------------------
if (location.pathname.includes("buy.html")) {
  document.getElementById("addressForm").onsubmit = e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    localStorage.setItem("deliveryInfo", JSON.stringify(data));
    document.getElementById("paymentSection").style.display = "block";
  };
  document.getElementById("confirmOrderBtn").onclick = () => {
    const del = JSON.parse(localStorage.getItem("deliveryInfo"));
    const p = JSON.parse(localStorage.getItem("selectedProduct"));
    const usr = getUser();
    if (!usr) return alert("Login first");
    const order = {...del, product:p.name, price:p.price.replace("₹","")};
    let ords = JSON.parse(localStorage.getItem("orders")||"[]");
    ords.push(order);
    localStorage.setItem("orders", JSON.stringify(ords));

    const msg = 
      `Name: ${del.name}%0A`+
      `Address: ${del.address}%0A`+
      (del.house?`House: ${del.house}%0A`:"")+
      (del.landmark?`Landmark: ${del.landmark}%0A`:"")+
      `City: ${del.city}, District: ${del.district}, State: ${del.state}, Pincode: ${del.pincode}%0A`+
      `Phone: ${del.phone}%0A`+
      `Product: ${p.name}%0AAmount: ${p.price}%0AOrder Complete ✅`;

    alert(`Please pay ${p.price} to UPI ` + "hixzam313@okaxis");
    window.location=`https://wa.me/919744340057?text=${msg}`;
  };
}

// ---------------------------------------
// 4. SHOW ORDERS (account.html)
// ---------------------------------------
if (location.pathname.includes("account.html")) {
  const div = document.getElementById("order-history");
  const usr = getUser();
  if (!usr) {
    div.innerHTML = "<p>Please login</p>";
  } else {
    const ords = JSON.parse(localStorage.getItem("orders")||"[]")
      .filter(o=>o.phone===usr.mobile);
    if (!ords.length) div.innerHTML="<p>No orders yet</p>";
    else {
      div.innerHTML = ords.map(o =>
        `<div class="order-box">
           <strong>${o.product}</strong><br>
           ₹${o.price}<br>
           ${o.address}, ${o.city} - ${o.pincode}<br>
         </div>`
      ).join("");
    }
  }
}

// ---------------------------------------
// 5. INIT PAGE
// ---------------------------------------
if (location.pathname.includes("index.html")) {
  displayProducts();
}
