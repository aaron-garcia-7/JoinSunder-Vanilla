const navSlider = document.querySelector(".navSlider");

let mouseIn = false;

navSlider.addEventListener("mouseenter", () => {
  mouseIn = true;
  // console.log(window.innerWidth);
  navSlider.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {
      navSlider.style.transform = mouseIn
        ? `translate(calc(18vw - calc(${e.pageX}px * 0.38)), 2vw) scale(1)`
        : `translate(calc(10rem + 8vw), 2vw) scale(1)`;
    } else {
      navSlider.style.transform = mouseIn
        ? `translate(calc(46vw - calc(${e.pageX}px * 1)), 2vw) scale(1)`
        : `translate(calc(10rem + 8vw), 2vw) scale(1)`;
    }
    navSlider.style.transition = mouseIn
      ? `0.8s cubic-bezier(.1,.44,.44,1)`
      : `0.7s cubic-bezier(.75,.15,.25,.85) 0.1s`;
  });
});

navSlider.addEventListener("mouseleave", () => {
  mouseIn = false;
  // navSlider.style.transform = null;
  navSlider.style.transform = `translate(calc(18vw - calc(${e.pageX}px * 0.38)), -4vw) scale(1)`;
  navSlider.style.transition = null;
});
