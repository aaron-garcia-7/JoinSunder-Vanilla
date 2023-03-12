//
// Call To Action Button
//

const cta = document.querySelector(".cta");
const ctaCircle = document.querySelector(".ctaCircle");

cta.addEventListener("mousemove", (e) => {
  const rect = cta.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  ctaCircle.style.setProperty("--mouse-x", `${y}px`);
  ctaCircle.style.setProperty("--mouse-y", `${x}px`);
});

//
// Nav Slider
//

const navSlider = document.querySelector(".navSlider");

navSlider.addEventListener("mouseenter", () => {
  navSlider.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {
      navSlider.style.transform = `translate(calc(18vw - calc(${e.pageX}px * 0.38)), 2vw) scale(1)`;
    } else {
      navSlider.style.transform = `translate(calc(46vw - calc(${e.pageX}px * 1)), 2vw) scale(1)`;
    }
    navSlider.style.transition = `0.8s cubic-bezier(.1,.44,.44,1)`;
  });
});

navSlider.addEventListener("mouseleave", () => {
  // navSlider.style.transform = null; // to return the postion after mouseleave
  navSlider.style.transform = `translate(calc(18vw - calc(${e.pageX}px * 0.38)), -4vw) scale(1)`;
  navSlider.style.transition = null;
});
