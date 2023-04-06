// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");

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
// Carousel V2
//

// const promoData = [
//   {
//     title: "Squad Game",
//     subTitle: "Run it back | 2022",
//     imgSrc: "./images/comp1.png",
//   },
//   {
//     title: "Rapid Sunder",
//     subTitle: "The War Path | 2022",
//     imgSrc: "./images/comp2.png",
//   },
//   {
//     title: "Rapid Sunder",
//     subTitle: "A Thousand Victories",
//     imgSrc: "./images/comp3.png",
//   },
//   {
//     title: "Sunder Dome",
//     subTitle: "Champion’s League | 2022",
//     imgSrc: "./images/comp4.png",
//   },
//   {
//     title: "Sunder Dome",
//     subTitle: "Take What’s Yours | 2022",
//     imgSrc: "./images/comp5.png",
//   },
// ];

// promoData.forEach((obj, index) => (obj.id = index + 1));

// const carouselBackground = document.querySelector(".carousel-background");
// const titleElement = document.querySelector(".title");
// const subTitleElement = document.querySelector(".subTitle");
// const titleWrapper = document.querySelector(".title-wrapper");
// const subTitleWrapper = document.querySelector(".subTitle-wrapper");
// const promoButton = document.querySelector(".promo-button");

// let currentIndex = 0;

// // Set the initial background and title/subTitle
// carouselBackground.style.backgroundImage = `url(${promoData[currentIndex].imgSrc})`;
// titleElement.innerHTML = promoData[currentIndex].title;
// subTitleElement.innerHTML = promoData[currentIndex].subTitle;

// // Cycle through the promoData array and update the background and title/subTitle on each interval
// const carouselInterval = setInterval(() => {
//   currentIndex = (currentIndex + 1) % promoData.length;

//   // Animate the title wrapper
//   titleWrapper.style.top = `-${titleWrapper.offsetHeight}px`;
//   setTimeout(() => {
//     titleWrapper.style.top = 0;
//   }, 500);

//   // Animate the subTitle wrapper
//   subTitleWrapper.style.top = `-${subTitleWrapper.offsetHeight}px`;
//   setTimeout(() => {
//     subTitleWrapper.style.top = 0;
//   }, 1000);

//   const { title, subTitle, imgSrc } = promoData[currentIndex];
//   titleElement.innerHTML = title;
//   subTitleElement.innerHTML = subTitle;
//   carouselBackground.style.backgroundImage = `url(${imgSrc})`;
// }, 6000);

// // Add an event listener to the button to log the active promo
// promoButton.addEventListener("click", () => {
//   console.log(promoData[currentIndex].title);
// });

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

const thumbnail1 = document.querySelector(".thumbnail1");
const thumbnail2 = document.querySelector(".thumbnail2");
const thumbnail3 = document.querySelector(".thumbnail3");
const thumbnail4 = document.querySelector(".thumbnail4");
const thumbnail5 = document.querySelector(".thumbnail5");

thumbnail1.addEventListener("click", () => {
  videoElement.src = "./assets/promo1.mp4";
  toggleVideo();
  // videoElement.play();
});
thumbnail2.addEventListener("click", () => {
  videoElement.src = "./assets/promo2.mp4";
  toggleVideo();
});
thumbnail3.addEventListener("click", () => {
  videoElement.src = "./assets/promo3.mp4";
  toggleVideo();
});
thumbnail4.addEventListener("click", () => {
  videoElement.src = "./assets/promo4.mp4";
  toggleVideo();
});
thumbnail5.addEventListener("click", () => {
  videoElement.src = "./assets/promo5.mp4";
  toggleVideo();
});

//
// GSAP Animations
//

// gsap.registerPlugin(ScrollTrigger);
