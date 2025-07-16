// Utility
function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function saveOrder(order) {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
}

// Login
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const mobile = document.getElementById("loginMobile").value;
    const password = document.getElementById("loginPassword").value;
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const match = users.find(u => u.mobile === mobile && u.password === password);
    if (match) {
      localStorage.setItem("user", JSON.stringify(match));
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid login credentials.");
    }
  });
}

// Register
if (document.getElementById("registerForm")) {
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const mobile = document.getElementById("regMobile").value;
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("regConfirmPassword").value;
    if (password !== confirm) return alert("Passwords do not match");
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(u => u.mobile === mobile)) return alert("User already exists");
    const user = { name, mobile, password };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered successfully!");
    window.location.href = "index.html";
  });
}

// Show orders on account.html
if (document.getElementById("order-history")) {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  const user = getUser();
  const myOrders = orders.filter(o => o.mobile === user?.mobile);
  if (myOrders.length === 0) {
    document.getElementById("order-history").innerHTML = "<p>No orders yet.</p>";
  } else {
    document.getElementById("order-history").innerHTML = myOrders.map(o => `
      <div class="order-box">
        <strong>${o.product}</strong><br>
        ₹${o.price}<br>
        ${o.address}<br>
        <hr>
      </div>
    `).join("");
  }
}

// Address form → payment → WhatsApp
if (document.getElementById("addressForm")) {
  const addressForm = document.getElementById("addressForm");
  const paymentSection = document.getElementById("paymentSection");
  const confirmBtn = document.getElementById("confirmOrderBtn");
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  addressForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const address = document.getElementById("addressInput").value;
    localStorage.setItem("lastAddress", address);
    paymentSection.style.display = "block";
  });

  confirmBtn.addEventListener("click", () => {
    const user = getUser();
    const address = localStorage.getItem("lastAddress");
    if (!selectedProduct || !address || !user) return alert("Missing order data");

    saveOrder({
      mobile: user.mobile,
      product: selectedProduct.name,
      price: selectedProduct.price.replace("₹", ""),
      address
    });

    const msg = `Product: ${selectedProduct.name}%0AAmount: ${selectedProduct.price}%0AAddress: ${address}%0AOrder Placed ✅`;
    window.location.href = `https://wa.me/919744340057?text=${msg}`;
  });
}

// Index page: product display + popup logic
if (document.getElementById("product-list")) {
  const container = document.getElementById("product-list");
  const searchBar = document.getElementById("search-bar");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");
  const popupTitle = document.getElementById("popup-title");
  const popupImages = document.getElementById("popup-images");
  const popupDescription = document.getElementById("popup-description");
  const buyNowBtn = document.getElementById("buyNowBtn");
  const categoryFilter = document.getElementById("category-filter");

  let selectedProduct = null;

  function displayProducts(filteredProducts) {
    container.innerHTML = "";
    filteredProducts.forEach(product => {
      const box = document.createElement("div");
      box.classList.add("product");
      box.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <strong>${product.price}</strong>
      `;

      box.addEventListener("click", () => {
        selectedProduct = product;
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        popupTitle.textContent = product.name;
        popupImages.innerHTML = "";
        const allImages = [product.image, ...(product.extraImages || [])];
        allImages.forEach(img => {
          const imgEl = document.createElement("img");
          imgEl.src = img;
          popupImages.appendChild(imgEl);
        });
        popupDescription.innerHTML = product.longDescription || product.description;
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
      });

      container.appendChild(box);
    });
  }

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  buyNowBtn.addEventListener("click", () => {
    window.location.href = "buy.html";
  });

  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
  });

  const allCats = ["All", ...new Set(products.map(p => p.category))];
  categoryFilter.innerHTML = allCats.map(cat => `<button class="cat-btn" data-cat="${cat}">${cat}</button>`).join(" ");

  categoryFilter.addEventListener("click", (e) => {
    if (e.target.dataset.cat) {
      const cat = e.target.dataset.cat;
      if (cat === "All") displayProducts(products);
      else displayProducts(products.filter(p => p.category === cat));
    }
  });

  displayProducts(products);
}

// Update login name or hide login btn
const loginBtn = document.getElementById("loginBtn");
if (loginBtn && getUser()) {
  loginBtn.textContent = getUser().name.split(" ")[0];
  loginBtn.href = "account.html";
}
