// 1. Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Health Awareness Website!");
});


// 2. Mobile Navigation Menu
const navbar = document.querySelector(".navbar");

const menuButton = document.createElement("button");
menuButton.innerHTML = "☰";
menuButton.className = "menu-button";
menuButton.setAttribute("aria-label", "Toggle navigation");

navbar.appendChild(menuButton);

const navLinks = document.querySelector(".navbar ul");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
});


// 3. Close Menu After Clicking a Link
document.querySelectorAll(".navbar ul a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show-menu");
    });
});


// 4. Welcome Alert
setTimeout(function () {
    alert("Welcome to our Health Awareness Website!");
}, 1000);


// 5. Contact Form Validation
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = contactForm.querySelector(
        'input[type="text"]'
    ).value.trim();

    const email = contactForm.querySelector(
        'input[type="email"]'
    ).value.trim();

    const message = contactForm.querySelector(
        "textarea"
    ).value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields!");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert(
        "Thank you, " + name +
        "! Your message has been submitted successfully."
    );

    contactForm.reset();
});


// 6. Back To Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.className = "top-button";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});