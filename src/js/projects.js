import Project from "./class-Project";
import { tools } from "./tools";

import imgYpetD from "../img/projects/ypet-d-900w.png";

const projects = (() => {
  const contentProjects = document.querySelector("#content-projects");
  let projectList = _getProjects();

  function init() {
    for (const project of projectList) {
      const divWrapper = _createElementWithClass(
        "div",
        "content-wrapper-project",
      );
      const divInfo = _createElementWithClass("div", "info-project");
      const title = _createElementWithClass("h3", "montserrat");
      const span = _createElementWithClass("span", "text-theme");
      const divDesc = _createElementWithClass("p");
      const divTools = _createElementWithClass("div", "flex");
      const divLinks = _createElementWithClass(
        "div",
        "flex",
        "justify-evenly",
        "items-center",
      );
      const aRepo = _createElementWithClass("a", "montserrat");
      const aDemo = _createElementWithClass("a", "montserrat");
      const divImg = _createElementWithClass("div", "w-full", "relative");
      const img = _createElementWithClass(
        "img",
        "relative",
        "-translate-x-3",
        "translate-y-3",
        "z-[1]",
      );
      const divBorder = _createElementWithClass("div", "border-img");

      title.textContent = project.name;
      span.textContent = ".";
      title.append(span);
      divDesc.textContent = project.desc;

      for (const tool of project.tools) {
        const img = _createElementWithClass("img", "tool-project");
        img.src = tool.src;
        img.alt = tool.alt;
        divTools.append(img);
      }

      aRepo.href = project.repo;
      aRepo.textContent = "GitHub";
      aDemo.href = project.demo;
      aDemo.textContent = "Demo";
      divLinks.append(aRepo, aDemo);
      divInfo.append(title, divDesc, divTools, divLinks);

      img.src = project.img;
      divBorder.style.aspectRatio = img.width / img.height;
      divImg.append(img, divBorder);

      divWrapper.append(divInfo, divImg);
      contentProjects.append(divWrapper);
    }
  }

  function _getProjects() {
    return [
      new Project(
        "Your Personal Finance Tracker",
        "An web application that allows you to track your expenses.",
        imgYpetD,
        "",
        "",
        tools.get("HTML"),
        tools.get("CSS"),
        tools.get("JavaScript"),
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
