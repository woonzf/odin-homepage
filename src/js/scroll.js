import { background } from "./background";

const scroll = (() => {
  const heightDoc = document.body.scrollHeight;
  const heightScreen = screen.height;
  const heightScroll = heightDoc - heightScreen;

  const threshold = 56;
  let shrink = 0;

  function init() {
    if (window.innerHeight > window.innerWidth) _shrinkOnScroll();
  }

  function getScrollThreshold() {
    return threshold;
  }

  function _shrinkOnScroll() {
    document.onscroll = () => {
      if (window.scrollY > threshold && shrink === 0) {
        background.shrink(1);
        shrink = 1;
      } else if (window.scrollY < threshold && shrink === 1) {
        background.shrink(1);
        shrink = 0;
      }
    };
  }

  // function _floatHello() {
  //   const percent = _getScrollPercent() * 0.5;
  //   x.style.transform = `translateY(-${percent}%)`;
  //   y.style.transform = `translateY(-${percent * 1.5}%)`;
  // }

  function _getScrollPercent() {
    return (window.scrollY / heightScroll) * 100;
  }

  return { init, getScrollThreshold };
})();

export { scroll };
