import { background } from "./background";
import { screenOrientation } from "./screen-orientation";

const scroll = (() => {
  const sectionIntro = document.querySelector("#section-intro");
  const scroll = document.querySelector("#scroll");

  const threshold = 1;
  let shrink = 0;

  let scrollBarHeightProjects = 0;
  let percentProjects = 0;
  const deviationProjects = 60;
  const xProjects = -100;

  function init() {
    _shrinkOnScroll();
  }

  function getScrollThreshold() {
    return threshold;
  }

  function floatIndexProjects(element, section) {
    screenOrientation.setIndexProjects(element, section);
    refloatIndexProjects(element, section);
    section.onscroll = () => {
      percentProjects = (section.scrollTop / scrollBarHeightProjects) * 100;
      const length = element.length;
      for (let i = 0; i < length; i++) {
        if (i === length - 1)
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(${deviationProjects * Math.sqrt(i) - percentProjects * 0.7}%)`;
        else
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(${deviationProjects * Math.sqrt(i) - percentProjects}%)`;
      }
    };
  }

  function refloatIndexProjects(element, section) {
    setTimeout(() => {
      scrollBarHeightProjects =
        section.scrollHeight - section.clientHeight - 56;
      const length = element.length;
      for (let i = 0; i < length; i++) {
        if (window.innerHeight < window.innerWidth)
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(${deviationProjects * Math.sqrt(i)}%)`;
        else
          element[i].style.transform =
            `translateX(${xProjects}%) translateY(0%)`;
      }
    }, 500);
  }

  function _shrinkOnScroll() {
    window.onscroll = () => {
      if (window.scrollY > threshold && shrink === 0) {
        background.shrink(1, 3);
        _shrinkIntro();
        shrink = 1;
      } else if (window.scrollY < threshold && shrink === 1) {
        background.shrink(1, 3);
        _shrinkIntro();
        shrink = 0;
      }
    };
  }

  function _shrinkIntro() {
    sectionIntro.classList.toggle("shrink");
    scroll.classList.toggle("hide");
  }

  // https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      }),
    );
  } catch (e) {}

  let wheelOpt = supportsPassive ? { passive: false } : false;
  let wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  return {
    init,
    getScrollThreshold,
    floatIndexProjects,
    refloatIndexProjects,
    disableScroll,
    enableScroll,
  };
})();

export { scroll };
