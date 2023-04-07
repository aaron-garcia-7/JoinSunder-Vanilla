//
// Handling Navigation Logic
//

// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");
const activePage = document.querySelector("#activePage");

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
activePage.addEventListener("click", closeNav);

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
    // trigger: ".smartHeader",
    trigger: ".prodImg1",
    scrub: 0.1,
    start: "top 5%",
    // end: "180% top",
    end: "bottom top",
    // markers: {
    //   indent: 124,
    //   startColor: "violet",
    //   endColor: "violet",
    // },
  },
});

gsap.to("#textWrapper2", {
  transform: "translate(0, 0)",
  scrollTrigger: {
    trigger: ".prodImg2",
    scrub: 0.1,
    start: "top 5%",
    end: "bottom top",
    // markers: {
    //   startColor: "coral",
    //   endColor: "coral",
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
  // transform: "translate(-36%, -80%)",
  transform: "translate(-36%, -88%)",
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

let rowWidthTl = gsap.timeline({
  ease: "none",
  scrollTrigger: {
    trigger: ".meetTheTeam",
    scrub: true,
    start: "top top",
    end: "60% top",
    // markers: true,
  },
});
rowWidthTl
  .to(".row", {
    width: "calc(10rem + 36vw)",
  })
  .to(".row", {
    width: "calc(10rem + 41vw)",
  })
  .to(".row", {
    width: "calc(10rem + 41vw)",
  })
  .to(".row", {
    width: "calc(10rem + 41vw)",
  })
  .to(".row", {
    width: "calc(10rem + 46vw)",
  })
  .to(".row", {
    width: "calc(10rem + 46vw)",
  })
  .to(".row", {
    width: "calc(10rem + 46vw)",
  })
  .to(".row", {
    width: "calc(10rem + 48vw)",
  })
  .to(".row", {
    width: "calc(10rem + 48vw)",
  })
  .to(".row", {
    width: "calc(10rem + 48vw)",
  });

// Image Reels

gsap.to("#col1", {
  // y: "-21%",
  y: window.innerWidth <= 1248 ? "0" : "-21%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col2", {
  // y: "-29%",
  y: window.innerWidth <= 1248 ? "0" : "-29%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col3", {
  // y: "-34.3%",
  y: window.innerWidth <= 1248 ? "0" : "-34.3%",
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
