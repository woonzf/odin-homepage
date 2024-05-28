import "./style.css";
import { scroll } from "./js/scroll";
import { image } from "./js/image";
import { carousel } from "./js/carousel";
import { projects } from "./js/projects";
import { menu } from "./js/menu";
import { screenOrientation } from "./js/screen-orientation";
import { darkMode } from "./js/dark-mode";

document.addEventListener("DOMContentLoaded", () => {
  scroll.init();
  image.init();
  carousel.init();
  projects.init();
  menu.init();
  screenOrientation.init();
  // darkMode.init();
});
