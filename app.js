const sideNav = document.querySelector(".side-nav");
const xIcon = document.querySelector(".x-icon");
const hamberger = document.querySelector(".hamberger");
const backdrop = document.querySelector(".backdrop");

// setting time line!
const tl = gsap.timeline({ default: { ease: "power1.out" } });

function openSideNav() {
  tl.to(".side-nav", { x: "0%", duration: 0.5 });
  tl.to(".nav__link a", { y: "0%", duration: 1 });
  backdrop.style.display = "block";
}

function closeSideNav() {
  tl.to(".side-nav", { x: "-100%", duration: 0.5 });
  tl.to(".nav__link a", { y: "100%", duration: 1 });
  backdrop.style.display = "none";
}

hamberger.addEventListener("click", openSideNav);
xIcon.addEventListener("click", closeSideNav);
backdrop.addEventListener("click", closeSideNav);
