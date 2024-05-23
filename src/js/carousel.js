const carousel = (() => {
  const toolsWrapper = document.querySelector("#tools-wrapper");
  const toolsWrapperOuter = document.querySelector("#tools-wrapper-outer");
  const tools = document.querySelectorAll(".tools");
  const toolName = document.querySelector("#tool-name");

  const height = 60;
  const margin = 2;
  const x = height + 2 * margin;
  const length = tools.length;

  let tx = [];

  function init() {
    toolsWrapperOuter.style.width = x * (length - 2) + "px";
    toolsWrapper.style.transform = `translateX(-${x}px)`;

    for (let i = 0; i < length; i++) {
      tools[i].style.height = height + "px";
      tools[i].style.margin = `0 ${margin}px`;
      tx[i] = 0;
    }

    _toolsAutoScroll();
  }

  function _toolsAutoScroll() {
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
