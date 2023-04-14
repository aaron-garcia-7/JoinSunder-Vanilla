// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");
const activePage = document.querySelector("#activePage");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");

//
// CTA 2 Hover Animation
//

// const cta2 = document.querySelector(".cta2");
// const cta2Circle = document.querySelector("#cta2Circle");

// cta2.addEventListener("mousemove", (e) => {
//   const rect = cta2.getBoundingClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top;
//   cta2Circle.style.setProperty("--mouse-x", `${y}px`);
//   cta2Circle.style.setProperty("--mouse-y", `${x}px`);
// });

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
activePage.addEventListener("click", closeNav);

//
// Swiper Carousel Logic
//

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2, // use breakpoints below
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    // 520: {
    //   slidesPerView: 1,
    //   spaceBetween: 20,
    // },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// //
// // Handling Video Container Logic
// //

// const videoContainer = document.querySelector(".videoContainer");
// const closeVideoBurger = document.querySelector(".closeVideoBurger");
// const videoElement = document.querySelector("#videoElement");

// let videoState = false;

// const toggleVideo = () => {
//   videoState = !videoState;
//   videoElement.play();

//   if (videoState) {
//     videoContainer.classList.add("videoContainerActive");
//     closeVideoBurger.classList.add("closeVideoBurgerActive");
//   } else {
//     videoContainer.classList.remove("videoContainerActive");
//     closeVideoBurger.classList.remove("closeVideoBurgerActive");
//   }
// };
// const openVideo = () => {
//   videoState = true;
//   videoElement.play();

//   if (videoState) {
//     videoContainer.classList.add("videoContainerActive");
//   } else {
//     videoContainer.classList.remove("videoContainerActive");
//   }
// };
// const closeVideo = () => {
//   videoState = false;
//   videoElement.pause();

//   if (videoState) {
//     videoContainer.classList.add("videoContainerActive");
//   } else {
//     videoContainer.classList.remove("videoContainerActive");
//   }
// };

// cta2.addEventListener("click", () => {
//   toggleVideo();
// });
// closeVideoBurger.addEventListener("click", () => {
//   toggleVideo();
//   videoElement.pause();
// });

// videoContainer.addEventListener("click", ({ target }) => {
//   if (target.classList.contains("videoContainer")) {
//     toggleVideo();
//     videoElement.pause();
//   }
// });
// videoElement.addEventListener("focus", () => {
//   openVideo();
// });

// const thumbnail1 = document.querySelector(".thumbnail1");
// const thumbnail2 = document.querySelector(".thumbnail2");
// const thumbnail3 = document.querySelector(".thumbnail3");
// const thumbnail4 = document.querySelector(".thumbnail4");
// const thumbnail5 = document.querySelector(".thumbnail5");

// thumbnail1.addEventListener("click", () => {
//   videoElement.src = "./assets/promo1.mp4";
//   toggleVideo();
//   // videoElement.play();
// });
// thumbnail2.addEventListener("click", () => {
//   videoElement.src = "./assets/promo2.mp4";
//   toggleVideo();
// });
// thumbnail3.addEventListener("click", () => {
//   videoElement.src = "./assets/promo3.mp4";
//   toggleVideo();
// });
// thumbnail4.addEventListener("click", () => {
//   videoElement.src = "./assets/promo4.mp4";
//   toggleVideo();
// });
// thumbnail5.addEventListener("click", () => {
//   videoElement.src = "./assets/promo5.mp4";
//   toggleVideo();
// });

//
// GSAP Animations
//

// gsap.registerPlugin(ScrollTrigger);
