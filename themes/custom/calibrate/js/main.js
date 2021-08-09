/**
 * Scroll function
 */

// Media Query
const phones = window.matchMedia("(max-width: 720px)");

// Activating function
window.onscroll = function () {
  phones.matches ? scrollFunction(0) : scrollFunction(400);
};

// Html elements
const navbar = document.querySelector(".main-navigation");
const logo = document.querySelector(".navLogo");

// Actual funtion
function scrollFunction(height) {
  if (
    document.body.scrollTop > height ||
    document.documentElement.scrollTop > height
  ) {
    navbar.style.height = "50px";
    logo.style.height = "30px";
    logo.style.width = "30px";
  } else {
    navbar.style.height = "100px";
    logo.style.height = "70px";
    logo.style.width = "70px";
  }
}
