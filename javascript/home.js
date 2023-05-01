// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");
const activePage = document.querySelector("#activePage");
const activePageSwiper = document.querySelector("#activePageSwiper");
// Page Unique elements
const mainContent = document.querySelector(".mainContent");
const aside = document.querySelector(".aside");
const heroText = document.querySelector(".heroText");
const heroBtns = document.querySelector(".heroBtns");
const reel = document.querySelector(".reel");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

//
// Image Reel Logic (Original)
//

let isPlaying = false;
let shouldScroll = false;
let wasSmallerScreen = false;
const mediaQuery = window.matchMedia("(min-width: 1025px)");

const handleSmallerScreens = (e) => {
  if (e.matches) {
    if (!isPlaying) {
      isPlaying = true;
      shouldScroll = true;
      const pageScroll = () => {
        if (shouldScroll) {
          window.scrollBy(0, 1);
          // setTimeout(pageScroll, 32);
          setTimeout(pageScroll, 35);
        }
      };
      setTimeout(() => {
        pageScroll();
      }, 1200);
    }
    wasSmallerScreen = false;
  } else {
    if (isPlaying) {
      isPlaying = false;
      shouldScroll = false;
      wasSmallerScreen = true;
      mediaQuery.removeEventListener("change", handleSmallerScreens);
    }
  }
};

mediaQuery.addEventListener("change", () => {
  if (wasSmallerScreen && mediaQuery.matches) {
    location.reload();
  }
  handleSmallerScreens(mediaQuery);
});

handleSmallerScreens(mediaQuery);

//
// Handling Navigation Logic
//

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
activePage.addEventListener("click", closeNav);
activePageSwiper.addEventListener("click", closeNav);
navLogo.addEventListener("click", closeNav);

//
// CTA 2 Hover Animation
//

const cta2 = document.querySelector(".cta2");
const cta2Circle = document.querySelector("#cta2Circle");

cta2.addEventListener("mousemove", (e) => {
  const rect = cta2.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  cta2Circle.style.setProperty("--mouse-x", `${y}px`);
  cta2Circle.style.setProperty("--mouse-y", `${x}px`);
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
videoElement.addEventListener("focus", () => {
  openVideo();
});

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

gsap.to("#col1", {
  // y: "-16.74%",
  y: "-16.8%",
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
