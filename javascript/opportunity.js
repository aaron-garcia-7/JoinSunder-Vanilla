// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");
const quoteSection = document.querySelector("#quoteSection");

//
// Navigation Logic
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
    quoteSection.classList.add("quoteSectionActive");
  } else {
    burger.classList.remove("burgerActive");
    nav.classList.remove("navActive");
    logo.classList.remove("logoActive");
    navLogo.classList.remove("navLogoActive");
    mainContent.classList.remove("mainContentActive");
    quoteSection.classList.remove("quoteSectionActive");
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
//
// GSAP Animations
//
//

gsap.registerPlugin(ScrollTrigger);

let backgroundTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#mainContent",
    scrub: 1,
    start: "30% 40%",
    end: "146% 60%",
  },
});
backgroundTL
  .to("#mainContent", {
    backgroundColor: "#C6D3D8",
  })
  .to("#mainContent", {
    backgroundColor: "#C6D3D8",
  })
  .to("#mainContent", {
    backgroundColor: "#000014",
  });

gsap.to("#quoteSection", {
  scrollTrigger: {
    trigger: "#quoteSection",
    pin: true,
    scrub: true,
    start: "top top",
    end: "100% 6%",
  },
});

gsap.to("#quoteWrapper", {
  opacity: 1,
  y: "50%",
  ease: "none",
  scrollTrigger: {
    trigger: "#quoteSection",
    scrub: true,
    start: "top center",
    end: "center center",
  },
});

gsap.to("#reel", {
  scrollTrigger: {
    trigger: "#reel",
    pin: true,
    scrub: true,
    start: "top top",
    end: "bottom top",
  },
});

let repCards = gsap.utils.toArray("#repCard");
gsap.to(repCards, {
  xPercent: -18 * (repCards.length - 1), // -18% is  1/2 the width of each Rep Card (36%)
  ease: "none",
  scrollTrigger: {
    trigger: "#reel",
    scrub: 0.1,
    start: "center center",
    end: "bottom top",
  },
});

gsap.to("#growth", {
  scrollTrigger: {
    trigger: "#growth",
    pin: true,
    scrub: true,
    start: "top top",
    // end: "480% 6%",
    end: "800% 6%",
  },
});

gsap.to("#map", {
  opacity: 1,
  y: "-6%",
  ease: "none",
  scrollTrigger: {
    trigger: "#growth",
    scrub: true,
    start: "top 75%",
    end: "center center",
    // markers: true,
  },
});

gsap.to("#growthTitle", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse", // play, pause, resume, reverse, restart, reset, complete, none
    start: "top top",
    end: "top top",
  },
});

gsap.to("#compass", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
    end: "top top",
  },
});

gsap.to("#stateCount", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
    end: "top top",
  },
});

let stateCount = gsap.utils.toArray(".number");
let stateCountTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "20% 15%",
    end: "660% 15%",
    // markers: true,
  },
});
stateCountTL
  .to(stateCount, {
    y: "-100%",
  })
  .to(stateCount, {
    y: "-200%",
  })
  .to(stateCount, {
    y: "-300%",
  })
  .to(stateCount, {
    y: "-400%",
  })
  .to(stateCount, {
    y: "-400%",
  });

// const staggerNumbes = () => {
//   // let stateNumber = document.querySelector("#stateNumber");
//   // var startCount = 7,
//   //   stateNum = { var: startCount };

//   // const changeNumber = () => {
//   //   stateNumber.innerHTML = stateNum.var.toFixed();
//   // };

//   // gsap
//   //   .timeline({
//   //     scrollTrigger: {
//   //       trigger: "#map",
//   //       scrub: true,
//   //       start: "120% top",
//   //       end: "800% top",
//   //       markers: true,
//   //     },
//   //   })
//   //   .to(stateNum, { var: 30, duration: 5, ease: "none", onUpdate: changeNumber })
//   //   .to({}, { duration: 2 });
// }

