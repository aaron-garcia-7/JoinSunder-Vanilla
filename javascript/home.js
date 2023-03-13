//
// Image Reel Logic
//

let pgWidth1 = window.innerWidth;

const pageScroll = () => {
  window.scrollBy(0, 1);
  setTimeout(pageScroll, 24);
};
if (pgWidth1 >= 1024) {
  setTimeout(() => {
    pageScroll();
  }, 2000);
}

const checkWidth = () => {
  if (pgWidth >= 768) {
    location.reload();
  }
};
window.addEventListener("resize", checkWidth);

// // CHAT GPT CODE VERSION 1
// let scrollTimeout;
// let resumeScrollTimeout;

// function pageScroll() {
//   window.scrollBy(0, 1);
//   scrollTimeout = setTimeout(pageScroll, 24);
// }

// function stopAutoScroll() {
//   clearTimeout(scrollTimeout);
//   clearTimeout(resumeScrollTimeout);

//   resumeScrollTimeout = setTimeout(() => {
//     pageScroll();
//   }, 2000);
// }

// window.addEventListener("scroll", stopAutoScroll);

// let initialScroll = setTimeout(() => {
//   pageScroll();
// }, 2400);

// // // CHAT GPT CODE VERSION 2
// // wait until the page is fully loaded
// window.addEventListener("load", function () {
//   if (window.innerWidth > 1024) {
//     const pageHeight = document.body.scrollHeight;
//     slowScrollTo(pageHeight, 42000);
//   }
// });

// window.addEventListener("resize", function () {
//   if (window.innerWidth > 1024 && !isScrolling) {
//     const pageHeight = document.body.scrollHeight;
//     slowScrollTo(pageHeight, 42000);
//     isScrolling = true;
//   }

//   if (window.innerWidth <= 1024 && isScrolling) {
//     clearTimeout(scrollTimeout);
//     isScrolling = false;
//   }
// });

// let isScrolling = false;
// let scrollTimeout;
// function slowScrollTo(to, duration) {
//   const start = window.pageYOffset;
//   const change = to - start;
//   const increment = 10;
//   const numIncrements = Math.ceil(duration / increment);
//   const incrementAmount = change / numIncrements;

//   function scroll() {
//     window.scrollBy(0, incrementAmount);
//     if (Math.abs(window.pageYOffset - to) < Math.abs(incrementAmount)) {
//       window.scrollTo(0, to);
//     } else {
//       scrollTimeout = setTimeout(scroll, increment);
//     }
//   }

//   scroll();
// }

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
const aside = document.querySelector(".aside");
const heroText = document.querySelector(".heroText");
const heroBtns = document.querySelector(".heroBtns");
const reel = document.querySelector(".reel");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

let navState = false;

const toggleNav = () => {
  navState = !navState;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    logo.classList.add("logoActive");
    navLogo.classList.add("navLogoActive");
    aside.classList.add("asideActive");
    heroText.classList.add("heroTextActive");
    heroBtns.classList.add("heroBtnsActive");
    reel.classList.add("reelActive");
    col1.classList.add("col1Active");
    col2.classList.add("col2Active");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    aside.classList.remove("asideActive");
    heroText.classList.remove("heroTextActive");
    heroBtns.classList.remove("heroBtnsActive");
    reel.classList.remove("reelActive");
    col1.classList.remove("col1Active");
    col2.classList.remove("col2Active");
  }
};

const closeNav = () => {
  navState = false;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    logo.classList.add("logoActive");
    navLogo.classList.add("navLogoActive");
    aside.classList.add("asideActive");
    heroText.classList.add("heroTextActive");
    heroBtns.classList.add("heroBtnsActive");
    reel.classList.add("reelActive");
    col1.classList.add("col1Active");
    col2.classList.add("col2Active");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    aside.classList.remove("asideActive");
    heroText.classList.remove("heroTextActive");
    heroBtns.classList.remove("heroBtnsActive");
    reel.classList.remove("reelActive");
    col1.classList.remove("col1Active");
    col2.classList.remove("col2Active");
  }
};

burger.addEventListener("click", toggleNav);
mainContent.addEventListener("click", closeNav);
navLogo.addEventListener("click", closeNav);

//
// Handling Video Container Logic
//

const cta2 = document.querySelector(".cta2");
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
videoElement.addEventListener("focus", () => {
  openVideo();
});

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

gsap.to("#col1", {
  y: "-16.74%",
  // ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    // markers: true,
    start: "top top",
    end: "bottom 90%",
  },
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
