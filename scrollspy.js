// Get The Header Element
const header = document.querySelector("header");

// Initialize Gumshoe
const spy = new Gumshoe(".nav-links a", {
  // Offsetting Due To Fixed Header
  offset: function () {
    return header.getBoundingClientRect().height;
  },
});