gsap.to("#timelineBorder", {
  height: "120%",
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
    end: "top top",
    // markers: {
    //   indent: 124,
    //   startColor: "coral",
    //   endColor: "coral",
    // },
  },
});

let timelineLinksAppear = gsap.utils.toArray("#timelineLinks");
gsap.to(timelineLinksAppear, {
  opacity: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
    end: "top top",
  },
});

let linkHilightTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    // start: "-60% 15%",
    // end: "1200% 15%",
    start: "40% 15%",
    end: "600% 15%",
    // markers: {
    //   indent: 124,
    //   startColor: "lightblue",
    //   endColor: "lightblue",
    // },
  },
});
linkHilightTL
  .to(".link1", { background: "#4693D4" })
  .to(".link1", { background: "#4693D4" })
  .to(".link1", { background: "#4693D4" })
  .to(".link1", { background: "#4693D4" })
  .to(".link1", { background: "transparent" })
  .to(".link2", { background: "#4693D4" })
  .to(".link2", { background: "#4693D4" })
  .to(".link2", { background: "#4693D4" })
  .to(".link2", { background: "#4693D4" })
  .to(".link2", { background: "transparent" })
  .to(".link3", { background: "#4693D4" })
  .to(".link3", { background: "#4693D4" })
  .to(".link3", { background: "#4693D4" })
  .to(".link3", { background: "#4693D4" })
  .to(".link3", { background: "transparent" })
  .to(".link4", { background: "#4693D4" })
  .to(".link4", { background: "#4693D4" })
  .to(".link4", { background: "#4693D4" })
  .to(".link4", { background: "#4693D4" })
  // .to(".link4", { background: "transparent" }); // Activate to toggle last link background
  .to(".link4", { background: "4693D4" }); // Activate to toggle last link background

let states2019 = gsap.utils.toArray(".state2019");
gsap.to(states2019, {
  fill: "#4693D4",
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    // start: "-60% 15%",
    // end: "0% 15%",
    start: "40% 15%",
    end: "80% 15%",
  },
});

let pending2019 = gsap.utils.toArray(".pend2019");
let pending2019TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "40% 15%",
    end: "200% 15%", // 160% difference
  },
});
pending2019TL
  .to(pending2019, {
    fill: "#BCD0D7",
  })
  .to(pending2019, {
    fill: "#BCD0D7",
  })
  .to(pending2019, {
    fill: "#BCD0D7",
  })
  .to(pending2019, {
    fill: "#4693D4",
  });

let pending2020 = gsap.utils.toArray(".pend2020");
let pending2020TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "150% 15%", // 50% smaller from previous END
    end: "360% 15%", // 210% difference
  },
});
pending2020TL
  .to(pending2020, {
    fill: "#BCD0D7",
  })
  .to(pending2020, {
    fill: "#BCD0D7",
  })
  .to(pending2020, {
    fill: "#BCD0D7",
  })
  .to(pending2020, {
    fill: "#4693D4",
  });

let pending2021 = gsap.utils.toArray(".pend2021");
let pending2021TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "310% 15%",
    end: "470% 15%",
  },
});
pending2021TL
  .to(pending2021, {
    fill: "#BCD0D7",
  })
  .to(pending2021, {
    fill: "#BCD0D7",
  })
  .to(pending2021, {
    fill: "#BCD0D7",
  })
  .to(pending2021, {
    fill: "#4693D4",
  });

let pending2022 = gsap.utils.toArray(".pend2022");
let pending2022TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "420% 15%",
    end: "630% 15%",
  },
});
pending2022TL
  .to(pending2022, {
    fill: "#BCD0D7",
  })
  .to(pending2022, {
    fill: "#BCD0D7",
  })
  .to(pending2022, {
    fill: "#BCD0D7",
  });
// .to(pending2022, {
//   fill: "#4693D4", // Add this IF the state becomes active
// });

let pgWidth = window.innerWidth;
const checkWidth = () => {
  if (pgWidth >= 768) {
    location.reload();
  }
};
window.addEventListener("resize", checkWidth);

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
