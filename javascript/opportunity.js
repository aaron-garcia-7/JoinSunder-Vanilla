// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");
const activePage = document.querySelector("#activePage");
const firstNavLink = document.querySelector("#firstNavLink");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");
const quoteSection = document.querySelector("#quote-section");
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

burger.addEventListener("click", toggleNav);
mainContent.addEventListener("click", closeNav);
activePage.addEventListener("click", closeNav);

//
// Sunder Definition Video
//

const videoFigure = document.querySelector(".videoFigure");
const video = document.querySelector("#definitionVideo");
const overlay = document.querySelector(".overlay");

videoFigure.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    overlay.style.opacity = "0";
  } else {
    video.pause();
    overlay.style.opacity = "1";
  }
  if (window.innerWidth < 480) {
    overlay.style.display = "none"; // Hide Overlay on small devices (mobile) on click
  }
});

videoFigure.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (video.paused) {
      video.play();
      overlay.style.opacity = "0";
    } else {
      video.pause();
      overlay.style.opacity = "1";
    }
  }
});

window.addEventListener("scroll", () => {
  overlay.style.opacity = "1";
  video.pause();
});

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
// a11y tabIndex
//

const focusMapLinks = (() => {
  const mapLinks = document.querySelectorAll(".timeline a.timelineLinks"),
    mapAnchors = document.querySelectorAll(".growth-anchor");

  if (mapLinks.length === mapAnchors.length) {
    mapLinks.forEach((link, index) => {
      link.addEventListener("focus", () => {
        mapAnchors[index].scrollIntoView({
          behavior: "smooth",
          // block: "center",
        });
      });
    });
  } else {
    console.error("The number of mapLinks and mapAnchors do not match.");
  }
})();

logo.addEventListener("focusin", () => {
  closeNav();
});
cta2.addEventListener("focusin", () => {
  closeNav();
});

firstNavLink.addEventListener("focusin", () => {
  openNav();
});
navLogo.addEventListener("focusin", () => {
  openNav();
});

const closeVideo = () => null;

// Automation

const countActiveStates = (() => {
  let dc = 0; // Whether or not they want to count DC as a state
  let hawaii = -3; // There are four path/svg for hawaii. These classes are messing the count up
  const years = [2019, 2020, 2021, 2022, 2023, 2024];
  let activeStates = 0;

  years.forEach((year, index) => {
    const currentStates = document.querySelectorAll(`.state${year}`).length;
    const pendingStates = document.querySelectorAll(`.pend${year - 1}`).length;

    if (index === 0) {
      activeStates += currentStates;
    } else {
      activeStates += pendingStates;
    }

    // Include DC for 2021
    if (year === 2021) {
      activeStates += dc;
    }

    document.querySelector(`#number${year}`).innerHTML = activeStates;
  });
})();

//
//
// GSAP Animations
//
//

gsap.registerPlugin(ScrollTrigger);

const backgroundFading = (() => {
  let backgroundTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#mainContent",
      scrub: 1,
      start: "8% 40%",
      end: window.innerWidth > 480 ? "64% 60%" : "68% 60%",
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
})();

const videoAnimation = (() => {
  gsap.to("#videoSection", {
    scrollTrigger: {
      trigger: "#videoSection",
      pin: window.innerWidth > 480 ? true : false,
      scrub: window.innerWidth > 480 ? true : false,
      start: "top top",
      end: "bottom top",
    },
  });
  gsap.to("#videoText1", {
    top: "28%",
    left: "28%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#videoText1",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "-60% top" : "center 46%",
      end: "200% top",
    },
  });
  gsap.to("#videoText2", {
    bottom: "20%",
    right: "20%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#videoText1",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "-60% top" : "center 46%",
      end: "200% top",
    },
  });
  gsap.to(".videoFigure", {
    scale: 1,
    opacity: 1,
    delay: window.innerWidth > 480 ? null : 0.4,
    scrollTrigger: {
      trigger: "#videoText1",
      toggleActions: "play none none reverse",
      scrub: window.innerWidth > 480 ? true : false,
      start: window.innerWidth > 480 ? "-20% top" : "center 46%",
      end: "280% top",
    },
  });
})();

