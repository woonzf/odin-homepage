import Project from "./class-Project";
import { tools } from "./tools";
import { carousel } from "./carousel";

import imgOpen from "../img/icons/open-24w.png";
import imgYpetD from "../img/projects/ypet-d-900w.png";

const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  let projectList = _getProjects();

  function init() {
    _generateProjects();
  }

  function _generateProjects() {
    let count = 0;

    for (const project of projectList) {
      const divWrapper = _createElementWithClass(
        "div",
        "content-wrapper-project",
      );
      const divInfo = _createElementWithClass("div", "info-project");
      const title = _createElementWithClass("h3", "montserrat");
      const span = _createElementWithClass("span", "text-theme");
      const divDesc = _createElementWithClass("p");
      const divTools = _createElementWithClass(
        "div",
        "flex",
        "items-center",
        "overflow-x-hidden",
      );
      const wrapperToolOuter = _createElementWithClass(
        "div",
        "overflow-x-hidden",
      );
      const wrapperTool = _createElementWithClass(
        "div",
        "flex",
        "items-center",
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
      const aDemo = aRepo.cloneNode(false);
      const spanRepo = _createElementWithClass("span");
      const spanDemo = spanRepo.cloneNode(false);
      const divImg = _createElementWithClass("div", "img-project-wrapper");
      const img = _createElementWithClass("img", "img-project");
      const imgMirror = _createElementWithClass("img", "img-project-mirror");

      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.textContent = project.desc;

      wrapperToolOuter.append(wrapperTool);
      divTools.append(wrapperToolOuter);

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
      divInfo.append(title, divDesc, divTools, divLinks);

      img.src = project.img;
      imgMirror.src = project.img;
      divImg.append(img, imgMirror);

      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);

      carousel.create(
        wrapperTool,
        wrapperToolOuter,
        project.tools,
        `.tool-project-${count}`,
      );

      count++;
    }
  }

  function _getProjects() {
    return [
      new Project(
        "Your Personal Expense Tracker",
        "An web application that allows you to track your expenses.",
        imgYpetD,
        "",
        "",
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
    ];
  }

  function _createElementWithClass(tag, ...classList) {
    const element = document.createElement(tag);
    element.classList.add(...classList);
    return element;
  }

  return { init };
})();

export { projects };
