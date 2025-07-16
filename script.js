document.addEventListener('DOMContentLoaded', () => {
  displayCategories();
});

// Load products and group by category
function displayCategories() {
  const container = document.getElementById('product-container');
  const categories = {};

  // Group products by category
  products.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  // Clear previous content
  container.innerHTML = '';

  // Render each category
  for (let category in categories) {
    const section = document.createElement('section');
    section.className = 'category-section';

    const heading = document.createElement('h2');
    heading.textContent = category;
    section.appendChild(heading);

    const productGrid = document.createElement('div');
    productGrid.className = 'product-grid';

    categories[category].forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="showPopup(${product.id})">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="buyNow(${product.id})">Buy Now</button>
      `;

      productGrid.appendChild(card);
    });

    section.appendChild(productGrid);
    container.appendChild(section);
  }
}

// Buy Now redirection with product info
function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  localStorage.setItem('selectedProduct', JSON.stringify(product));
  window.location.href = 'buy.html';
}

// Show product popup with extra images
function showPopup(productId) {
  const product = products.find(p => p.id === productId);
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');

  let imagesHTML = `<img src="${product.image}" alt="${product.name}" class="main-image">`;

  if (product.extraImages && product.extraImages.length) {
    imagesHTML += '<div class="extra-images">';
    product.extraImages.forEach(img => {
      imagesHTML += `<img src="${img}" class="thumbnail">`;
    });
    imagesHTML += '</div>';
  }

  popupContent.innerHTML = `
    <span class="close" onclick="closePopup()">&times;</span>
    <div class="popup-body">
      ${imagesHTML}
      <div class="popup-details">
        <h3>${product.name}</h3>
        <p><strong>₹${product.price}</strong></p>
        <p>${product.description}</p>
        <button onclick="buyNow(${product.id})">Buy Now</button>
      </div>
    </div>
  `;

  popup.style.display = 'block';
}

// Close popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
