import { menu } from "./menu";
import { scroll } from "./scroll";

const screenOrientation = (() => {
  let elementProjects = null;
  let sectionProjects = null;

  function init() {
    screen.orientation.onchange = () => {
      menu.resetOnScreenChange();
      scroll.refloatIndexProjects(elementProjects, sectionProjects);
    };
  }

  function setIndexProjects(element, section) {
    elementProjects = element;
    sectionProjects = section;
  }

  return { init, setIndexProjects };
})();

export { screenOrientation };
