//
// Utility
//

let pgWidth = window.innerWidth;

//
// Call To Action Buttons
//

const cta1 = document.querySelector("#cta1");
const cta1Circle = document.querySelector("#cta1Circle");

cta1.addEventListener("mousemove", (e) => {
  const rect = cta1.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  cta1Circle.style.setProperty("--mouse-x", `${y}px`);
  cta1Circle.style.setProperty("--mouse-y", `${x}px`);
});

const cta2 = document.querySelector("#cta2");
const cta2Circle = document.querySelector("#cta2Circle");

cta2.addEventListener("mousemove", (e) => {
  const rect = cta2.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  cta2Circle.style.setProperty("--mouse-x", `${y}px`);
  cta2Circle.style.setProperty("--mouse-y", `${x}px`);
});

//
// Nav Slider
//

const navSlider = document.querySelector(".navSlider");

// navSlider.addEventListener("mouseenter", () => {
navSlider.addEventListener("mousemove", (e) => {
  if (pgWidth > 1024) {
    navSlider.style.transform = `translate(calc(20vw - calc(${e.pageX}px * 0.43)), 2vw)`;
  } else if (pgWidth <= 1024 || pgWidth >= 620) {
    navSlider.style.transform = `translate(calc(35vw - calc(${e.pageX}px * 0.8)), 2vw)`;
  } else if (pgWidth < 620) {
    navSlider.style.transform = `translate(calc(100vw - calc(${e.pageX}px * 0.5)), 2vw)`;
    navSlider.style.border = `2px dashed coral`;
  }
  navSlider.style.transition = `0.8s cubic-bezier(.1,.44,.44,1)`;
});
// });

// navSlider.addEventListener("mouseleave", () => {
//   // navSlider.style.transform = null; // to return the postion after mouseleave
//   navSlider.style.transform = `translate(calc(18vw - calc(${e.pageX}px * 0.38)), -4vw) scale(1)`;
//   navSlider.style.transition = null;
// });
