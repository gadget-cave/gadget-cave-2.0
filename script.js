// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  if (searchBar) {
    searchBar.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase();
      const products = document.querySelectorAll(".product");
      products.forEach((product) => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = name.includes(searchValue) ? "block" : "none";
      });
    });
  }

  const form = document.getElementById("addressForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const params = new URLSearchParams(window.location.search);
      const name = params.get("name");
      const price = params.get("price");
      const image2 = params.get("image2");

      const address = `
Name: ${document.getElementById("name").value}
Address: ${document.getElementById("address").value}, House: ${document.getElementById("house").value}
Landmark: ${document.getElementById("landmark").value}, City: ${document.getElementById("city").value}
District: ${document.getElementById("district").value}, State: ${document.getElementById("state").value}
Pincode: ${document.getElementById("pincode").value}
Phone: ${document.getElementById("phone").value}
Product: ${name} - ₹${price}
Image: ${image2}
Payment Done to: hixzam313@okaxis`;

      const encodedMsg = encodeURIComponent(address);
      const waLink = `https://wa.me/919744340057?text=${encodedMsg}`;
      window.location.href = waLink;
    });
  }
});
