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

  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");

  const btnBackAbout = document.querySelector("#btn-back-about");
  const btnBackProjects = document.querySelector("#btn-back-projects");
  const btnBackContact = document.querySelector("#btn-back-contact");

  function init() {
    btnAboutL.onclick = () => {
      _toggleHelloMenu(bgRight);
      setTimeout(() => {
        about.classList.toggle("hidden");
        requestAnimationFrame(() => {
          about.classList.toggle("active");
        });
      }, 1000);
    };

    btnBackAbout.onclick = () => {
      about.classList.toggle("active");
      about.classList.toggle("hidden");
      _toggleHelloMenu(bgRight);
    };

    btnProjectsL.onclick = () => {
      _toggleHelloMenu(bgLeft);
      setTimeout(() => {
        projects.classList.toggle("hidden");
        requestAnimationFrame(() => {
          projects.classList.toggle("active");
        });
      }, 1000);
    };

    btnBackProjects.onclick = () => {
      projects.classList.toggle("active");
      projects.classList.toggle("hidden");
      _toggleHelloMenu(bgLeft);
    };

    btnContactL.onclick = () => {
      _toggleHelloMenu();
      setTimeout(() => {
        contact.classList.toggle("hidden");
        requestAnimationFrame(() => {
          contact.classList.toggle("active");
        });
      }, 1000);
    };

    btnBackContact.onclick = () => {
      contact.classList.toggle("active");
      contact.classList.toggle("hidden");
      _toggleHelloMenu();
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

  function _toggleHelloMenu(bg) {
    helloWrapper.classList.toggle("hide");
    if (bg) bg.classList.toggle("shrink");
    nav.classList.toggle("hide");
  }

  return { init };
})();

export { menu };
