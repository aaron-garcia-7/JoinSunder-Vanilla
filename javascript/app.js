const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// home elements
const mainContent = document.querySelector(".mainContent"); // home main content
const aside = document.querySelector(".aside");
const heroText = document.querySelector(".heroText");
const heroBtns = document.querySelector(".heroBtns");
const reel = document.querySelector(".reel");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");

let navState = false;

const toggleNav = () => {
  navState = !navState;
  // if() {
  //   navState = !navState;
  // }

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    logo.classList.add("logoActive");
    navLogo.classList.add("navLogoActive");
    if (aside) {
      aside.classList.add("asideActive");
      heroText.classList.add("heroTextActive");
      heroBtns.classList.add("heroBtnsActive");
      reel.classList.add("reelActive");
      col1.classList.add("col1Active");
      col2.classList.add("col2Active");
    }
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    if (aside) {
      aside.classList.remove("asideActive");
      heroText.classList.remove("heroTextActive");
      heroBtns.classList.remove("heroBtnsActive");
      reel.classList.remove("reelActive");
      col1.classList.remove("col1Active");
      col2.classList.remove("col2Active");
    }
  }
};

const closeNav = () => {
  navState = false;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    logo.classList.add("logoActive");
    navLogo.classList.add("navLogoActive");
    if (aside) {
      aside.classList.add("asideActive");
      heroText.classList.add("heroTextActive");
      heroBtns.classList.add("heroBtnsActive");
      reel.classList.add("reelActive");
      col1.classList.add("col1Active");
      col2.classList.add("col2Active");
    }
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    if (aside) {
      aside.classList.remove("asideActive");
      heroText.classList.remove("heroTextActive");
      heroBtns.classList.remove("heroBtnsActive");
      reel.classList.remove("reelActive");
      col1.classList.remove("col1Active");
      col2.classList.remove("col2Active");
    }
  }
};

burger.addEventListener("click", toggleNav);

if (mainContent) {
  mainContent.addEventListener("click", closeNav);
}
