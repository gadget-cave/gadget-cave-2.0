document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("productContainer");
  const searchInput = document.getElementById("searchInput");

  function renderProducts(filter = "") {
    container.innerHTML = "";
    for (const category in products) {
      const filtered = products[category].filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      );
      if (filtered.length > 0) {
        const title = document.createElement("h2");
        title.className = "category-title";
        title.innerText = category;
        container.appendChild(title);

        filtered.forEach(product => {
          const div = document.createElement("div");
          div.className = "product";
          div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick='buyNow("${product.name}", "${product.price}")'>Buy Now</button>
          `;
          container.appendChild(div);
        });
      }
    }
  }

  searchInput.addEventListener("input", () => {
    renderProducts(searchInput.value);
  });

  renderProducts();
});

function buyNow(name, price) {
  const formHtml = `
    <div style="padding: 20px;">
      <h2>Delivery Address</h2>
      <input placeholder="Name" id="name"><br><br>
      <textarea placeholder="Address" id="address"></textarea><br><br>
      <input placeholder="House/Shop No." id="house"><br><br>
      <input placeholder="Landmark" id="landmark"><br><br>
      <input placeholder="City" id="city"><br><br>
      <input placeholder="District" id="district"><br><br>
      <input placeholder="State" id="state"><br><br>
      <input placeholder="Pincode" id="pincode"><br><br>
      <input placeholder="Phone" id="phone"><br><br>
      <p><b>Pay ₹${price} to UPI: <span style="color:green">hixzam313@okaxis</span></b></p>
      <button onclick='sendWhatsApp("${name}", "${price}")'>I Have Paid</button>
    </div>
  `;
  document.body.innerHTML = formHtml;
}

function sendWhatsApp(product, price) {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const house = document.getElementById("house").value;
  const landmark = document.getElementById("landmark").value;
  const city = document.getElementById("city").value;
  const district = document.getElementById("district").value;
  const state = document.getElementById("state").value;
  const pincode = document.getElementById("pincode").value;
  const phone = document.getElementById("phone").value;

  const fullAddress = `Name: ${name}%0AAddress: ${address}%0AHouse/Shop No: ${house}%0ALandmark: ${landmark}%0ACity: ${city}%0ADistrict: ${district}%0AState: ${state}%0APincode: ${pincode}%0APhone: ${phone}`;
  const msg = `Hi, I have paid for *${product}* (₹${price}).%0A%0A${fullAddress}`;

  window.location.href = `https://wa.me/919744340057?text=${msg}`;
}
