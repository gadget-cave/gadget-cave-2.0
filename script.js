const container = document.getElementById('productContainer');
const searchBar = document.getElementById('searchBar');

function renderProducts(data) {
  container.innerHTML = '';
  data.forEach(category => {
    const categoryTitle = document.createElement('h2');
    categoryTitle.className = 'category';
    categoryTitle.textContent = category.category;
    container.appendChild(categoryTitle);

    category.items.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
        </div>
        <a class="buy-btn" href="buy.html?product=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}">Buy Now</a>
      `;
      container.appendChild(card);
    });
  });
}

renderProducts(products);

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  const filtered = products.map(category => ({
    ...category,
    items: category.items.filter(p => p.name.toLowerCase().includes(query))
  })).filter(cat => cat.items.length > 0);

  renderProducts(filtered);
});
