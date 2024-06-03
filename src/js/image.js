import imgDarkMode50w from "../img/icons/dark-mode-50w.png";
import imgDarkModeW50w from "../img/icons/dark-mode-w-50w.png";
import imgArrowW50w from "../img/icons/arrow-w-50w.png";
import imgProfile640w from "../img/profile-2-640w.jpg";

import imgMenu50w from "../img/icons/poll-50w.png";
import imgMenuW50w from "../img/icons/poll-w-50w.png";

import imgOpen50w from "../img/icons/open-50w.png";
import imgOpenW50w from "../img/icons/open-w-50w.png";

import imgName50w from "../img/icons/name-50w.png";
import imgNameW50w from "../img/icons/name-w-50w.png";
import imgEmail50w from "../img/icons/email-50w.png";
import imgEmailW50w from "../img/icons/email-w-50w.png";
import imgPhone50w from "../img/icons/phone-50w.png";
import imgPhoneW50w from "../img/icons/phone-w-50w.png";
import imgLink50w from "../img/icons/link-50w.png";
import imgLinkW50w from "../img/icons/link-w-50w.png";

const image = (() => {
  const darkModes = document.querySelectorAll(".img-dark-mode");
  const lightModes = document.querySelectorAll(".img-light-mode");
  const scroll = document.querySelector("#img-scroll");
  const profile = document.querySelector("#img-profile");

  const menu = document.querySelector("#img-menu-wrapper");
  const name = document.querySelector("#img-name-wrapper");
  const email = document.querySelector("#img-email-wrapper");
  const phone = document.querySelector("#img-phone-wrapper");
  const link = document.querySelector("#img-link-wrapper");

  function init() {
    darkModes.forEach((dark) => {
      dark.src = imgDarkModeW50w;
    });

    lightModes.forEach((light) => {
      light.src = imgDarkMode50w;
    });

    scroll.src = imgArrowW50w;
    profile.src = imgProfile640w;

    _setImgSrc(menu, imgMenuW50w, imgMenu50w);
    _setImgSrc(name, imgNameW50w, imgName50w);
    _setImgSrc(email, imgEmailW50w, imgEmail50w);
    _setImgSrc(phone, imgPhoneW50w, imgPhone50w);
    _setImgSrc(link, imgLinkW50w, imgLink50w);
  }

  function setIconOpen(className) {
    const element = document.querySelectorAll(className);
    element.forEach((el) => {
      _setImgSrc(el, imgOpenW50w, imgOpen50w);
    });
  }

  function _setImgSrc(id, srcDark, srcLight) {
    const target = id.querySelectorAll("img");
    target[0].src = srcDark;
    target[1].src = srcLight;
  }

  return { init, setIconOpen };
})();

export { image };
