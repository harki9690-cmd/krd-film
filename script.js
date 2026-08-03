// ==============================
// MyShop - script.js
// ==============================

// Search
const searchInput = document.querySelector(".actions input");
const cards = document.querySelectorAll(".card");

// Cart
let cart = [];

const cartButton = document.querySelector(".actions button");

// Search Products
if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Add To Cart
cards.forEach(card => {

    const button = card.querySelector("button");

    button.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;
        const price = card.querySelector("p").textContent;

        cart.push({
            title,
            price
        });

        updateCart();

        button.innerText = "✓ Added";

        setTimeout(() => {
            button.innerText = "Add to Cart";
        }, 1200);

    });

});

// Update Cart Counter
function updateCart() {

    cartButton.textContent = `Cart (${cart.length})`;

    localStorage.setItem("cart", JSON.stringify(cart));

}

// Load Cart
window.addEventListener("load", () => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

        cart = JSON.parse(savedCart);

        updateCart();

    }

});

// Show Cart
cartButton.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("🛒 Your cart is empty.");
        return;
    }

    let message = "🛒 Shopping Cart\n\n";

    cart.forEach((item, index) => {

        message += `${index + 1}. ${item.title} - ${item.price}\n`;

    });

    message += `\nTotal Items: ${cart.length}`;

    alert(message);

});

console.log("✅ MyShop Loaded Successfully");