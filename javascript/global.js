//
// Utility
//

let pgWidth = window.innerWidth;

//
// Call To Action Buttons
//

const cta = document.querySelector("#cta");
const ctaCircle = document.querySelector("#ctaCircle");

if (cta) {
  cta.addEventListener("mousemove", (e) => {
    const rect = cta.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    ctaCircle.style.setProperty("--mouse-x", `${y}px`);
    ctaCircle.style.setProperty("--mouse-y", `${x}px`);
  });
}

//
// Nav Slider
//

const navSlider = document.querySelector(".navSlider");

// navSlider.addEventListener("mouseenter", () => {
navSlider.addEventListener("mousemove", (e) => {
  if (pgWidth > 1024) {
    navSlider.style.transform = `translate(calc(20vw - calc(${e.pageX}px * 0.43)), 2vw)`;
  } else if (pgWidth <= 1024 || pgWidth > 620) {
    // navSlider.style.transform = `translate(calc(35vw - calc(${e.pageX}px * 0.8)), 2vw)`;
    navSlider.style.transform = `translate(calc(50vw - calc(${e.pageX}px * 1.12)), 2vw)`;
    // navSlider.style.border = `2px dashed coral`;
  } else if (pgWidth <= 620) {
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

//
// Utility
//

window.addEventListener("orientationchange", function () {
  location.reload();
});
