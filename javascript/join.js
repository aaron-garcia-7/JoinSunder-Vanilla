//
// Handling Navigation Logic
//

// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".formLogo");
const navLogo = document.querySelector(".navLogo");
const firstNavLink = document.querySelector("#firstNavLink");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");

let navState = false;

const toggleNav = () => {
  navState = !navState;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    navLogo.classList.add("navLogoActive");
    mainContent.classList.add("mainContentActive");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    navLogo.classList.remove("navLogoActive");
    mainContent.classList.remove("mainContentActive");
  }
};

const closeNav = () => {
  navState = false;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    navLogo.classList.add("navLogoActive");
    mainContent.classList.add("mainContentActive");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    navLogo.classList.remove("navLogoActive");
    mainContent.classList.remove("mainContentActive");
  }
};

const openNav = () => {
  navState = true;

  if (navState) {
    burger.classList.add("burgerActive");
    nav.classList.add("navActive");
    navLogo.classList.add("navLogoActive");
    mainContent.classList.add("mainContentActive");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    navLogo.classList.remove("navLogoActive");
    mainContent.classList.remove("mainContentActive");
  }
};

burger.addEventListener("click", toggleNav);
mainContent.addEventListener("click", closeNav);

//
// Form
//

const textareaCount = (() => {
  const textarea = document.getElementById("discovery-method");
  const charCountLabel = document.querySelector(".remaining-characters");
  const maxLength = textarea.maxLength;

  charCountLabel.textContent = maxLength;

  textarea.addEventListener("input", () => {
    const remaining = maxLength - textarea.value.length;
    charCountLabel.textContent = remaining;
  });
})();

//
// ReCaptcha
//

const recaptcha = document.querySelector(".g-recaptcha");

if (recaptcha) {
  recaptcha.setAttribute("data-theme", "dark");
}

//
// a11y tabIndex
//

logo.addEventListener("focusin", () => {
  closeNav();
});

logo.addEventListener("focusin", () => {
  closeNav();
});

firstNavLink.addEventListener("focusin", () => {
  openNav();
});

navLogo.addEventListener("focusin", () => {
  openNav();
});

const closeVideo = () => null;

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);
