// window.onbeforeunload = () => {
//   window.scrollTo(0, 0);
// };

//
// Handling Navigation Logic
//

// Global elements
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const logo = document.querySelector(".logo");
const navLogo = document.querySelector(".navLogo");

// Page Unique elements
const mainContent = document.querySelector(".mainContent");
const quoteSection = document.querySelector("#quoteSection");

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

let pgWidth = window.innerWidth;
const checkWidth = () => {
  if (pgWidth <= 768) {
    location.reload();
    pgWidth = window.innerWidth;
  }
  if (pgWidth > 768) {
    location.reload();
    pgWidth = window.innerWidth;
  }
};

window.addEventListener("resize", checkWidth);

gsap.registerPlugin(ScrollTrigger);

let backgroundTL = gsap.timeline({
  scrollTrigger: {
    trigger: "#mainContent",
    scrub: 1,
    start: "30% 40%",
    end: "156% 60%",
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
    end: "200% 6%",
    // markers: {
    //   indent: 124,
    //   startColor: "coral",
    //   endColor: "coral",
    // },
  },
});

gsap.to("#map", {
  opacity: 1,
  y: "50%",
  ease: "none",
  scrollTrigger: {
    trigger: "#growth",
    scrub: true,
    start: "top 75%",
    end: "center center",
    // markers: true,
  },
});

gsap.to("#compass", {
  opacity: 1,
  scrollTrigger: {
    trigger: "#growth",
    // scrub: true,
    toggleActions: "play none none reverse", // play, pause, resume, reverse, restart, reset, complete, none
    start: "top top",
    end: "top top",
  },
});

gsap.to("#timelineBorder", {
  width: "100%",
  scrollTrigger: {
    trigger: "#growth",
    // scrub: true,
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

let timelineLinks = gsap.utils.toArray("#timelineLinks");
gsap.to(timelineLinks, {
  opacity: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#growth",
    toggleActions: "play none none reverse",
    start: "top top",
    end: "top top",
  },
});

let link1TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "0% 15%",
    end: "580% 15%",
    // markers: {
    //   indent: 124,
    //   startColor: "lightblue",
    //   endColor: "lightblue",
    // },
  },
});
link1TL
  .to(".link1", {
    background: "#0c5ff2",
  })
  .to(".link1", {
    background: "#0c5ff2",
  })
  .to(".link1", {
    background: "#0c5ff2",
  })
  .to(".link1", {
    background: "#0c5ff2",
  })
  .to(".link1", {
    background: "transparent",
  });
link1TL
  .to(".link2", {
    background: "#0c5ff2",
  })
  .to(".link2", {
    background: "#0c5ff2",
  })
  .to(".link2", {
    background: "#0c5ff2",
  })
  .to(".link2", {
    background: "#0c5ff2",
  })
  .to(".link2", {
    background: "transparent",
  });
link1TL
  .to(".link3", {
    background: "#0c5ff2",
  })
  .to(".link3", {
    background: "#0c5ff2",
  })
  .to(".link3", {
    background: "#0c5ff2",
  })
  .to(".link3", {
    background: "#0c5ff2",
  })
  .to(".link3", {
    background: "transparent",
  });
link1TL
  .to(".link4", {
    background: "#0c5ff2",
  })
  .to(".link4", {
    background: "#0c5ff2",
  })
  .to(".link4", {
    background: "#0c5ff2",
  })
  .to(".link4", {
    background: "#0c5ff2",
  })
  .to(".link4", {
    background: "transparent",
  });

let states2019 = gsap.utils.toArray(".state2019");

gsap.to(states2019, {
  fill: "#4693D4",
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "0% 15%",
    end: "20% 15%",
    // markers: true,
  },
});

let pending2019 = gsap.utils.toArray(".pend2019");
let pending2019TL = gsap.timeline({
  scrollTrigger: {
    trigger: "#numberArea",
    scrub: true,
    start: "0% 15%",
    end: "160% 15%",
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
    start: "160% 15%",
    end: "320% 15%",
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
    start: "320% 15%",
    end: "480% 15%",
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
    start: "480% 15%",
    end: "640% 15%",
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
    fill: "#4693D4",
  });
