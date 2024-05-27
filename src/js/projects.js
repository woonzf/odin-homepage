import Project from "./class-Project";
import { tools } from "./tools";
import { carousel } from "./carousel";
import { scroll } from "./scroll";

import imgOpen from "../img/icons/open-24w.png";
import imgYpetD from "../img/projects/ypet-d-450w.png";
import imgWeatherD from "../img/projects/weather-d-450w.png";
import imgHomeD from "../img/projects/homepage-d-450w.png";

const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  const projects = document.querySelector("#article-projects");
  const projectList = _getProjects();
  const length = projectList.length;

  function init() {
    _generateProjects();
    _carouselInit();
    scroll.float(document.querySelector(".index-project"), projects);
  }

  function _generateProjects() {
    let count = 1;

    for (const project of projectList) {
      const divWrapper = _createElementWithClass(
        "div",
        "content-wrapper-project",
      );
      const divIndex = _createElementWithClass("div", "index-project-wrapper");
      const index = _createElementWithClass(
        "span",
        "index-project",
        "absolute",
        "montserrat",
      );
      const divInfo = _createElementWithClass(
        "div",
        "info-project",
        "relative",
      );
      const title = _createElementWithClass("h3", "z-[1]", "montserrat");
      const span = _createElementWithClass("span", "text-theme");
      const divDesc = _createElementWithClass("p");
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
      );
      const spanRepo = _createElementWithClass("span");
      const spanDemo = spanRepo.cloneNode(false);
      const divImg = _createElementWithClass("div", "img-project-wrapper");

      const img = _createElementWithClass("img");
      const imgMirror = img.cloneNode(false);

      if (count % 2 === 0) {
        img.classList.add("img-project-even");
        imgMirror.classList.add("img-project-mirror-even");
        divWrapper.classList.add("landscape:flex-row-reverse");
      } else {
        img.classList.add("img-project");
        imgMirror.classList.add("img-project-mirror");
      }

      index.textContent = count;
      divIndex.append(index);
      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.textContent = project.desc;

      carousel.generateImage(
        project.tools,
        `tool-project-${count}`,
        40,
        wrapperTool,
      );

      wrapperToolOuter.append(wrapperTool);
      divTools.append(wrapperToolOuter);

      aRepo.target = "_blank";
      aRepo.rel = "noreferrer";
      const aDemo = aRepo.cloneNode(false);
      aRepo.href = project.repo;
      spanRepo.textContent = "GITHUB";
      aDemo.href = project.demo;
      spanDemo.textContent = "DEMO";

      const imgLink = _createElementWithClass("img", "aspect-square");
      imgLink.src = imgOpen;
      const imgLink2 = imgLink.cloneNode(false);

      aRepo.append(spanRepo, imgLink);
      aDemo.append(spanDemo, imgLink2);
      divLinks.append(aRepo, aDemo);
      divInfo.append(divIndex, title, divDesc, divTools, divLinks);

      img.src = project.img;
      imgMirror.src = project.img;
      divImg.append(img, imgMirror);

      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);

      if (count === length)
        divWrapper.classList.add("landscape:overflow-y-clip");

      count++;
    }
  }

  function _carouselInit() {
    const wrappers = document.querySelectorAll(".tools-wrapper-project");
    const wrappersOuter = document.querySelectorAll(
      ".tools-wrapper-outer-project",
    );
    const infos = document.querySelectorAll(".info-project");

    for (let i = 0; i < length; i++) {
      const className = `tool-project-${i + 1}`;
      const length = document.querySelectorAll(`.${className}`).length;
      carousel.create(
        40,
        wrappers[i],
        wrappersOuter[i],
        className,
        length,
        infos[i],
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
        "A web application that allows you to track your expenses.",
        imgYpetD,
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
        "A weather application using Weather API.",
        imgWeatherD,
        "https://github.com/woonzf/odin-weather-app",
        "https://woonzf.github.io/odin-weather-app/",
        tools.get("HTML", "CSS", "JavaScript", "Webpack"),
      ),
      new Project(
        "Homepage",
        "My first portfolio website, I am featuring it for the amount of effort I've put into it.",
        imgHomeD,
        "https://github.com/woonzf/odin-homepage",
        "https://woonzf.github.io/odin-homepage/",
        tools.get("HTML", "CSS", "JavaScript", "Webpack", "Tailwind CSS"),
      ),
    ];
  }

  return { init };
})();

export { projects };
