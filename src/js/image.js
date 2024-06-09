import imgArrowW50w from "../img/icons/arrow-w-50w.png";
import imgProfile500w from "../img/profile-500w.jpg";

import imgMenu50w from "../img/icons/poll-50w.png";
import imgMenuW50w from "../img/icons/poll-w-50w.png";

import imgOpen50w from "../img/icons/open-50w.png";
import imgOpenW50w from "../img/icons/open-w-50w.png";

import imgName50w from "../img/icons/name-50w.png";
import imgNameW50w from "../img/icons/name-w-50w.png";
import imgEmail50w from "../img/icons/email-50w.png";
import imgEmailW50w from "../img/icons/email-w-50w.png";
import imgLink50w from "../img/icons/link-50w.png";
import imgLinkW50w from "../img/icons/link-w-50w.png";

import imgFavicon32w from "../img/icons/favicon-32w.png";

const image = (() => {
  const scroll = document.querySelector("#img-scroll");
  const profile = document.querySelector("#img-profile");

  const menu = document.querySelector("#img-menu-wrapper");
  const name = document.querySelector("#img-name-wrapper");
  const email = document.querySelector("#img-email-wrapper");
  const link = document.querySelector("#img-link-wrapper");

  const favicon = document.querySelector('link[rel="icon"]');

  function init() {
    scroll.src = imgArrowW50w;
    profile.src = imgProfile500w;

    _setImgSrc(menu, imgMenuW50w, imgMenu50w);
    _setImgSrc(name, imgNameW50w, imgName50w);
    _setImgSrc(email, imgEmailW50w, imgEmail50w);
    _setImgSrc(link, imgLinkW50w, imgLink50w);

    favicon.type = "image/png";
    favicon.href = imgFavicon32w;
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
