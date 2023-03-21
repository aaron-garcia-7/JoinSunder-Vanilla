// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");

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
// Carousel Logic
//

const titles = document.querySelectorAll(".title");
const subtitles = document.querySelectorAll(".subTitle");
const textWrappers = document.querySelectorAll(".textWrapper");
const backgroundImages = document.querySelectorAll(".backgroundImg");

let activeIndex = 4;

const setActive = () => {
  for (let i = 0; i < backgroundImages.length; i++) {
    if (i === activeIndex) {
      backgroundImages[i].classList.add("active");
    } else {
      backgroundImages[i].classList.remove("active");
    }
  }

  for (let i = 0; i < titles.length; i++) {
    if (i === activeIndex) {
      textWrappers[i].classList.add("active");
      titles[i].style.transform = "translate(0, 0)";
      subtitles[i].style.transform = "translate(0, 0)";
    } else {
      textWrappers[i].classList.remove("active");
      titles[i].style.transform = "translate(0, 100%)";
      subtitles[i].style.transform = "translate(0, 100%)";
    }
  }
};

const nextImage = () => {
  activeIndex++;

  if (activeIndex === backgroundImages.length) {
    activeIndex = 0;
  }

  setTimeout(() => {
    setActive();
  }, 500);

  setTimeout(() => {
    nextImage();
  }, 6000);
};

nextImage();

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);
