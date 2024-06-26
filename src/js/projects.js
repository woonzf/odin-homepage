import Project from "./class-Project";
import { tools } from "./tools";
import { carousel } from "./carousel";
import { image } from "./image";

import imgYpet from "../img/projects/ypet.png";
import imgWeather from "../img/projects/weather.png";
import imgWeatherM from "../img/projects/weather-m.png";
import imgHomepage from "../img/projects/homepage.png";
import imgHomepageM from "../img/projects/homepage-m.png";
import imgHomepageD from "../img/projects/homepage-d.png";
import imgHomepageMD from "../img/projects/homepage-m-d.png";

const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  const lastChild = contentProjects.lastElementChild;
  const projectList = _getProjects();
  const length = projectList.length;
  const height = 40;
  const scale = 1.1;

  function init() {
    _generateProjects();
    _carouselInit();
    image.setIconOpen(".icon-link-wrapper");
  }

  function _generateProjects() {
    let count = 1;

    for (const project of projectList) {
      // Create elements
      const divWrapper = _createElementWithClass(
        "div",
        "content-wrapper-project",
      );
      const divIndex = _createElementWithClass(
        "div",
        "index-project-wrapper",
        "text-transparent",
        "montserrat",
      );
      const index = _createElementWithClass(
        "span",
        "index-project",
        "text-theme",
        "absolute",
        "translate-x-[-100%]",
      );
      const divInfo = _createElementWithClass(
        "div",
        "info-project",
        "relative",
      );
      const title = _createElementWithClass("h3", "z-[1]", "montserrat");
      const span = _createElementWithClass("span", "text-theme");
      const divDesc = _createElementWithClass("p", "text-justify", "z-[2]");
      const divTools = _createElementWithClass(
        "div",
        "flex",
        "justify-center",
        "items-center",
        "overflow-x-hidden",
      );
      const wrapperToolOuter = _createElementWithClass(
        "div",
        "tools-wrapper-outer-project",
      );
      const wrapperTool = _createElementWithClass(
        "div",
        "tools-wrapper-project",
      );
      const divLinks = _createElementWithClass(
        "div",
        "flex",
        "justify-evenly",
        "items-center",
      );
      const aRepo = _createElementWithClass(
        "a",
        "flex",
        "items-center",
        "gap-3",
        "montserrat",
        "hover:scale-[110%]",
      );
      const spanRepo = _createElementWithClass(
        "span",
        "first-letter:text-theme",
      );
      const spanDemo = spanRepo.cloneNode(false);
      const divImgOuter = _createElementWithClass(
        "div",
        "img-project-outer-wrapper",
      );
      const divImgInner = _createElementWithClass("div");
      const img = _createElementWithClass("img", "img-project");
      const imgMirror = _createElementWithClass("img", "img-project-mirror");
      const img2 = _createElementWithClass("img", "img-project-m", "absolute");

      // Info
      index.textContent = count;
      divIndex.textContent = count;
      divIndex.append(index);
      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.innerHTML = project.desc;

      // Tools
      carousel.generateImage(
        project.tools,
        `tool-project-${count}`,
        height,
        scale,
        wrapperTool,
      );

      wrapperToolOuter.append(wrapperTool);
      divTools.append(wrapperToolOuter);

      // Link and Demo
      aRepo.target = "_blank";
      aRepo.rel = "noreferrer";
      const aDemo = aRepo.cloneNode(false);
      aRepo.href = project.repo;
      spanRepo.textContent = "GITHUB";
      aDemo.href = project.demo;
      spanDemo.textContent = "DEMO";

      const linkWrapper = _createElementWithClass(
        "div",
        "h-[14px]",
        "md:h-[18px]",
        "aspect-square",
        "relative",
        "icon-link-wrapper",
      );
      const imgLink = _createElementWithClass(
        "img",
        "icon-mode-dark",
        "absolute",
      );
      const imgLink2 = _createElementWithClass("img", "icon-mode", "absolute");

      linkWrapper.append(imgLink, imgLink2);
      const linkWrapper2 = linkWrapper.cloneNode(true);

      aRepo.append(spanRepo, linkWrapper);

      // Disable demo link for project Homepage
      if (project.name === "Homepage") {
        aDemo.classList.add("disabled");
        aDemo.textContent = "VIEWING";
      } else aDemo.append(spanDemo, linkWrapper2);

      divLinks.append(aRepo, aDemo);

      const divider = _createElementWithClass("div", "divider-theme");
      divInfo.append(divIndex, title, divDesc, divTools, divLinks, divider);

      // Project Image
      // Desktop and Mobile with Dark Mode
      if (project.img.length > 2) {
        const divImgInnerMode = _createElementWithClass(
          "div",
          "img-project-inner-wrapper-mode",
        );

        const imgInnerMode = _createElementWithClass("img", "img-project-mode");
        const imgInnerModeMirror = _createElementWithClass(
          "img",
          "img-project-mode-mirror",
        );
        const imgInnerModeDark = _createElementWithClass(
          "img",
          "img-project-mode-dark",
        );
        const imgInnerModeDarkMirror = _createElementWithClass(
          "img",
          "img-project-mode-dark-mirror",
        );
        const imgInnerModeM = _createElementWithClass(
          "img",
          "img-project-mode-m",
        );
        const imgInnerModeMDark = _createElementWithClass(
          "img",
          "img-project-mode-m-dark",
        );

        imgInnerMode.src = project.img[0];
        imgInnerModeMirror.src = project.img[0];
        imgInnerModeDark.src = project.img[2];
        imgInnerModeDarkMirror.src = project.img[2];
        imgInnerModeM.src = project.img[1];
        imgInnerModeMDark.src = project.img[3];

        divImgInnerMode.append(
          imgInnerMode,
          imgInnerModeMirror,
          imgInnerModeDark,
          imgInnerModeDarkMirror,
          imgInnerModeM,
          imgInnerModeMDark,
        );
        divImgInner.append(divImgInnerMode);
      } else {
        // Desktop
        img.src = project.img[0];
        imgMirror.src = project.img[0];
        divImgInner.append(img, imgMirror);

        // Mobile
        if (project.img.length === 2) {
          img2.src = project.img[1];
          divImgInner.append(img2);
        }
      }

      if (count % 2 === 0) {
        divImgInner.classList.add("img-project-inner-wrapper-even");
        divWrapper.classList.add("landscape:flex-row-reverse");
        divider.classList.add("right");
      } else {
        divImgInner.classList.add("img-project-inner-wrapper");
        divider.classList.add("left");
      }

      const divImgWrapper = _createElementWithClass(
        "div",
        "img-project-wrapper",
      );
      divImgWrapper.append(divImgInner);
      divImgOuter.append(divImgWrapper);
      divWrapper.append(divInfo, divImgOuter);
      contentProjects.insertBefore(divWrapper, lastChild);

      count++;
    }
  }

  function _carouselInit() {
    const wrappers = document.querySelectorAll(".tools-wrapper-project");
    const wrappersOuter = document.querySelectorAll(
      ".tools-wrapper-outer-project",
    );

    for (let i = 0; i < length; i++) {
      const className = `tool-project-${i + 1}`;
      const length = document.querySelectorAll(`.${className}`).length;
      carousel.create(
        height,
        scale,
        wrappers[i],
        wrappersOuter[i],
        className,
        length,
        0,
      );
    }
  }

  function _createElementWithClass(tag, ...classList) {
    const element = document.createElement(tag);
    element.classList.add(...classList);
    return element;
  }

  // Project List
  function _getProjects() {
    return [
      new Project(
        "Your Personal Expense Tracker",
        "A <i>full stack</i> project that features user create, login and logout, store and display expense data and settings that allow name, password and currency change.",
        [imgYpet],
        "https://github.com/woonzf/cs50x-2023-project",
        "https://www.youtube.com/watch?v=l83kys9yJJs",
        tools.get(
          "HTML",
          "CSS",
          "JavaScript",
          "Python",
          "SQLite",
          "Flask",
          "Bootstrap",
        ),
      ),
      new Project(
        "Weather App",
        "A <i>front end</i> project that retrieves and displays user-provided location's weather info from WeatherAPI.com",
        [imgWeather, imgWeatherM],
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new Project(
        "Homepage",
        "Yes, you are viewing it! My first and current portfolio, a <i>front end</i> project that features interactive layout, responsive design and dark mode option.",
        [imgHomepage, imgHomepageM, imgHomepageD, imgHomepageMD],
        "https://github.com/woonzf/odin-homepage",
        "https://woonzf.github.io/odin-homepage/",
        tools.get("HTML", "CSS", "JavaScript", "Webpack", "Tailwind CSS"),
      ),
    ];
  }

  return { init };
})();

export { projects };
