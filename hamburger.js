// Get The Elements Responsible For Navigating
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Toggle On/Off The Mobile Menu
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.add("fade");
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});
