//
// Handling Navigation Logic
//

// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");
const activePage = document.querySelectorAll(".activePage");
const firstNavLink = document.querySelector("#firstNavLink");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");
const cta2 = document.querySelector("#cta2");
const cta2Circle = document.querySelector("#cta2Circle");
const cta3 = document.querySelector("#cta3");
const cta3Circle = document.querySelector("#cta3Circle");

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
const openNav = () => {
  navState = true;

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
activePage.forEach((obj) => {
  obj.addEventListener("click", closeNav);
});

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
// CTA3 Hover Animation
//

cta3.addEventListener("mousemove", (e) => {
  const rect = cta3.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  cta3Circle.style.setProperty("--mouse-x", `${y}px`);
  cta3Circle.style.setProperty("--mouse-y", `${x}px`);
});

//
// Handling Video Container Logic
//

const videoContainer = document.querySelector(".videoContainer");
const closeVideoBurger = document.querySelector(".closeVideoBurger");
const videoElement = document.querySelector("#videoElement");

let videoState = false;

const toggleVideo = () => {
  videoState = !videoState;
  videoElement.play();

  if (videoState) {
    videoContainer.classList.add("videoContainerActive");
    closeVideoBurger.classList.add("closeVideoBurgerActive");
  } else {
    videoContainer.classList.remove("videoContainerActive");
    closeVideoBurger.classList.remove("closeVideoBurgerActive");
  }
};
const openVideo = () => {
  videoState = true;
  videoElement.play();

  if (videoState) {
    videoContainer.classList.add("videoContainerActive");
  } else {
    videoContainer.classList.remove("videoContainerActive");
  }
};
const closeVideo = () => {
  videoState = false;
  videoElement.pause();

  if (videoState) {
    videoContainer.classList.add("videoContainerActive");
  } else {
    videoContainer.classList.remove("videoContainerActive");
  }
};

cta2.addEventListener("click", () => {
  toggleVideo();
});
closeVideoBurger.addEventListener("click", () => {
  toggleVideo();
  videoElement.pause();
});

videoContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("videoContainer")) {
    toggleVideo();
    videoElement.pause();
  }
});

//
// a11y tabIndex
//

logo.addEventListener("focusin", () => {
  closeNav();
});

cta2.addEventListener("focusin", () => {
  closeNav();
});

firstNavLink.addEventListener("focusin", () => {
  openNav();
  closeVideo();
});

navLogo.addEventListener("focusin", () => {
  openNav();
});

videoElement.addEventListener("focus", () => {
  openVideo();
});

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

// Text Wrappers
gsap.to("#textWrapper1", {
  transform: "translate(0, 0)",
  scrollTrigger: {
    trigger: ".prodImg1",
    scrub: 0.1,
    start: "top 5%",
    end: "bottom top",
  },
});

gsap.to("#textWrapper2", {
  transform: "translate(0, 0)",
  scrollTrigger: {
    trigger: ".prodImg2",
    scrub: 0.1,
    start: "top 5%",
    end: "bottom top",
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
  },
});

gsap.to(".column", {
  // transform: "translate(-36%, calc(0.2vw - 88%))",
  transform: "translate(-49%, calc(0.2vw - 77%))",
  ease: "none",
  scrollTrigger: {
    trigger: ".meetTheTeam",
    // scrub: true,
    toggleActions: "play none none reverse",
    start: "center center",
    end: "bottom bottom",
    // markers: true,
  },
});

// let rowWidthTl = gsap.timeline({
gsap.to(".row", {
  width: "calc(10rem + 53vw)",
  ease: "none",
  scrollTrigger: {
    trigger: ".meetTheTeam",
    // scrub: true,
    toggleActions: "play none none reverse",
    // start: "top top",
    start: "center center",
    end: "60% top",
    // markers: true,
  },
});
// rowWidthTl
//   .to(".row", {
//     width: "calc(10rem + 36vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 41vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 41vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 41vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 46vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 46vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 46vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 48vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 48vw)",
//   })
//   .to(".row", {
//     width: "calc(10rem + 48vw)",
//   });

// // Image Reels

// gsap.to("#col1-lg", {
//   y: "-21%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel-lg",
//     scrub: 0.1,
//     start: "top top",
//     end: "bottom bottom",
//   },
// });
// gsap.to("#col2-lg", {
//   y: "-29%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel-lg",
//     scrub: 0.1,
//     start: "top top",
//     end: "bottom bottom",
//   },
// });
// gsap.to("#col3-lg", {
//   y: "-34.3%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel-lg",
//     scrub: 0.1,
//     start: "top top",
//     end: "bottom bottom",
//   },
// });
// gsap.to("#col4-lg", {
//   y: "-29%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel-lg",
//     scrub: 0.1,
//     start: "top top",
//     end: "bottom bottom",
//   },
// });

// // RESPONSIVE REELS (MEDIUM)

// gsap.to("#col2-md", {
//   y: "-10%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel-md",
//     scrub: 0.1,
//     start: "top top",
//     end: "bottom bottom",
//   },
// });

// // RESPONSIVE REELS (SMALL)

// gsap.to("#col1-sm", {
//   y: "-9.1%",
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel-md",
//     scrub: 0.1,
//     start: "top top",
//     end: "bottom bottom",
//   },
// });

// Utility

let needsRefresh = false;

window.addEventListener("resize", function () {
  if (window.innerWidth > 580 && !videoState) {
    needsRefresh = true;
  } else {
    needsRefresh = false;
  }
});

setInterval(function () {
  if (needsRefresh) {
    location.reload();
  }
}, 1000);

// window.onbeforeunload = () => {
//   window.scrollTo(0, 0);
// };
