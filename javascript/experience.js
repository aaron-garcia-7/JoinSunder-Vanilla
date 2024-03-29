// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");
const activePage = document.querySelector("#activePage");
const firstNavLink = document.querySelector("#firstNavLink");

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
activePage.addEventListener("click", closeNav);

//
// Swiper Carousel Logic
//

let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2, // use breakpoints below
  spaceBetween: 20,
  loop: true,
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    856: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1248: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

//
// Handling Video Container Logic
//

const videoContainer = document.querySelector(".videoContainer");
const closeVideoBurger = document.querySelector(".cvb1");
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

// iFrame Logic
//

let src1 = "https://www.youtube.com/embed/EOdM6yTCCJg"; // Paradise Los Cabo | 2023
let src2 = "https://www.youtube.com/embed/DIB0r_xZlyI"; // Paradise Los Cabo | 2022

let iframeContainer = document.querySelector(".iframeContainer");
let iframe = document.querySelector(".iframe");
const closeVideoBurger2 = document.querySelector(".cvb2");

let iframeState = false;

const toggleiframe = (index) => {
  iframeState = !iframeState;
  let videoIndex = index + 1;

  if (iframeState) {
    iframeContainer.classList.add("iframeContainerActive");
    closeVideoBurger2.classList.add("closeVideoBurgerActive");
    switch (videoIndex) {
      case 1:
        iframe.src = src1;
        break;
      case 2:
        iframe.src = src2;
        break;
    }
  } else {
    iframeContainer.classList.remove("iframeContainerActive");
    closeVideoBurger2.classList.remove("closeVideoBurgerActive");
    iframe.src = null;
  }
};

closeVideoBurger2.addEventListener("click", () => {
  toggleiframe();
});

iframeContainer.addEventListener("click", ({ target }) => {
  if (target.classList.contains("iframeContainer")) {
    toggleiframe();
    // videoElement.pause();
  }
});

// Posters
//

let allPosters = document.querySelectorAll(".poster");

allPosters.forEach((obj, index) => {
  obj.addEventListener("click", () => {
    if (index === 0 || index === 1) {
      toggleiframe(index);
      return;
    } else {
      videoElement.src = `./assets/vid${index + 1}.mp4`;
      toggleVideo();
    }
  });
  obj.addEventListener("keydown", (e) => {
    // console.log(e);
    if (e.code === "Enter") {
      videoElement.src = `./assets/vid${index + 1}.mp4`;
      toggleVideo();
    }
  });
  obj.addEventListener("focusin", () => {
    closeVideo();
    closeNav();
  });
});

logo.addEventListener("focusin", () => {
  closeVideo();
  closeNav();
});

navLogo.addEventListener("focusin", () => {
  openNav();
  closeVideo();
});

firstNavLink.addEventListener("focusin", () => {
  openNav();
  closeVideo();
});

//
// GSAP Animations
//

gsap.registerPlugin(ScrollTrigger);

gsap.to("#col1", {
  y: "-18.1%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col2", {
  // y: "-31.25%",
  y: "-10.46%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col3", {
  y: "-18.1%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});
gsap.to("#col4", {
  y: "-10.46%",
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "top top",
    end: "bottom bottom",
  },
});

// window.onbeforeunload = () => {
//   window.scrollTo(0, 0);
// };

// Lenis Smooth Scroll

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
