import { background } from "./background";
import { scroll } from "./scroll";

const menu = (() => {
  const html = document.querySelector("html");
  const body = document.querySelector("body");

  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");
  const btnContactL = document.querySelector("#btn-contact-l");

  const btnMenu = document.querySelector("#btn-menu");
  const btnMenuBack = document.querySelector("#btn-menu-back");
  const btnAboutP = document.querySelector("#btn-about-p");
  const btnProjectsP = document.querySelector("#btn-projects-p");
  const btnContactP = document.querySelector("#btn-contact-p");

  const menu = document.querySelector("#menu");

  const helloWrapper = document.querySelector("#hello-wrapper");
  const nav = document.querySelectorAll("nav");

  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");

  const btnBackAbout = document.querySelector("#btn-back-about");
  const btnBackProjects = document.querySelector("#btn-back-projects");
  const btnBackContact = document.querySelector("#btn-back-contact");

  let isOpenMenu = 0;
  let scrollY = 0;
  let threshold = 0;

  function init() {
    threshold = scroll.getScrollThreshold();

    btnAboutL.onclick = () => {
      _toggleBackground(2);
      about.classList.toggle("active");
    };

    btnBackAbout.onclick = () => {
      about.classList.toggle("active");
      _toggleBackground(2);
    };

    btnProjectsL.onclick = () => {
      _toggleBackground(1);
      projects.classList.toggle("active");
    };

    btnBackProjects.onclick = () => {
      projects.classList.toggle("active");
      _toggleBackground(1);
    };

    btnContactL.onclick = () => {
      _toggleBackground(2);
      contact.classList.toggle("active");
    };

    btnBackContact.onclick = () => {
      contact.classList.toggle("active");
      _toggleBackground(2);
    };

    btnMenu.onclick = () => {
      if (isOpenMenu === 1) {
        btnMenuBack.click();
        return;
      }

      if (window.scrollY < threshold) background.shrink(1);
      helloWrapper.classList.toggle("hide");
      menu.classList.toggle("hidden");
      requestAnimationFrame(() => {
        menu.classList.toggle("open");
      });
      _toggleOpenMenu();
      scrollY = window.scrollY;
      setTimeout(() => {
        _toggleScroll();
      }, 1000);
      _toggleMenuCooldown();
    };

    btnMenuBack.onclick = () => {
      menu.classList.toggle("open");
      setTimeout(() => {
        menu.classList.toggle("hidden");
      }, 1000);
      helloWrapper.classList.toggle("hide");
      _toggleOpenMenu();
      _toggleScroll();
      window.scrollTo(0, scrollY);
      if (window.scrollY < threshold) background.shrink(1);
    };

    btnAboutP.onclick = () => {
      console.log("ABOUT P");
    };

    btnProjectsP.onclick = () => {
      console.log("PROJECTS P");
    };

    btnContactP.onclick = () => {
      console.log("CONTACT P");
    };
  }

  function _toggleBackground(bg) {
    helloWrapper.classList.toggle("hide");
    background.shrink(bg);
    nav.forEach((el) => {
      el.classList.toggle("hide");
    });
  }

  function _toggleScroll() {
    html.classList.toggle("overflow-hidden");
    body.classList.toggle("overflow-hidden");
  }

  function _toggleOpenMenu() {
    isOpenMenu = +!isOpenMenu;
  }

  function _toggleMenuCooldown() {
    btnMenu.disabled = true;
    btnMenuBack.disabled = true;
    setTimeout(() => {
      btnMenu.disabled = false;
      btnMenuBack.disabled = false;
    }, 1000);
  }

  return { init };
})();

export { menu };
