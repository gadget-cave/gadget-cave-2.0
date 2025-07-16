const products = [
  {
    name: "Wireless Earphones-CMF BY NOTHING",
    image: "https://i.ibb.co/cXhm2q40/earphones.jpg",
    description: "High-quality sound and battery life.",
    price: "₹899",
    longDescription: "Enjoy crisp and clear sound with deep bass. Battery lasts up to 10 hours per charge.",
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
  {
    name: "Samsung Watch with Airpods",
    image: "https://i.ibb.co/S4KZqPkG/samsung-watch-with-airpods.jpg",
    description: "Fitness tracker and call support.",
    price: "₹1199",
    longDescription: "",
    extraImages: [],
    category: "Combos",
    rating: 4.7
  },
  {
    name: "CASIO G-SHOCK",
    image: "https://i.ibb.co/9HTJwrjN/CASIO-G-SHOCK.jpg",
    description: "Awesome quality, chain model.",
    price: "₹999",
    longDescription: "",
    extraImages: [],
    category: "Watches",
    rating: 4.4
  },
  {
    name: "TRACKON - watch",
    image: "https://i.ibb.co/sp6nVFHD/TRACKON-watch.jpg",
    description: "Awesome quality, trending model.",
    price: "₹599",
    longDescription: "",
    extraImages: [],
    category: "Watches",
    rating: 4.3
  },
  {
    name: "Marshal Ember ANC - earpods",
    image: "https://i.ibb.co/8nfGR3vk/Marshal-Ember-ANC-earpod.jpg",
    description: "High-quality sound, 6 eartips, 1 charging cable.",
    price: "₹999",
    longDescription: "",
    extraImages: [],
    category: "Earphones",
    rating: 4.6
  },
  {
    name: "MZ bluetooth speaker",
    image: "https://i.ibb.co/gZYPxgYS/MZ-bluetooth-speaker.jpg",
    description: "High-quality sound and trending model.",
    price: "₹699",
    longDescription: "",
    extraImages: [],
    category: "Speakers",
    rating: 4.1
  },
  {
    name: "HTC-trimmer",
    image: "https://i.ibb.co/dwydCFJZ/HTC-trimmer.jpg",
    description: "Awesome quality, latest arrivals.",
    price: "₹649",
    longDescription: "",
    extraImages: [],
    category: "Trimmers",
    rating: 4.0
  },
  {
    name: "Magnet locking watch",
    image: "https://i.ibb.co/CKMPZjDG/Magnet-locking-watch.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "",
    extraImages: [
      "https://i.ibb.co/QvL7gvLd/magnet-locking-watch-brown.jpg",
      "https://i.ibb.co/9Hb8fRMw/magnet-locking-watch-green.jpg"
    ],
    category: "Watches",
    rating: 4.4
  },
  {
    name: "MARSHALL headset",
    image: "https://i.ibb.co/rRgjQkmp/marshall-headset-1-0.jpg",
    description: "High-quality sound and latest arrivals.",
    price: "₹949",
    longDescription: "",
    extraImages: ["https://i.ibb.co/9Dxz1Xq/MARSHALL-headset.jpg"],
    category: "Headphones",
    rating: 4.5
  },
  {
    name: "BOAT AIRBUDS",
    image: "https://i.ibb.co/RkSWyDKh/BOAT-airbuds.jpg",
    description: "click more details☝️.",
    price: "₹749",
    longDescription: "500 mah battery, wireless earpods, call time upto 5hr",
    extraImages: [
      "https://i.ibb.co/CSrCsWT/BOAT-airbuds-blue.jpg",
      "https://i.ibb.co/RpG2JZZR/BOAT-airbuds-mix.jpg"
    ],
    category: "Earphones",
    rating: 4.3
  },
  {
    name: "best ever combo",
    image: "https://i.ibb.co/21yghLzS/apple-watch-headset.jpg",
    description: "click more details☝️.",
    price: "₹1499",
    longDescription: "Apple watch + P9 headset + airpods 2 + Rendom bag",
    extraImages: ["https://i.ibb.co/8Ls04V5q/apple-watch-combo-black.jpg"],
    category: "Combos",
    rating: 4.8
  },
  {
    name: "WATCH- LG GOLD",
    image: "https://i.ibb.co/KjxM14sD/LG-GOLD-watch.jpg",
    description: "click more details☝️.",
    price: "₹549",
    longDescription: "Awesome quality, latest arrivals",
    extraImages: ["https://i.ibb.co/sdkX47Kz/LG-GOLD-green.jpg"],
    category: "Watches",
    rating: 4.2
  },
  {
    name: "BOAT Airdopes 600",
    image: "https://i.ibb.co/JjvhcFZt/BOAT-airdopes-600.jpg",
    description: "click more detils☝️.",
    price: "₹749",
    longDescription: "Wireless earphone, 500 mah battery, call time upto 5hr",
    extraImages: [
      "https://i.ibb.co/5xT1pQ4R/BOAT-airdopes-600-black.jpg",
      "https://i.ibb.co/vxJsdnfB/BOAT-airdopes-600-blue.jpg"
    ],
    category: "Earphones",
    rating: 4.4
  },
  {
    name: "Samsung GALAXY BUDS 2 PRO",
    image: "https://i.ibb.co/j9thw23H/Samsung-GALAXY-BUDS-2-PRO.jpg",
    description: "click more details☝️.",
    price: "₹849",
    longDescription: "touch operation, type-c charging, Battery Capacity 700mAh, Ceramic Finish premium Earbuds Design, Next Generation PixArt Chipset For Lossless Connectivity.",
    extraImages: [
      "https://i.ibb.co/ksq6jSHQ/galaxy-buds-white.jpg",
      "https://i.ibb.co/Z63zTgRN/galaxy-buds-black.jpg"
    ],
    category: "Earphones",
    rating: 4.7
  },
  {
    name: "Ultra smart watch special edition",
    image: "https://i.ibb.co/xq4Tr7FS/Ultra-smart-watch-special-edition.jpg",
    description: "click more details☝️",
    price: "₹749",
    longDescription: "5+menu style, fitpro app, wireless charging, etc..",
    extraImages: ["https://i.ibb.co/qLk2hhLv/ultra.jpg"],
    category: "Watches",
    rating: 4.6
  },
  {
    name: "MASSAGE GUN",
    image: "https://i.ibb.co/fYbbQTbc/MASSAGE-GUN.jpg",
    description: "Massage Gun | Strike Handheld Percussion Massage Gun with Interchangeable Massage Heads",
    price: "₹749",
    longDescription: "",
    extraImages: [],
    category: "Others",
    rating: 4.3
  },
  {
    name: "premium airpods pro2",
    image: "https://i.ibb.co/Xrv0n01C/apple-airpod-pro-2-mix.jpg",
    description: "click more details☝️",
    price: "₹799",
    longDescription: "5-8 hours battery backup including case, Premium build material, Compatible with all devices, Both Sensors Fully Functional, 598mah battery, Premium Metal Engraving, Extra buds",
    extraImages: [
      "https://i.ibb.co/XxD8StC8/apple-airpod-pro2-black.jpg",
      "https://i.ibb.co/LhZRNFQf/apple-airpod-pro2-white.jpg"
    ],
    category: "Earphones",
    rating: 4.8
  },
  {
    name: "YIXIAO, powerbank",
    image: "https://i.ibb.co/qYxy1H2s/powerbank-1.jpg",
    description: "click more details☝️",
    price: "₹1399",
    longDescription: "10,000 mAh powerbank, Awesome Quality ▪️New Arrivals ▪️Dual input port",
    extraImages: [
      "https://i.ibb.co/PZ42nSxb/power-bank-1-0.jpg",
      "https://i.ibb.co/cMX6WDB/power-bank-1-1.jpg"
    ],
    category: "Powerbanks",
    rating: 4.5
  },
  {
    name: "HTC TRIMMER",
    image: "https://i.ibb.co/jvwSjGPs/htc-trimmer-1.jpg",
    description: "click more details☝️",
    price: "₹699",
    longDescription: "-PREMIUM QUALITY, LATEST ARRIVALS, TRENDING MODEL",
    extraImages: ["https://i.ibb.co/Mk9b03nh/htc-trimmer-1-0jpg.jpg"],
    category: "Trimmers",
    rating: 4.4
  },
  {
    name: "NIKE 𝐖𝐀𝐓𝐂𝐇",
    image: "https://i.ibb.co/9HbxGww8/nike-watch-1-0.jpg",
    description: "click more details☝️",
    price: "₹1599",
    longDescription: "NEW ARRIVAL, GOOD QUALITY",
    extraImages: [],
    category: "Watches",
    rating: 4.7
  },
  {
    name: "CASIO watch",
    image: "https://i.ibb.co/Zprbcj0B/casio-1-0.jpg",
    description: "click more details☝️",
    price: "₹699",
    longDescription: "-AWESOME QUALITY, LATEST ARRIVALS, UNISEX WATCHES, TRENDING MODEL",
    extraImages: ["https://i.ibb.co/ycVh0skx/casio-1-1.jpg"],
    category: "Watches",
    rating: 4.3
  },
  {
    name: "JBL TUNE 510",
    image: "https://i.ibb.co/tMvfYQpB/J-BL-tune-510-1-o.jpg",
    description: "click more details☝️",
    price: "₹829",
    longDescription: "TF card support, Aux cable Support, wireless, connected with ios& android, powerful sound with 360 AUDIO, wire free",
    extraImages: [
      "https://i.ibb.co/twRfYk42/J-BL-tune-510-1-2.jpg",
      "https://i.ibb.co/h1Y61XZF/J-BL-tune-510-1-1.jpg"
    ],
    category: "Headphones",
    rating: 4.6
  },
  {
    name: "TISSOT watch",
    image: "https://i.ibb.co/XZm2C6F4/tissot-watch-1-0.jpg",
    description: "click more details☝️.",
    price: "₹649",
    longDescription: "-AWESOME QUALITY, LATEST ARRIVALS, GENTS WATCHES, TRENDING MODEL",
    extraImages: [
      "https://i.ibb.co/gZMr1b76/tissot-watch-1-1jpg.jpg",
      "https://i.ibb.co/V4hC7XB/tissot-watch-1-2.jpg"
    ],
    category: "Watches",
    rating: 4.4
  },
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
  console.error("DOM elements missing:", {
    container, searchBar, popup, popupClose, popupTitle, popupImages, popupDescription, popupPrice, popupWhatsApp,
    categoryFilters, priceMin, priceMax, priceMinValue, priceMaxValue, ratingFilter, ratingValue, prevPage, nextPage,
    pageNumbers, cartCount
  });
  container.innerHTML = "<p>Error: Failed to load page. Check console for details.</p>";
} else {
  console.log("DOM initialized successfully. Loading products...");

  function displayProducts(filteredProducts) {
    container.innerHTML = "";
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    if (paginatedProducts.length === 0) {
      container.innerHTML = "<p>No products match the current filters.</p>";
      return;
    }

    paginatedProducts.forEach(product => {
      const productBox = document.createElement("div");
      productBox.classList.add("product");
      productBox.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/150'; console.log('Image failed for ${product.name}');">
        <h2>${product.name}</h2>
        <p>${product.description || "No description available"}</p>
        <strong>${product.price}</strong>
        <p class="rating">${'★'.repeat(Math.floor(product.rating))}</p>
        <a href="https://wa.me/919744340057?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}" target="_blank">
          <button class="whatsapp-btn">Order on WhatsApp</button>
        </a>
        <button class="cart-btn">Add to Cart</button>
      `;
      productBox.querySelector(".cart-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        cart.push(product);
        cartCount.textContent = cart.length;
        alert(`${product.name} added to cart!`);
      });
      productBox.addEventListener("click", (e) => {
        if (e.target.closest("a") || e.target.classList.contains("cart-btn")) return;
        popupTitle.textContent = product.name;
        popupImages.innerHTML = "";
        const allImages = [product.image, ...(product.extraImages || [])].filter(img => img);
        if (allImages.length === 0) {
          const imgEl = document.createElement("img");
          imgEl.src = "https://via.placeholder.com/150";
          popupImages.appendChild(imgEl);
        } else {
          allImages.forEach(imgUrl => {
            const imgEl = document.createElement("img");
            imgEl.src = imgUrl;
            imgEl.onerror = () => {
              imgEl.src = "https://via.placeholder.com/150";
              console.log(`Popup image failed for ${imgUrl}`);
            };
            popupImages.appendChild(imgEl);
          });
        }
        let desc = product.description || "";
        if (product.longDescription && product.longDescription !== product.description) {
          desc += "<br><br>" + product.longDescription;
        }
        popupDescription.innerHTML = desc || "No description available";
        popupPrice.textContent = product.price;
        popupWhatsApp.href = `https://wa.me/919744340057?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}`;
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
      container.appendChild(productBox);
    });

    updatePagination(filteredProducts);
  }

  function updatePagination(filteredProducts) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    pageNumbers.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.textContent = i;
      if (i === currentPage) pageBtn.classList.add("active");
      pageBtn.addEventListener("click", () => {
        currentPage = i;
        filterAndDisplay();
      });
      pageNumbers.appendChild(pageBtn);
    }
    prevPage.disabled = currentPage === 1;
    nextPage.disabled = currentPage === totalPages || totalPages === 0;
    console.log(`Pagination updated: Page ${currentPage} of ${totalPages}`);
  }

  function filterAndDisplay() {
    console.log("Applying filters...");
    const query = searchBar.value.toLowerCase().trim();
    const selectedCategory = categoryFilters.querySelector("input:checked")?.value || "All";
    const minPrice = parseInt(priceMin.value) || 0;
    const maxPrice = parseInt(priceMax.value) || 2000;
    const minRating = parseFloat(ratingFilter.value) || 0;

    const filtered = products.filter(p => {
      const priceNum = parseInt(p.price.replace("₹", "") || "0");
      const matches = (
        (selectedCategory === "All" || p.category === selectedCategory) &&
        priceNum >= minPrice &&
        priceNum <= maxPrice &&
        p.rating >= minRating &&
        (p.name.toLowerCase().includes(query) ||
         (p.description && p.description.toLowerCase().includes(query)) ||
         p.category.toLowerCase().includes(query) ||
         (p.longDescription && p.longDescription.toLowerCase().includes(query)))
      );
      return matches;
    });

    console.log(`Filtered ${filtered.length} products (query: "${query}", category: "${selectedCategory}", price: ${minPrice}-${maxPrice}, rating: ≥${minRating})`);
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

  searchBar.addEventListener("input", filterAndDisplay);

  categories.forEach(category => {
    const div = document.createElement("div");
    div.innerHTML = `
      <input type="radio" id="${category}" name="category" value="${category}" ${category === "All" ? "checked" : ""}>
      <label for="${category}">${category}</label>
    `;
    div.querySelector("input").addEventListener("change", filterAndDisplay);
    categoryFilters.appendChild(div);
  });

  priceMin.addEventListener("input", () => {
    priceMinValue.textContent = `₹${priceMin.value}`;
    filterAndDisplay();
  });

  priceMax.addEventListener("input", () => {
    priceMaxValue.textContent = `₹${priceMax.value}`;
    filterAndDisplay();
  });

  ratingFilter.addEventListener("input", () => {
    ratingValue.textContent = ratingFilter.value;
    filterAndDisplay();
  });

  prevPage.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      filterAndDisplay();
    }
  });

  nextPage.addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / productsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      filterAndDisplay();
    }
  });

  priceMinValue.textContent = `₹${priceMin.value}`;
  priceMaxValue.textContent = `₹${priceMax.value}`;
  ratingValue.textContent = ratingFilter.value;

  // Ensure all products load initially
  console.log("Initializing with all products...");
  filterAndDisplay();
}
