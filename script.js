// Get product list element
const productListElement = document.getElementById('product-list');

// Get login and register links
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

// Define products ( temporary data )
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

// Function to render product list
function renderProductList() {
    productListElement.innerHTML = '';
    products.forEach((product) => {
        const productElement = document.createElement('LI');
        productElement.innerHTML = `
            ${product.name} - ₹${product.price}
            <button class="buy-now-button" data-product-id="${product.id}">Buy Now</button>
        `;
        productListElement.appendChild(productElement);
    });
}

// Add event listeners to buy now buttons
productListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('buy-now-button')) {
        const productId = event.target.dataset.productId;
        const product = products.find((p) => p.id === parseInt(productId));
        // Redirect to address filling page
        window.location.href = `address.html?productId=${productId}&productName=${product.name}&productPrice=${product.price}`;
    }
});

// Login and register functionality
loginLink.addEventListener('click', () => {
    // Open login modal or redirect to login page
    console.log('Login link clicked');
});

registerLink.addEventListener('click', () => {
    // Open register modal or redirect to register page
    console.log('Register link clicked');
});

// Render product list on page load
renderProductList();
