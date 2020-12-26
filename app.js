const sideNav = document.querySelector(".side-nav");
const xIcon = document.querySelector(".x-icon");
const hamberger = document.querySelector(".hamberger");

hamberger.addEventListener("click", openSideNav);
xIcon.addEventListener("click", closeSideNav);

function openSideNav() {
  sideNav.style.display = "block";
}

function closeSideNav() {
  sideNav.style.display = "none";
}