const growthMapAnimation = (() => {
  let pinDuration = "500%";

  gsap.to("#growth", {
    scrollTrigger: {
      trigger: "#growth",
      pin: window.innerWidth > 480 ? true : false,
      scrub: window.innerWidth > 480 ? true : false,
      start: "top top",
      // end: "400% 6%",
      end: `${pinDuration} 6%`,
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
  gsap.to("#growthTitleMobile", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "top top" : "top 16%",
    },
  });
  gsap.to("#map", {
    opacity: 1,
    y: window.innerWidth > 480 ? "-6%" : "-36%",
    ease: "none",
    scrollTrigger: {
      trigger: "#growth",
      scrub: true,
      start: "top 75%",
      end: "center center",
    },
  });
  gsap.to("#compass", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "top top" : "top 16%",
    },
  });
  gsap.to("#stateCount", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "top top" : "top 16%",
    },
  });

  let stateCount = gsap.utils.toArray(".number");
  let stateCountTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#year-links",
      scrub: window.innerWidth > 480 ? true : false,
      start: window.innerWidth > 768 ? "16% 15%" : "-100% 15%",
      // end: window.innerWidth > 768 ? "400% 15%" : "1920% 15%",
      end: window.innerWidth > 768 ? `${pinDuration} 15%` : "1920% 15%",
      markers: true,
    },
  });
  stateCountTL
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-100%" : "-112%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-100%" : "-112%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-200%" : "-212%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-200%" : "-212%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-300%" : "-312%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-300%" : "-312%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-400%" : "-412%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-400%" : "-412%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-500%" : "-512%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-500%" : "-512%",
    })
    .to(stateCount, {
      y: window.innerWidth > 768 ? "-600%" : "-612%",
    });

  gsap.to("#stateCountMobile", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: "top 16%",
    },
  });

  gsap.from("#stateNumberMobile", {
    textContent: 0,
    duration: 2.8,
    ease: "power1.out",
    snap: { textContent: 1 },
    stagger: {
      each: 1.0,
    },
    scrollTrigger: {
      trigger: "#map",
      toggleActions: "play none none reverse",
      start: "top center",
    },
  });

  gsap.to(".timeline__border", {
    height: "100%",
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: "top top",
    },
  });

  gsap.to(".timeline__border-2", {
    width: "calc(100% + 4rem)",
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "top top" : "top 16%",
    },
  });

  let timelineLinksAppear = gsap.utils.toArray(".timelineLinks");
  gsap.to(timelineLinksAppear, {
    x: "0",
    opacity: 1,
    stagger: window.innerWidth > 480 ? 0.1 : null,
    duration: window.innerWidth > 480 ? 0.36 : 2.4,
    scrollTrigger: {
      trigger: "#growth",
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "top top" : "top 16%",
    },
  });

  let linkHighlightTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#year-links",
      scrub: true,
      start: window.innerWidth > 480 ? "40% 15%" : "200% top",
      // end: window.innerWidth > 768 ? "450% 15%" : "2720% 15%",
      end: window.innerWidth > 768 ? "450% 15%" : "2200% 15%",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   indent: 128,
      // },
    },
  });
  linkHighlightTL
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
    .to(".link4", { background: "transparent" })
    .to(".link5", { background: "#4693D4" })
    .to(".link5", { background: "#4693D4" })
    .to(".link5", { background: "#4693D4" })
    .to(".link5", { background: "#4693D4" })
    .to(".link5", { background: "transparent" }); // Activate to toggle last link background
  // .to(".link5", { background: "4693D4" }); // Activate to toggle last link background

  let states2019 = gsap.utils.toArray(".state2019");
  gsap.to(states2019, {
    fill: "#4693D4",
    scrollTrigger: {
      trigger: "#year-links",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      // start: "40% 15%",
      start: window.innerWidth > 480 ? "40% 15%" : "top 94%",
      end: window.innerWidth > 768 ? "60% 15%" : "200% 15%",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   indent: 128,
      // },
    },
  });

  let pending2019 = gsap.utils.toArray(".pend2019");
  let pending2019TL = gsap.timeline({
    delay: 0.2,
    scrollTrigger: {
      trigger: "#year-links",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      start: window.innerWidth > 480 ? "40% 15%" : "top 94%",
      end: window.innerWidth > 768 ? "150% 15%" : "500% 15%",
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
    delay: 0.4,
    scrollTrigger: {
      trigger: "#year-links",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      start:
        window.innerWidth > 768
          ? "120% 15%"
          : window.innerWidth <= 768 && window.innerWidth > 480
          ? "500% 15%"
          : "top 94%",
      end: window.innerWidth > 768 ? "230% 15%" : "900% 15%",
      // markers: true,
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
    delay: 0.8,
    scrollTrigger: {
      trigger: "#year-links",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      start:
        window.innerWidth > 768
          ? "200% 15%"
          : window.innerWidth <= 768 && window.innerWidth > 480
          ? "1000% 15%"
          : "top 94%",
      end: window.innerWidth > 768 ? "310% 15%" : "1300% 15%",
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
    delay: 1.2,
    scrollTrigger: {
      trigger: "#year-links",
      scrub: window.innerWidth > 480 ? true : false,
      toggleActions: "play none none reverse",
      start:
        window.innerWidth > 768
          ? "280% 15%"
          : window.innerWidth <= 768 && window.innerWidth > 480
          ? "1500% 15%"
          : "top 94%",
      end: window.innerWidth > 768 ? "390% 15%" : "1700% 15%",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   indent: 128,
      // },
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
    })
    .to(pending2022, {
      fill: "#4693D4", // Add this IF the state becomes active
    });
})();

gsap.to("#salesForceTitle", {
  y:
    window.innerWidth > 768
      ? "110vh"
      : window.innerWidth <= 480
      ? "70vh"
      : "84vh",
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
  },
  defaults: {
    duration: 0.8,
  },
});
graph1YearsTl
  .to("#bar2019", { height: "3.33%" }, 0)
  .to("#bar2020", { height: "33.33%" }, 0.1)
  .to("#bar2021", { height: "69.99%" }, 0.2)
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
  y:
    window.innerWidth > 768
      ? "108vh"
      : window.innerWidth <= 480
      ? "70vh"
      : "84vh",
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
    start:
      window.innerWidth > 768
        ? "-50% 10%"
        : window.innerWidth <= 580
        ? "-100% 50%"
        : "-100% 10%",
    // markers: {
    //   indent: 64,
    //   startColor: "yellow",
    //   endColor: "yellow",
    // },
  },
});
gsap.to("#lineGraphPath", {
  scrollTrigger: {
    trigger: "#lineGraphPath",
    // toggleClass: "pathActive",
    onEnter: () =>
      document.querySelector("#lineGraphPath").classList.add("pathActive"),
    onLeaveBack: () =>
      document.querySelector("#lineGraphPath").classList.remove("pathActive"),
    toggleActions: "restart none none reverse",
    start:
      window.innerWidth > 768
        ? "-50% 10%"
        : window.innerWidth <= 580
        ? "-100% 50%"
        : "-100% 10%",
  },
});

