import imgDarkMode24w from "../img/dark-mode-24w.png";
import imgLightMode24w from "../img/light-mode-24w.png";
import imgArrow24w from "../img/arrow-24w.png";
import imgPoll24w from "../img/poll-24w.png";

const image = (() => {
  const darkMode = document.querySelector("#img-dark-mode");
  const lightMode = document.querySelector("#img-light-mode");
  const arrows = document.querySelectorAll(".img-arrow");
  const menu = document.querySelector("#img-menu");

  function init() {
    darkMode.src = imgDarkMode24w;
    lightMode.src = imgLightMode24w;
    arrows.forEach((el) => {
      el.src = imgArrow24w;
    });
    menu.src = imgPoll24w;
  }

  return { init };
})();

export { image };
