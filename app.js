// Mobile Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("open");
  links.forEach((link) => {
    link.classList.add("fade");
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});