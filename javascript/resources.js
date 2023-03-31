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
const cta2 = document.querySelector("#cta2");
const cta2Circle = document.querySelector("#cta2Circle");

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
// CTA2 Hover Animation
//

cta2.addEventListener("mousemove", (e) => {
  const rect = cta2.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  cta2Circle.style.setProperty("--mouse-x", `${y}px`);
  cta2Circle.style.setProperty("--mouse-y", `${x}px`);
});

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

// Text Wrappers
gsap.to("#textWrapper1", {
  transform: "translate(0, 0)",
  scrollTrigger: {
    trigger: ".smartHeader",
    scrub: 0.1,
    start: "top 5%",
    end: "140% top",
    // markers: {
    //   indent: 64,
    //   startColor: "lightblue",
    //   endColor: "lightblue",
    // },
  },
});

gsap.to("#textWrapper2", {
  transform: "translate(0, 0)",
  scrollTrigger: {
    trigger: ".smartHeader",
    scrub: 0.1,
    start: "180% 5%",
    end: "420% top",
    // markers: {
    //   startColor: "yellow",
    //   endColor: "yellow",
    // },
  },
});

// Meet the ___ Team

gsap.to(".content", {
  transform: "translate(0, 100%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".meetTheTeam",
    scrub: true,
    start: "top top",
    end: "bottom bottom",
    // markers: {
    //   startColor: "violet",
    //   endColor: "violet",
    // },
  },
});

gsap.to(".column", {
  transform: "translate(-29%, -80%)",
  ease: "none",
  scrollTrigger: {
    trigger: ".meetTheTeam",
    scrub: true,
    start: "top top",
    end: "bottom bottom",
    // markers: {
    //   startColor: "violet",
    //   endColor: "violet",
    // },
  },
});

gsap.to(".innerColumn", {
  transform: "translate(0, -24%)",
  // transform: "translate(0, -120px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".meetTheTeam",
    scrub: true,
    start: "top top",
    end: "bottom bottom",
    // markers: {
    //   startColor: "violet",
    //   endColor: "violet",
    // },
  },
});

// Image Reels

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
