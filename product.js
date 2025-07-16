const products = [
  {
    category: "Earphones",
    name: "JBL C100SI",
    price: "₹599",
    description: "Deep Bass Wired Earphones",
    image: "images/jbl-c100si.jpg"
  },
  {
    category: "Headphones",
    name: "boAt Rockerz 450",
    price: "₹1499",
    description: "Wireless Bluetooth Headphones",
    image: "images/boat-rockerz450.jpg"
  },
  {
    category: "Smartwatches",
    name: "Noise ColorFit Pulse",
    price: "₹1799",
    description: "Full Touch HD Display Smartwatch",
    image: "images/noise-colorfit.jpg"
  },
  {
    category: "Speakers",
    name: "boAt Stone 200",
    price: "₹1299",
    description: "Waterproof Bluetooth Speaker",
    image: "images/boat-stone.jpg"
  },
  {
    category: "Trimmers",
    name: "Philips QT4011",
    price: "₹1899",
    description: "Beard Trimmer with Titanium Blades",
    image: "images/philips-qt4011.jpg"
  },
  {
    category: "Power Banks",
    name: "MI 10000mAh",
    price: "₹999",
    description: "Fast Charging Power Bank",
    image: "images/mi-powerbank.jpg"
  },
  {
    category: "Other",
    name: "USB LED Light",
    price: "₹49",
    description: "Portable Mini USB Light for Laptops",
    image: "images/usb-led.jpg"
  },
];

function displayProducts() {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  const categories = [...new Set(products.map(p => p.category))];

  categories.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const heading = document.createElement("h2");
    heading.textContent = category;
    categoryDiv.appendChild(heading);

    const row = document.createElement("div");
    row.classList.add("product-container");

    products.filter(p => p.category === category).forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button class="buy-btn" onclick="buyProduct('${product.name}', '${product.price}')">Buy Now</button>
        </div>
      `;

      row.appendChild(card);
    });

    categoryDiv.appendChild(row);
    container.appendChild(categoryDiv);
  });
}

function buyProduct(name, price) {
  localStorage.setItem("selectedProduct", JSON.stringify({ name, price }));
  window.location.href = "buy.html";
}

window.onload = displayProducts;
