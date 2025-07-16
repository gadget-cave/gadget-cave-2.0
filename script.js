const categoryContainer = document.getElementById("categories");
const productContainer = document.getElementById("productContainer");
const searchBar = document.getElementById("searchBar");

function getCategories() {
  return [...new Set(products.map(p => p.category))];
}

function displayCategories() {
  categoryContainer.innerHTML = "";
  const categories = getCategories();
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      displayProducts(products.filter(p => p.category === cat));
    };
    categoryContainer.appendChild(btn);
  });
}

function displayProducts(items) {
  productContainer.innerHTML = "";
  items.forEach(prod => {
    const box = document.createElement("div");
    box.className = "product";
    box.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p>${prod.description}</p>
      <strong>${prod.price}</strong><br>
      <button class="buy-btn" onclick='startOrder(${JSON.stringify(prod)})'>Buy Now</button>
    `;
    productContainer.appendChild(box);
  });
}

function startOrder(product) {
  const form = `
    <div class="product">
      <h3>Fill Address for: ${product.name}</h3>
      <input placeholder="Name" id="name"><br>
      <input placeholder="Address" id="address"><br>
      <input placeholder="House No (Optional)" id="house"><br>
      <input placeholder="Landmark (Optional)" id="landmark"><br>
      <input placeholder="City" id="city"><br>
      <input placeholder="District" id="district"><br>
      <input placeholder="State" id="state"><br>
      <input placeholder="Pincode" id="pincode"><br>
      <input placeholder="Phone Number" id="phone"><br><br>
      <p>Now pay <strong>${product.price}</strong> to <strong>hixzam313@okaxis</strong> using any UPI app.</p><br>
      <button onclick="finishOrder(${JSON.stringify(product)})">Finish</button>
    </div>`;
  productContainer.innerHTML = form;
  categoryContainer.innerHTML = "";
}

function finishOrder(product) {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const house = document.getElementById("house").value;
  const landmark = document.getElementById("landmark").value;
  const city = document.getElementById("city").value;
  const district = document.getElementById("district").value;
  const state = document.getElementById("state").value;
  const pincode = document.getElementById("pincode").value;
  const phone = document.getElementById("phone").value;

  const fullAddress = `Name: ${name}%0AAddress: ${address}%0AHouse No: ${house}%0ALandmark: ${landmark}%0ACity: ${city}, District: ${district}, State: ${state}, Pincode: ${pincode}%0APhone: ${phone}`;
  const message = `Hi, I have placed an order for ${product.name} (${product.price}).%0A${fullAddress}%0AOrder completed ✅`;
  const waUrl = `https://wa.me/919744340057?text=${message}`;
  window.location.href = waUrl;
}

searchBar.addEventListener("input", () => {
  const keyword = searchBar.value.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(keyword));
  displayProducts(results);
});

displayCategories();
displayProducts(products);
