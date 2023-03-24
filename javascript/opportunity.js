// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");
const quoteSection = document.querySelector("#quoteSection");
const cta2 = document.querySelector("#cta2");
const cta2Circle = document.querySelector("#cta2Circle");

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
// Footer CTA hover animation
//

cta2.addEventListener("mousemove", (e) => {
  const rect = cta2.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  cta2Circle.style.setProperty("--mouse-x", `${y}px`);
  cta2Circle.style.setProperty("--mouse-y", `${x}px`);
});

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
    start: "10% 40%",
    end: "100% 60%",
  },
});
backgroundTL
  .to("#mainContent", {
    backgroundColor: "#C6D3D8",
  })
  .to("#mainContent", {
    backgroundColor: "#000014",
  })
  .to("#mainContent", {
    backgroundColor: "#000014",
  });

// gsap.to("#reel", {
//   scrollTrigger: {
//     trigger: "#reel",
//     pin: true,
//     scrub: true,
//     start: "top top",
//     end: "bottom top",
//   },
// });

// let repCards = gsap.utils.toArray("#repCard");
// gsap.to(repCards, {
//   xPercent: -18 * (repCards.length - 1), // -18% is  1/2 the width of each Rep Card (36%)
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#reel",
//     scrub: 0.1,
//     start: "center center",
//     end: "bottom top",
//   },
// });

gsap.to("#videoSection", {
  scrollTrigger: {
    trigger: "#videoSection",
    pin: true,
    scrub: true,
    start: "top top",
    end: "bottom top",
    // markers: true,
  },
});
gsap.to("#videoText1", {
  top: "28%",
  left: "28%",
  // top: "20%",
  // left: "20%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#videoText1",
    scrub: true,
    start: "-60% top",
    end: "200% top",
    // markers: true,
  },
});
gsap.to("#videoText2", {
  // bottom: "28%",
  // right: "28%",
  bottom: "20%",
  right: "20%",
  opacity: 0,
  scrollTrigger: {
    trigger: "#videoText1",
    scrub: true,
    start: "-60% top",
    end: "200% top",
  },
});
gsap.to("#definitionVideo", {
  scale: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#videoText1",
    scrub: true,
    start: "-20% top",
    end: "280% top",
  },
});

gsap.to("#growth", {
  scrollTrigger: {
    trigger: "#growth",
    pin: true,
    scrub: true,
    start: "top top",
    // end: "480% 6%",
    end: "400% 6%",
    // markers: true,
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
  },
});

gsap.to("#compass", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
  },
});

gsap.to("#stateCount", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
  },
});

let stateCount = gsap.utils.toArray(".number");
let stateCountTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "20% 15%",
    end: "440% 15%",
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

// const staggerNumbers = () => {
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
  },
});

let timelineLinksAppear = gsap.utils.toArray(".timelineLinks");
gsap.to(timelineLinksAppear, {
  opacity: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
  },
});

let linkHilightTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "40% 15%",
    end: "400% 15%",
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
    start: "40% 15%",
    end: "60% 15%",
    // markers: true,
  },
});

let pending2019 = gsap.utils.toArray(".pend2019");
let pending2019TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "40% 15%",
    end: "150% 15%",
    // markers: true,
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
    start: "120% 15%",
    end: "230% 15%",
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
    start: "200% 15%",
    end: "310% 15%",
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
    start: "280% 15%",
    end: "390% 15%",
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

// gsap.to(".salesForce", {
//   scrollTrigger: {
//     trigger: ".salesForce",
//     snap: 0.5,
//   },
// });
gsap.to("#salesForceTitle", {
  y: "108vh",
  ease: "linear",
  scrollTrigger: {
    trigger: ".salesForce",
    scrub: true,
    start: "top top",
    end: "80% 6%",
  },
});

let graph1YearsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".salesForce",
    toggleActions: "play none none reverse",
    start: "-15% top",
    // start: "top top",
  },
  defaults: {
    duration: 0.8,
  },
});
graph1YearsTl
  .to("#bar2019", { height: "25%" }, 0)
  .to("#bar2020", { height: "50%" }, 0.1)
  .to("#bar2021", { height: "75%" }, 0.2)
  .to("#bar2022", { height: "100%" }, 0.3);

let graph1Multipliers = gsap.utils.toArray(".barMultiplier");
gsap.to(graph1Multipliers, {
  opacity: 1,
  stagger: 0.2,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".salesForce",
    toggleActions: "restart none none reverse",
    start: "-15% top",
    // start: "top top",
  },
});

gsap.to("#kwInstalledTitle", {
  y: "108vh",
  ease: "linear",
  scrollTrigger: {
    trigger: ".kwInstalled",
    scrub: true,
    start: "top top",
    end: "80% 6%",
  },
});

gsap.to(".lineGraph", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#lineGraphPath",
    toggleActions: "restart none none reverse",
    start: "-50% 10%",
    // markers: true,
  },
});
gsap.to("#lineGraphPath", {
  scrollTrigger: {
    trigger: "#lineGraphPath",
    toggleClass: "pathActive",
    toggleActions: "play none none none",
    start: "-50% 10%",
    // markers: {
    //   indent: 64,
    //   startColor: "lightblue",
    //   endColor: "lightblue",
    // },
  },
});

gsap.to(".point1", {
  scrollTrigger: {
    trigger: ".point1",
    toggleClass: "point1Active",
    toggleActions: "play none none none",
    start: "-3160% 10%",
  },
});
gsap.to(".point2", {
  scrollTrigger: {
    trigger: ".point2",
    toggleClass: "point2Active",
    toggleActions: "play none none none",
    start: "-2630% 10%",
  },
});
gsap.to(".point3", {
  scrollTrigger: {
    trigger: ".point3",
    toggleClass: "point3Active",
    toggleActions: "play none none none",
    start: "-1860% 10%",
    end: "1200% top",
  },
});
gsap.to(".point4", {
  scrollTrigger: {
    trigger: ".point4",
    toggleClass: "point4Active",
    toggleActions: "play none none none",
    start: "-986% 10%",
    end: "1200% top",
  },
});

let graph2Data = gsap.utils.toArray(".dataPiece");
gsap.to(graph2Data, {
  opacity: 1,
  x: 0,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".kwInstalled",
    toggleActions: "restart none none none",
    start: "top 10%",
    // markers: true,
  },
});

// var kwCounter1 = { val: 4000 },
//   newVal1 = 6130;

// gsap.to(kwCounter1, 2, {
//   val: newVal1,
//   roundProps: "val",
//   onUpdate: function () {
//     document.getElementById("kwData1").innerHTML = kwCounter1.val;
//   },
// });

//
// Utility
//

// const checkWidth = () => {
//   if (pgWidth >= 768) {
//     location.reload();
//   }
// };
// window.addEventListener("resize", checkWidth);

// window.onbeforeunload = () => {
//   window.scrollTo(0, 0);
// };
