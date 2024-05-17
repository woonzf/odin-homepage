const menu = (() => {
  const btnAboutL = document.querySelector("#btn-about-l");
  const btnProjectsL = document.querySelector("#btn-projects-l");
  const btnContactL = document.querySelector("#btn-contact-l");

  const btnMenu = document.querySelector("#btn-menu");
  const btnMenuBack = document.querySelector("#btn-menu-back");
  const btnAboutP = document.querySelector("#btn-about-p");
  const btnProjectsP = document.querySelector("#btn-projects-p");
  const btnContactP = document.querySelector("#btn-contact-p");

  const hellos = document.querySelectorAll(".hello");
  const helloDot = document.querySelector("#hello-dot");
  const menu = document.querySelector("#menu");

  const helloWrapper = document.querySelector("#hello-wrapper");
  const bgLeft = document.querySelector("#bg-left");
  const bgRight = document.querySelector("#bg-right");
  const nav = document.querySelector("nav");

  function init() {
    btnAboutL.onclick = () => {
      _toggleHelloMenu(bgRight);
    };

    btnProjectsL.onclick = () => {
      _toggleHelloMenu(bgLeft);
    };

    btnContactL.onclick = () => {
      console.log("CONTACT");
    };

    btnMenu.onclick = () => {
      _openMenuTimeout(btnMenu, menu);
    };

    btnMenuBack.onclick = () => {
      _openMenuTimeout(menu, btnMenu);
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

  function _openMenuTimeout(hide, show) {
    setTimeout(() => {
      hide.classList.toggle("hidden");
    }, 1000);
    show.classList.toggle("hidden");
    _openMenu();
  }

  function _openMenu() {
    requestAnimationFrame(() => {
      menu.classList.toggle("open");
      btnMenu.classList.toggle("open");
    });
    hellos.forEach((el) => {
      el.classList.toggle("move");
    });
    helloDot.classList.toggle("move");
  }

  function _toggleHelloMenu(shrink) {
    helloWrapper.classList.toggle("hide");
    shrink.classList.toggle("shrink");
    nav.classList.toggle("hide");
  }

  return { init };
})();

export { menu };
