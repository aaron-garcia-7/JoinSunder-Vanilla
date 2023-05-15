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

  cta.addEventListener("focusin", () => {
    closeNav();
    closeVideo();
  });
}

//
// Nav Slider
//

const navSlider = document.querySelector(".navSlider");

navSlider.addEventListener("mousemove", (e) => {
  if (pgWidth > 1024) {
    // navSlider.style.transform = `translate(calc(20vw - calc(${e.pageX}px * 0.43)), 2vw)`;
    navSlider.style.transform = `translate(calc(25vw - calc(${e.pageX}px * 0.56)), 2vw)`;
    // navSlider.style.border = `2px dashed coral`;
  } else if (pgWidth <= 1024 || pgWidth > 620) {
    navSlider.style.transform = `translate(calc(50vw - calc(${e.pageX}px * 1.12)), 2vw)`;
  } else if (pgWidth <= 620) {
    navSlider.style.transform = `translate(calc(100vw - calc(${e.pageX}px * 0.5)), 2vw)`;
  }
  navSlider.style.transition = `0.8s cubic-bezier(.1,.44,.44,1)`;
});
