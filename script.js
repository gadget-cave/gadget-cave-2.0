// Load and display products from product.js
window.onload = () => {
  displayCategories();
  displayProducts(products);
};

// Display product categories
function displayCategories() {
  const categories = [...new Set(products.map(p => p.category))];
  const categoryContainer = document.getElementById('categoryList');
  categoryContainer.innerHTML = '';

  categories.forEach(category => {
    const button = document.createElement('button');
    button.innerText = category;
    button.classList.add('category-btn');
    button.onclick = () => filterProducts(category);
    categoryContainer.appendChild(button);
  });
}

// Filter products by category
function filterProducts(category) {
  const filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

// Search products
function searchProducts() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
}

// Display products on page
function displayProducts(productList) {
  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="description">${product.description}</p>
      <p class="price">Price: ₹${product.price}</p>
      <button class="buy-btn" onclick="buyProduct('${product.name}', '${product.price}', '${product.image}')">Buy Now</button>
    `;

    container.appendChild(card);
  });
}

// Open buy.html with query parameters
function buyProduct(name, price, image) {
  const url = `buy.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`;
  window.location.href = url;
}

// On buy.html: Load product details and handle form
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const productName = params.get("name");
  const productPrice = params.get("price");
  const productImage = params.get("image");

  const productDetail = document.getElementById("productDetail");
  if (productDetail && productName && productPrice) {
    productDetail.innerHTML = `
      <h2>${productName}</h2>
      <img src="${productImage}" width="150" />
      <p><strong>Price:</strong> ₹${productPrice}</p>
    `;
  }

  const form = document.getElementById("addressForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const house = document.getElementById("house").value;
      const landmark = document.getElementById("landmark").value;
      const city = document.getElementById("city").value;
      const district = document.getElementById("district").value;
      const state = document.getElementById("state").value;
      const pincode = document.getElementById("pincode").value;
      const phone = document.getElementById("phone").value;

      const fullAddress = `Name: ${name}
Address: ${address}
House/Shop: ${house}
Landmark: ${landmark}
City: ${city}
District: ${district}
State: ${state}
Pincode: ${pincode}
Phone: ${phone}`;

      const paymentInstructions = document.getElementById("paymentInstructions");
      paymentInstructions.innerHTML = `
        <h3>Payment Instructions</h3>
        <p>Please pay <strong>₹${productPrice}</strong> to the UPI ID: <strong>hixzam313@okaxis</strong></p>
        <a href="upi://pay?pa=hixzam313@okaxis&pn=GadgetCave&am=${productPrice}" class="pay-btn">Click here to pay via UPI app</a>
        <br><br>
        <button onclick="finishOrder(\`${productName}\`, \`${productImage}\`, \`${productPrice}\`, \`${fullAddress.replace(/\n/g, ' | ')}\`)">Finish</button>
      `;

      form.style.display = "none";
    });
  }
});

// Finish order and open WhatsApp
function finishOrder(productName, productImage, price, fullAddress) {
  const message = `🛒 *New Order from Gadget Cave* 🛍️

📦 *Product:* ${productName}
💰 *Amount:* ₹${price}
🏡 *Address Details:*
${fullAddress}

🖼️ Product Image: ${productImage}`;

  const whatsappURL = `https://wa.me/919744340057?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
}
