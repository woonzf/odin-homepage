import { menu } from "./menu";

const screenOrientation = (() => {
  function init() {
    screen.orientation.onchange = () => {
      menu.resetOnScreenChange();
    };
  }

  return { init };
})();

export { screenOrientation };
