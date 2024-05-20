import imgDarkMode24w from "../img/dark-mode-24w.png";
import imgLightMode24w from "../img/light-mode-24w.png";
import imgArrow24w from "../img/arrow-24w.png";
import imgArrow224w from "../img/arrow-2-24w.png";
import imgPoll24w from "../img/poll-24w.png";

const image = (() => {
  const darkMode = document.querySelector("#img-dark-mode");
  const lightMode = document.querySelector("#img-light-mode");
  const arrows = document.querySelectorAll(".img-arrow");
  const arrows2 = document.querySelectorAll(".img-arrow-2");
  const menu = document.querySelector("#img-menu");

  function init() {
    darkMode.src = imgDarkMode24w;
    lightMode.src = imgLightMode24w;
    arrows.forEach((el) => {
      el.src = imgArrow24w;
    });
    arrows2.forEach((el) => {
      el.src = imgArrow224w;
    });
    menu.src = imgPoll24w;
  }

  return { init };
})();

export { image };
