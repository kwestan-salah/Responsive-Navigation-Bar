const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
})