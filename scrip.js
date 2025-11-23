// Select cart elements
const cartItemsList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

let total = 0;

// Attach event listeners to ALL "Add to Cart" buttons
document.querySelectorAll(".add-bnt").forEach(button => {
    button.addEventListener("click", function () {
        const card = this.closest(".card"); // get product card
        const name = card.querySelector("strong i").innerText; // product name
        const priceText = card.querySelector("p:nth-of-type(2)").innerText; // price text (e.g. Php 80.00)

        // Extract numeric price
        const price = parseFloat(priceText.replace(/[^\d.]/g, ""));

        addToCart(name, price);
    });
});

// Function to add item to cart
function addToCart(name, price) {
    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `${name} - ₱${price.toFixed(2)}`;

    // Add to list
    cartItemsList.appendChild(li);

    // Update total
    total += price;
    cartTotal.innerText = total.toFixed(2);
}
