document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('product-container');

  function displayProducts(productsToShow) {
    container.innerHTML = '';

    for (let category in productsToShow) {
      const section = document.createElement('div');
      section.className = 'category';

      const title = document.createElement('h2');
      title.textContent = category;
      section.appendChild(title);

      const grid = document.createElement('div');
      grid.className = 'product-grid';

      productsToShow[category].forEach(product => {
        const box = document.createElement('div');
        box.className = 'product';

        box.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>₹${product.price}</p>
          <button onclick="buyProduct('${product.name}', ${product.price})">Buy Now</button>
        `;

        grid.appendChild(box);
      });

      section.appendChild(grid);
      container.appendChild(section);
    }
  }

  displayProducts(products);

  document.getElementById('searchBar').addEventListener('input', e => {
    const query = e.target.value.toLowerCase();
    const filtered = {};

    for (let category in products) {
      const filteredItems = products[category].filter(p =>
        p.name.toLowerCase().includes(query)
      );
      if (filteredItems.length > 0) filtered[category] = filteredItems;
    }

    displayProducts(filtered);
  });
});

function buyProduct(name, price) {
  sessionStorage.setItem('productName', name);
  sessionStorage.setItem('productPrice', price);
  window.location.href = 'buy.html';
}
