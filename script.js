// ==========================
// KRD FILM - script.js
// ==========================

// Search Movies
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

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

// Watch Now Button
const watchBtn = document.querySelector(".watch-btn");

if (watchBtn) {
    watchBtn.addEventListener("click", () => {
        alert("🎬 Welcome to KRD FILM!");
    });
}

// More Info Button
const infoBtn = document.querySelector(".info-btn");

if (infoBtn) {
    infoBtn.addEventListener("click", () => {
        alert("KRD FILM\nWatch Unlimited Movies & TV Shows.");
    });
}

// Login Button
const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", () => {
        alert("Login page will be added soon.");
    });
}

// Movie Cards
cards.forEach(card => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h3").textContent;

        alert("Now Opening: " + title);

    });

});

// Header Background on Scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.95)";

    } else {

        header.style.background = "rgba(0,0,0,.8)";

    }

});

// Smooth Scroll to Movies
if (watchBtn) {

    watchBtn.addEventListener("click", () => {

        document.querySelector(".movies").scrollIntoView({

            behavior: "smooth"

        });

    });

}

console.log("✅ KRD FILM Loaded Successfully");