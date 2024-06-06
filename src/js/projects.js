import Project from "./class-Project";
import { tools } from "./tools";
import { carousel } from "./carousel";
import { image } from "./image";

import imgYpetD from "../img/projects/ypet-d-450w.png";
import imgWeatherD from "../img/projects/weather-d-450w.png";
import imgWeatherM from "../img/projects/weather-m-200w.jpg";
import imgHomeD from "../img/projects/homepage-d-450w.png";

const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
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
      const spanRepo = _createElementWithClass("span");
      const spanDemo = spanRepo.cloneNode(false);
      const divImg = _createElementWithClass("div", "img-project-wrapper");
      const divImgInner = _createElementWithClass("div");
      const img = _createElementWithClass("img");
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
        "h-[24px]",
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

      // Disable for project Homepage
      if (project.name === "Homepage") {
        aDemo.classList.add("disabled");
        aDemo.textContent = "VIEWING";
      } else aDemo.append(spanDemo, linkWrapper2);

      divLinks.append(aRepo, aDemo);
      divInfo.append(divIndex, title, divDesc, divTools, divLinks);

      // Project Image
      img.src = project.img[0];
      divImgInner.append(img);

      if (project.img.length > 1) {
        img2.src = project.img[1];
        divImgInner.append(img2);
      }

      const divImgInnerMirror = divImgInner.cloneNode(true);

      if (count % 2 === 0) {
        divImgInner.classList.add("img-project-even");
        divImgInnerMirror.classList.add("img-project-mirror-even");
        divWrapper.classList.add("landscape:flex-row-reverse");
      } else {
        divImgInner.classList.add("img-project");
        divImgInnerMirror.classList.add("img-project-mirror");
      }

      const divImgInnerWrapper = _createElementWithClass(
        "div",
        "img-project-inner-wrapper",
      );
      divImgInnerWrapper.append(divImgInner, divImgInnerMirror);
      divImg.append(divImgInnerWrapper);
      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);

      // Divider
      const divider = _createElementWithClass("div", "divider-theme");
      divInfo.append(divider);

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
        "A <i>full stack</i> project that features user create/login/logout, store/display expense data and settings that allow name, password and currency change.",
        [imgYpetD],
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
        [imgWeatherD, imgWeatherM],
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new Project(
        "Homepage",
        "Yes, you are viewing it! My first and current portfolio, a <i>front end</i> project that features interactive layout, responsive design and dark mode option.",
        [imgHomeD],
        "https://github.com/woonzf/odin-homepage",
        "https://woonzf.github.io/odin-homepage/",
        tools.get("HTML", "CSS", "JavaScript", "Webpack", "Tailwind CSS"),
      ),
    ];
  }

  return { init };
})();

export { projects };
