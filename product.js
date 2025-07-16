// Sample product data - replace with your actual products
const products = [
    {
        id: 1,
        name: "Smartphone X",
        price: 15999,
        image: "images/smartphone.jpg",
        description: "High-performance smartphone with amazing camera"
    },
    {
        id: 2,
        name: "Wireless Earbuds",
        price: 2499,
        image: "images/earbuds.jpg",
        description: "Premium sound quality with noise cancellation"
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 4999,
        image: "images/smartwatch.jpg",
        description: "Track your fitness and stay connected"
    }
    // Add more products as needed
];

// DOM Elements
const productsContainer = document.querySelector('.products-container');
const cartCount = document.getElementById('cart-count');
const authModal = document.getElementById('auth-modal');
const checkoutModal = document.getElementById('checkout-modal');
const accountLink = document.getElementById('account-link');
const closeButtons = document.querySelectorAll('.close');
const tabButtons = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const checkoutForm = document.getElementById('checkout-form');
const totalAmount = document.getElementById('total-amount');

// Cart data
let cart = [];
let selectedProduct = null;
let isLoggedIn = false;

// Display products
function displayProducts() {
    productsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString()}</p>
                <button class="buy-now-btn" data-id="${product.id}">Buy Now</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to Buy Now buttons
    const buyButtons = document.querySelectorAll('.buy-now-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', handleBuyNow);
    });
}

// Handle Buy Now button click
function handleBuyNow(e) {
    const productId = parseInt(e.target.dataset.id);
    selectedProduct = products.find(product => product.id === productId);
    
    if (!isLoggedIn) {
        // Show login modal if not logged in
        authModal.style.display = 'block';
    } else {
        // Show checkout modal if logged in
        totalAmount.textContent = selectedProduct.price.toLocaleString();
        checkoutModal.style.display = 'block';
    }
}

// Auth tab switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show selected form
        authForms.forEach(form => form.classList.remove('active'));
        document.getElementById(`${tab}-form`).classList.add('active');
    });
});

// Close modals
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        authModal.style.display = 'none';
        checkoutModal.style.display = 'none';
    });
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate login success
    isLoggedIn = true;
    authModal.style.display = 'none';
    
    // Update UI for logged in user
    accountLink.textContent = 'My Account';
    
    // If user was trying to buy a product, show checkout
    if (selectedProduct) {
        totalAmount.textContent = selectedProduct.price.toLocaleString();
        checkoutModal.style.display = 'block';
    }
});

// Handle registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate registration success
    isLoggedIn = true;
    authModal.style.display = 'none';
    
    // Update UI for logged in user
    accountLink.textContent = 'My Account';
    
    // If user was trying to buy a product, show checkout
    if (selectedProduct) {
        totalAmount.textContent = selectedProduct.price.toLocaleString();
        checkoutModal.style.display = 'block';
    }
});

// Handle checkout form submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    
    // Close the checkout modal
    checkoutModal.style.display = 'none';
    
    // Create WhatsApp message
    const message = encodeURIComponent(
        `*New Order*\n\n` +
        `*Product:* ${selectedProduct.name}\n` +
        `*Price:* ₹${selectedProduct.price}\n\n` +
        `*Customer Details*\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Address:* ${address}\n` +
        `*Pincode:* ${pincode}\n\n` +
        `Order completed successfully!`
    );
    
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/919744340057?text=${message}`;
});

// Account link click handler
accountLink.addEventListener('click', (e) => {
    if (!isLoggedIn) {
        e.preventDefault();
        authModal.style.display = 'block';
    }
});
