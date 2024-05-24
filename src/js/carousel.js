import { tools } from "./tools";

const carousel = (() => {
  const toolsWrapper = document.querySelector("#tools-wrapper");
  const toolsWrapperOuter = document.querySelector("#tools-wrapper-outer");
  const toolName = document.querySelector("#tool-name");

  const height = 60;
  const margin = 2;
  const x = height + 2 * margin;

  const toolList = tools.getList();
  const length = toolList.length;

  let tx = [];

  function init() {
    _toolAboutInit();
    _toolAboutAutoScroll();
  }

  function _toolAboutInit() {
    toolsWrapperOuter.style.width = x * (length - 2) + "px";
    toolsWrapper.style.transform = `translateX(-${x}px)`;

    for (let i = 0; i < length; i++) {
      const img = document.createElement("img");
      img.classList.add("tool-about");
      img.src = toolList[i].src;
      img.alt = toolList[i].alt;
      img.style.height = height + "px";
      img.style.margin = `0 ${margin}px`;
      toolsWrapper.append(img);
      tx[i] = 0;
    }
  }

  function _toolAboutAutoScroll() {
    const tools = document.querySelectorAll(".tool-about");
    let toBeEnd = 0;
    let mid = Math.floor(length / 2);

    if (window.innerHeight > window.innerWidth) mid += 1;
    toolName.textContent = tools[mid].alt;

    setInterval(() => {
      for (let i = 0; i < tools.length; i++) {
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

      if (mid !== length - 1) mid += 1;
      else mid = 0;

      toolName.textContent = tools[mid].alt.toUpperCase();
    }, 2000);
  }

  return { init };
})();

export { carousel };
