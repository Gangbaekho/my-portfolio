const sideNav = document.querySelector(".side-nav");
const xIcon = document.querySelector(".x-icon");
const hamberger = document.querySelector(".hamberger");

// setting time line!
const tl = gsap.timeline({ default: { ease: "power1.out" } });

hamberger.addEventListener("click", () => {
  tl.to(".side-nav", { x: "0%", duration: 0.5 });
  tl.to(".nav__link a", { y: "0%", duration: 1 });
});

xIcon.addEventListener("click", () => {
  tl.to(".side-nav", { x: "-100%", duration: 0.5 });
  tl.to(".nav__link a", { y: "100%", duration: 1 });
});
