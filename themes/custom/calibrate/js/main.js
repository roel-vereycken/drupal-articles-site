window.onscroll = function () {
  scrollFunction();
};

const navbar = document.querySelector(".main-navigation");
const logo = document.querySelector(".navLogo");

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
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
