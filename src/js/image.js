import imgDarkMode24w from "../img/icons/dark-mode-24w.png";
import imgLightMode24w from "../img/icons/light-mode-24w.png";
import imgArrowTheme2_24w from "../img/icons/arrow-theme2-24w.png";
import imgPoll24w from "../img/icons/poll-24w.png";
import imgProfile640w from "../img/profile-2-640w.jpg";
import imgAddress50w from "../img/icons/address-50w.png";
import imgPhone50w from "../img/icons/phone-50w.png";
import imgLink50w from "../img/icons/link-50w.png";

const image = (() => {
  const darkMode = document.querySelector("#img-dark-mode");
  const lightMode = document.querySelector("#img-light-mode");
  const arrows = document.querySelectorAll(".img-arrow");
  const menu = document.querySelector("#img-menu");
  const profile = document.querySelector("#img-profile");
  const address = document.querySelector("#img-address");
  const phone = document.querySelector("#img-phone");
  const link = document.querySelector("#img-link");

  function init() {
    darkMode.src = imgDarkMode24w;
    lightMode.src = imgLightMode24w;
    arrows.forEach((el) => {
      el.src = imgArrowTheme2_24w;
    });
    menu.src = imgPoll24w;
    profile.src = imgProfile640w;

    address.src = imgAddress50w;
    phone.src = imgPhone50w;
    link.src = imgLink50w;
  }

  return { init };
})();

export { image };