gsap.to(".point1", {
  scrollTrigger: {
    trigger: ".point1",
    onEnter: () =>
      document.querySelector(".point1").classList.add("point1Active"),
    onLeaveBack: () =>
      document.querySelector(".point1").classList.remove("point1Active"),
    toggleActions: "restart none none reverse",
    start:
      window.innerWidth > 768
        ? "-3160% 10%"
        : window.innerWidth <= 520
        ? "-4220% 50%"
        : "-4220% 10%",
  },
});
gsap.to(".point2", {
  scrollTrigger: {
    trigger: ".point2",
    onEnter: () =>
      document.querySelector(".point2").classList.add("point2Active"),
    onLeaveBack: () =>
      document.querySelector(".point2").classList.remove("point2Active"),
    toggleActions: "restart none none reverse",
    start: "-2630% 10%",
    start:
      window.innerWidth > 768
        ? "-2630% 10%"
        : window.innerWidth <= 520
        ? "-3720% 50%"
        : "-3720% 10%",
  },
});
gsap.to(".point3", {
  scrollTrigger: {
    trigger: ".point3",
    onEnter: () =>
      document.querySelector(".point3").classList.add("point3Active"),
    onLeaveBack: () =>
      document.querySelector(".point3").classList.remove("point3Active"),
    toggleActions: "restart none none reverse",
    start:
      window.innerWidth > 768
        ? "-1860% 10%"
        : window.innerWidth <= 520
        ? "-2920% 50%"
        : "-2920% 10%",
    end: "1200% top",
    // markers: true,
  },
});
gsap.to(".point4", {
  scrollTrigger: {
    trigger: ".point4",
    onEnter: () =>
      document.querySelector(".point4").classList.add("point4Active"),
    onLeaveBack: () =>
      document.querySelector(".point4").classList.remove("point4Active"),
    toggleActions: "restart none none reverse",
    start:
      window.innerWidth > 768
        ? "-986% 10%"
        : window.innerWidth <= 520
        ? "-2080% 50%"
        : "-2080% 10%",
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
    toggleActions: "restart none none reverse",
    start:
      window.innerWidth > 768
        ? "top 10%"
        : window.innerWidth <= 520
        ? "top 28%"
        : "-12% top",
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

// // Instead, refresh scrollTrigger
// const gsapResizing = (() => {
//   const refreshOnDesktop = () => {
//     const isTouchDevice =
//       "ontouchstart" in window ||
//       navigator.maxTouchPoints > 0 ||
//       navigator.msMaxTouchPoints > 0;

//     if (!isTouchDevice) {
//       window.location.reload();
//     }
//   };

//   window.addEventListener("resize", refreshOnDesktop);
// })();

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
