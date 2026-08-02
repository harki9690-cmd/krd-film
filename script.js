// KRD FILM

console.log("KRD FILM Loaded");

// Search Box
const searchInput = document.querySelector(".search input");

searchInput.addEventListener("keyup", function () {
    console.log("Searching:", this.value);
});

// Watch Button
const watchBtn = document.querySelector("button");

watchBtn.addEventListener("click", function () {
    alert("Movie Player will be added soon!");
});

// Movie Cards Hover
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 25px red";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});