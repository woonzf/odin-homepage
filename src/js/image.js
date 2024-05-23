import imgDarkMode24w from "../img/icons/dark-mode-24w.png";
import imgLightMode24w from "../img/icons/light-mode-24w.png";
import imgArrow24w from "../img/icons/arrow-24w.png";
import imgArrow224w from "../img/icons/arrow-2-24w.png";
import imgPoll24w from "../img/icons/poll-24w.png";
import imgProfile640w from "../img/profile-2-640w.jpg";

import imgYpetD from "../img/projects/ypet-d-900w.png";

const image = (() => {
  const darkMode = document.querySelector("#img-dark-mode");
  const lightMode = document.querySelector("#img-light-mode");
  const arrows = document.querySelectorAll(".img-arrow");
  const arrows2 = document.querySelectorAll(".img-arrow-2");
  const menu = document.querySelector("#img-menu");
  const profile = document.querySelector("#img-profile");

  const project1 = document.querySelector("#img-project-1");

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
    profile.src = imgProfile640w;
    project1.src = imgYpetD;
  }

  return { init };
})();

export { image };
