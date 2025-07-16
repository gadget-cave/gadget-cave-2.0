document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "Wireless Earphones-CMF BY NOTHING",
      image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
      description: "High-quality sound and battery life.",
      price: "₹899",
      longDescription: "Enjoy crisp sound with deep bass. Battery lasts 10 hours.",
      extraImages: [],
      category: "Earphones",
      rating: 4.5
    },
    {
      name: "HEADPHONES-P9",
      image: "https://i.ibb.co/vCJrF2NZ/headphonesp9.jpg",
      description: "High quality, C-type charging",
      price: "₹699",
      longDescription: "",
      extraImages: [],
      category: "Headphones",
      rating: 4.2
    },
    // ... (rest of the 25 products remain the same, omitted for brevity)
    {
      name: "DELTON watch",
      image: "https://i.ibb.co/8gmpXQXH/delton-watch-1-0.jpg",
      description: "click more details☝️.",
      price: "₹599",
      longDescription: "AWESOME QUALITY, LATEST ARRIVALS, UNISEX WATCHES, TRENDING MODEL",
      extraImages: [
        "https://i.ibb.co/cpTJjYG/delton-watch-1-1.jpg",
        "https://i.ibb.co/2HrhckZ/delton-watch-1-2.jpg"
      ],
      category: "Watches",
      rating: 4.3
    }
  ];

  const categories = ["All", "Earphones", "Watches", "Headphones", "Speakers", "Trimmers", "Powerbanks", "Combos", "Others"];
  const productsPerPage = 6;
  let currentPage = 1;
  let cart = [];

  const container = document.getElementById("product-list");
  const searchBar = document.getElementById("search-bar");
  const popup = document.getElementById("popup");
  const popupClose = document.getElementById("popup-close");
  const popupTitle = document.getElementById("popup-title");
  const popupImages = document.getElementById("popup-images");
  const popupDescription = document.getElementById("popup-description");
  const popupPrice = document.getElementById("popup-price");
  const popupWhatsApp = document.getElementById("popup-whatsapp");
  const categoryFilters = document.getElementById("category-filters");
  const priceMin = document.getElementById("price-min");
  const priceMax = document.getElementById("price-max");
  const priceMinValue = document.getElementById("price-min-value");
  const priceMaxValue = document.getElementById("price-max-value");
  const ratingFilter = document.getElementById("rating-filter");
  const ratingValue = document.getElementById("rating-value");
  const prevPage = document.getElementById("prev-page");
  const nextPage = document.getElementById("next-page");
  const pageNumbers = document.getElementById("page-numbers");
  const cartCount = document.getElementById("cart-count");

  if (!container || !searchBar || !popup || !popupClose || !popupTitle || !popupImages || !popupDescription || !popupPrice || !popupWhatsApp || !categoryFilters || !priceMin || !priceMax || !priceMinValue || !priceMaxValue || !ratingFilter || !ratingValue || !prevPage || !nextPage || !pageNumbers || !cartCount) {
    console.error("Error: Missing DOM elements", {
      container, searchBar, popup, popupClose, popupTitle, popupImages, popupDescription, popupPrice, popupWhatsApp,
      categoryFilters, priceMin, priceMax, priceMinValue, priceMaxValue, ratingFilter, ratingValue, prevPage, nextPage,
      pageNumbers, cartCount
    });
    container.innerHTML = "<p>Error loading. Check console.</p>";
    return;
  }

  console.log("DOM loaded, initializing...");

  function displayProducts(productsToShow) {
    container.innerHTML = "";
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = productsToShow.slice(start, end);

    if (paginatedProducts.length === 0) {
      container.innerHTML = "<p>No products found.</p>";
      return;
    }

    paginatedProducts.forEach(product => {
      const productBox = document.createElement("div");
      productBox.classList.add("product");
      productBox.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150'; console.log('Image failed for ${product.name}');">
        <h2>${product.name}</h2>
        <p>${product.description || "No description"}</p>
        <strong>${product.price}</strong>
        <p class="rating">${'★'.repeat(Math.floor(product.rating))}</p>
        <a href="https://wa.me/919744340057?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" target="_blank">
          <button class="whatsapp-btn">Order</button>
        </a>
        <button class="cart-btn">Add to Cart</button>
      `;
      productBox.querySelector(".cart-btn").addEventListener("click", () => {
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.name} added!`);
      });
      productBox.addEventListener("click", (e) => {
        if (e.target.closest("a") || e.target.classList.contains("cart-btn")) return;
        popupTitle.textContent = product.name;
        popupImages.innerHTML = `<img src="${product.image}" onerror="this.src='https://via.placeholder.com/150';">`;
        popupDescription.textContent = product.description || product.longDescription || "No details";
        popupPrice.textContent = product.price;
        popupWhatsApp.href = `https://wa.me/919744340057?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`;
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
      container.appendChild(productBox);
    });

    updatePagination(productsToShow);
  }

  function updatePagination(productsToShow) {
    const totalPages = Math.ceil(productsToShow.length / productsPerPage);
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.addEventListener("click", () => {
        currentPage = i;
        displayProducts(products);
      });
      pageNumbers.appendChild(btn);
    }
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages;
  }

  function filterProducts() {
    const query = searchBar.value.toLowerCase();
    const category = categoryFilters.querySelector("input:checked")?.value || "All";
    const minPrice = parseInt(priceMin.value) || 0;
    const maxPrice = parseInt(priceMax.value) || 2000;
    const minRating = parseFloat(ratingFilter.value) || 0;

    const filtered = products.filter(p => {
      const price = parseInt(p.price.replace("₹", "") || "0");
      return (
        (category === "All" || p.category === category) &&
        price >= minPrice &&
        price <= maxPrice &&
        p.rating >= minRating &&
        p.name.toLowerCase().includes(query)
      );
    });
    currentPage = 1;
    displayProducts(filtered);
  }

  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  searchBar.addEventListener("input", filterProducts);
  priceMin.addEventListener("input", () => { priceMinValue.textContent = `₹${priceMin.value}`; filterProducts(); });
  priceMax.addEventListener("input", () => { priceMaxValue.textContent = `₹${priceMax.value}`; filterProducts(); });
  ratingFilter.addEventListener("input", () => { ratingValue.textContent = ratingFilter.value; filterProducts(); });

  categories.forEach(cat => {
    const div = document.createElement("div");
    div.innerHTML = `<input type="radio" id="${cat}" name="category" value="${cat}" ${cat === "All" ? "checked" : ""}><label for="${cat}">${cat}</label>`;
    div.querySelector("input").addEventListener("change", filterProducts);
    categoryFilters.appendChild(div);
  });

  prevPage.addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; displayProducts(products); }
  });

  nextPage.addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) { currentPage++; displayProducts(products); }
  });

  priceMinValue.textContent = `₹${priceMin.value}`;
  priceMaxValue.textContent = `₹${priceMax.value}`;
  ratingValue.textContent = ratingFilter.value;

  // Initial display of all products
  console.log("Displaying all products...");
  displayProducts(products);
});
