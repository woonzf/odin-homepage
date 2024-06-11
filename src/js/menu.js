import { background } from "./background";
import { scroll } from "./scroll";
import { tabClickable } from "./tab-clickable";

const menu = (() => {
  const btnMenuL = document.querySelector("#btn-menu-l");
  const btnMenuBackL = document.querySelector("#btn-menu-back-l");

  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");
  const btnContactL = document.querySelector("#btn-contact-l");

  const btnMenuP = document.querySelector("#btn-menu-p");
  const btnMenuBackP = document.querySelector("#btn-menu-back-p");

  const btnHomeP = document.querySelector("#btn-home-p");
  const btnAboutP = document.querySelector("#btn-about-p");
  const btnProjectsP = document.querySelector("#btn-projects-p");
  const btnContactP = document.querySelector("#btn-contact-p");

  const menuL = document.querySelector("#menu-l");
  const menuP = document.querySelector("#menu-p");
  const helloWrapper = document.querySelector("#hello-wrapper");
  const infoWrapper = document.querySelector("#info-wrapper");

  const bgLeftMenu = document.querySelector("#bg-left-menu");
  const bgLeftAbout = document.querySelector("#bg-left-about");
  const bgLeftProjects = document.querySelector("#bg-left-projects");
  const bgLeftContact = document.querySelector("#bg-left-contact");

  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");
  const btnBacks = document.querySelectorAll(".btn-back");

  let isOpenMenu = 0;
  let threshold = 0;
  let isOpenTab = 0;
  let backTarget = [];

  function init() {
    threshold = scroll.getScrollThreshold();

    btnMenuL.onclick = () => {
      btnMenuL.classList.toggle("hide");
      menuL.classList.toggle("hidden");
      requestAnimationFrame(() => {
        menuL.classList.toggle("open");
      });
      helloWrapper.classList.toggle("hide");
      infoWrapper.classList.toggle("hide");
      bgLeftMenu.classList.toggle("show");
      isOpenMenu = 1;
    };

    btnMenuBackL.onclick = () => {
      helloWrapper.classList.toggle("hide");
      infoWrapper.classList.toggle("hide");
      bgLeftMenu.classList.toggle("show");
      menuL.classList.toggle("open");
      setTimeout(() => {
        menuL.classList.toggle("hidden");
      }, 1000);
      btnMenuL.classList.toggle("hide");
      isOpenMenu = 0;
    };

    btnAboutL.onclick = () => {
      _openTab(about, 1, btnAboutL);
    };
    btnProjectsL.onclick = () => {
      _openTab(projects, 1, btnProjectsL);
    };
    btnContactL.onclick = () => {
      _openTab(contact, 1, btnContactL);
    };

    btnBacks.forEach((btn) => {
      btn.onclick = () => {
        _closeTab();
      };
    });

    btnMenuP.onclick = () => {
      if (isOpenMenu === 1) {
        btnMenuBackP.click();
        return;
      }

      _toggleMenuCooldown();
      scroll.disableScroll();

      if (window.scrollY < threshold) _toggleBackground(1);

      menuP.classList.toggle("hidden");
      requestAnimationFrame(() => {
        menuP.classList.toggle("open");
      });

      isOpenMenu = 1;
    };

    btnMenuBackP.onclick = () => {
      _toggleMenuCooldown();
      scroll.enableScroll();
      menuP.classList.toggle("open");

      setTimeout(() => {
        menuP.classList.toggle("hidden");
      }, 500);

      if (window.scrollY < threshold) _toggleBackground(1);
      if (helloWrapper.classList.contains("hide")) _toggleBackground(1);

      isOpenMenu = 0;
    };

    btnHomeP.onclick = () => {
      _scrollTo(0, 0);
    };

    btnAboutP.onclick = () => {
      if (window.scrollY < threshold) {
        window.scrollBy(0, 2);
        _scrollTo(about, 1);
        window.scrollBy(0, -(screen.height / 2));
      } else _scrollTo(about, 1);
    };

    btnProjectsP.onclick = () => {
      _scrollTo(projects, 1);
    };
    btnContactP.onclick = () => {
      _scrollTo(contact, 0);
    };
  }

  function resetOnScreenChange() {
    if (isOpenTab === 1) {
      btnBacks[0].click();
      isOpenTab = 0;
    }
  }

  function _openTab(tab, bg, btn) {
    if (isOpenTab === 1) btnBacks[0].click();
    btn.disabled = true;
    _toggleBackground(bg);
    tabClickable.toggle(tab);
    tab.classList.toggle("active");
    isOpenTab = 1;
    backTarget = [tab, bg, btn];
  }

  function _closeTab() {
    const target = backTarget[0];
    target.classList.toggle("active");
    _toggleBackground(backTarget[1]);
    setTimeout(() => {
      target.querySelector("article").scrollTo(0, 0);
      tabClickable.toggle(target);
    }, 1000);
    isOpenTab = 0;
    backTarget[2].disabled = false;
  }

  function _toggleBackground(bg) {
    background.shrink(bg);
    helloWrapper.classList.toggle("hide");
    infoWrapper.classList.toggle("hide");
  }

  function _toggleMenuCooldown() {
    btnMenuP.disabled = true;
    btnMenuBackP.disabled = true;
    setTimeout(() => {
      btnMenuP.disabled = false;
      btnMenuBackP.disabled = false;
    }, 500);
  }

  function _scrollTo(content, offset) {
    if (content === 0 && offset === 0) window.scrollTo(0, 0);
    else {
      content.scrollIntoView();
      if (offset === 1) window.scrollBy(0, -56 - 28);
    }
    btnMenuBackP.click();
  }

  return { init, resetOnScreenChange };
})();

export { menu };
