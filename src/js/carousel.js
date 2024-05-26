import { tools } from "./tools";

const carousel = (() => {
  const margin = 2;

  function init() {
    _initAbout();
  }

  function generateImage(list, className, height, wrapper) {
    const length = list.length;
    for (let i = 0; i < length; i++) {
      const img = document.createElement("img");
      img.classList.add(className);
      img.src = list[i].src;
      img.alt = list[i].alt;
      img.style.height = height + "px";
      img.style.margin = `0 ${margin}px`;
      wrapper.append(img);
    }
  }

  function create(height, wrapper, wrapperOuter, className, length, auto) {
    const x = height + 2 * margin;
    if (auto === 1 || wrapper.scrollWidth > wrapper.clientWidth)
      _toolAutoScroll(className, length, wrapperOuter, wrapper, x);
  }

  function _initAbout() {
    const list = tools.getList();
    const length = list.length;
    const className = "tool-about";
    const height = 50;
    const wrapper = document.querySelector("#tools-wrapper-about");
    const wrapperOuter = document.querySelector("#tools-wrapper-outer-about");
    const toolName = document.querySelector("#tool-name");

    generateImage(list, className, height, wrapper);
    create(50, wrapper, wrapperOuter, className, length, 1);
    _toolDisplayName(toolName, list);
  }

  function _toolAutoScroll(className, length, wrapperOuter, wrapper, x) {
    const tools = document.querySelectorAll(`.${className}`);
    let toBeEnd = 0;
    let tx = new Array(length).fill(0);

    wrapperOuter.style.width = x * (length - 2) + "px";
    wrapper.style.transform = `translateX(-${x}px)`;

    setInterval(() => {
      for (let i = 0; i < length; i++) {
        if (i === toBeEnd) {
          tx[i] += x * (length - 1);
          tools[i].style.opacity = 0;

          tools[i].addEventListener(
            "transitionend",
            () => {
              tools[i].style.opacity = 1;
            },
            { once: true },
          );
        } else tx[i] -= x;
        tools[i].style.transform = `translateX(${tx[i]}px)`;
      }

      if (toBeEnd !== length - 1) toBeEnd += 1;
      else toBeEnd = 0;
    }, 2000);
  }

  function _toolDisplayName(toolName, list) {
    const length = list.length;
    let mid = Math.floor(length / 2);
    toolName.textContent = list[mid].alt;

    setInterval(() => {
      if (mid !== length - 1) mid += 1;
      else mid = 0;

      toolName.textContent = list[mid].alt.toUpperCase();
    }, 2000);
  }

  return { init, generateImage, create };
})();

export { carousel };
