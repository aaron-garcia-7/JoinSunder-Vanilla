//
// Handling Navigation Logic
//

// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");

let navState = false;

const toggleNav = () => {
  navState = !navState;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    logo.classList.add("logoActive");
    navLogo.classList.add("navLogoActive");
    mainContent.classList.add("mainContentActive");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    mainContent.classList.remove("mainContentActive");
  }
};

const closeNav = () => {
  navState = false;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    logo.classList.add("logoActive");
    navLogo.classList.add("navLogoActive");
    mainContent.classList.add("mainContentActive");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    mainContent.classList.remove("mainContentActive");
  }
};

burger.addEventListener("click", toggleNav);
mainContent.addEventListener("click", closeNav);

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

gsap.to("#col1", {
  y: "-21%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col2", {
  y: "-29%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col3", {
  y: "-34.3%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col4", {
  y: "-29%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
