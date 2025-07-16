let allProducts = [];

function loadProducts(products) {
    allProducts = products;
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    products.forEach((category) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-section';

        const title = document.createElement('h2');
        title.textContent = category.category;
        categoryDiv.appendChild(title);

        const row = document.createElement('div');
        row.className = 'product-row';

        category.items.forEach((product) => {
            const box = document.createElement('div');
            box.className = 'product-box';

            box.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>Price:</strong> ₹${product.price}</p>
                <button class="buy-btn" onclick='buyNow(${JSON.stringify(product)})'>Buy Now</button>
            `;

            row.appendChild(box);
        });

        categoryDiv.appendChild(row);
        container.appendChild(categoryDiv);
    });
}

// Search
document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = allProducts.map(category => ({
        category: category.category,
        items: category.items.filter(product => product.name.toLowerCase().includes(query))
    })).filter(cat => cat.items.length > 0);
    loadProducts(filtered);
});

// Buy Now → Redirect to buy.html
function buyNow(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'buy.html';
}

// Submit Form → Open UPI App → Then go to WhatsApp
function submitForm() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const house = document.getElementById('house').value;
    const landmark = document.getElementById('landmark').value;
    const city = document.getElementById('city').value;
    const district = document.getElementById('district').value;
    const state = document.getElementById('state').value;
    const pincode = document.getElementById('pincode').value;
    const phone = document.getElementById('phone').value;

    if (!name || !address || !city || !district || !state || !pincode || !phone) {
        alert('Please fill all required fields');
        return;
    }

    const fullAddress = `${name}\n${address}, ${house}, ${landmark}\n${city}, ${district}, ${state} - ${pincode}\nPhone: ${phone}`;

    // Open UPI payment
    const upiURL = `upi://pay?pa=hixzam313@okaxis&pn=GadgetCave&am=${product.price}&cu=INR&tn=Payment for ${product.name}`;
    window.open(upiURL, '_blank');

    // Wait 5 seconds then redirect to WhatsApp
    setTimeout(() => {
        const whatsappMsg = `*Order Confirmation*\n\n*Product:* ${product.name}\n*Price:* ₹${product.price}\n*Image:* ${product.image}\n\n*Shipping Address:*\n${fullAddress}\n\nThank you for your purchase!`;

        const whatsappLink = `https://wa.me/919744340057?text=${encodeURIComponent(whatsappMsg)}`;
        window.location.href = whatsappLink;
    }, 5000);
}

// Load products on homepage
window.addEventListener('DOMContentLoaded', () => {
    if (typeof products !== 'undefined') {
        loadProducts(products);
    }
});
