import { tools } from "./tools";

const carousel = (() => {
  const toolsWrapperOuterAbout = document.querySelector(
    "#tools-wrapper-outer-about",
  );
  const toolsWrapperAbout = document.querySelector("#tools-wrapper-about");
  const toolName = document.querySelector("#tool-name");

  const height = 50;
  const margin = 2;
  const x = height + 2 * margin;

  function init() {
    const listAbout = tools.getList();
    create(toolsWrapperAbout, toolsWrapperOuterAbout, listAbout, ".tool-about");
    _toolDisplayName(toolName, listAbout);
  }

  function create(wrapper, wrapperOuter, list, className) {
    const length = list.length;
    _toolInit(wrapper, wrapperOuter, list, length, className);
    _toolAutoScroll(length, className);
  }

  function _toolInit(wrapper, wrapperOuter, list, length, className) {
    wrapperOuter.style.width = x * (length - 2) + "px";
    wrapper.style.transform = `translateX(-${x}px)`;

    for (let i = 0; i < length; i++) {
      const img = document.createElement("img");
      img.classList.add(className.substring(1));
      img.src = list[i].src;
      img.alt = list[i].alt;
      img.style.height = height + "px";
      img.style.margin = `0 ${margin}px`;
      wrapper.append(img);
    }
  }

  function _toolAutoScroll(length, className) {
    console.log(className);
    const tools = document.querySelectorAll(className);
    let toBeEnd = 0;
    let tx = new Array(length).fill(0);

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

  return { init, create };
})();

export { carousel };
