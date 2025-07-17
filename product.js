const products = [
    { id: 1, name: "Smartphone", price: "$299", description: "Latest model with amazing features." },
    { id: 2, name: "Laptop", price: "$799", description: "High performance laptop for gaming and work." },
    { id: 3, name: "Smartwatch", price: "$199", description: "Track your fitness and stay connected." },
    { id: 4, name: "Headphones", price: "$99", description: "Noise-cancelling over-ear headphones." }
];

function displayProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);
