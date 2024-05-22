const carousel = (() => {
  const toolsWrapper = document.querySelector("#tools-wrapper");
  const toolsWrapperOuter = document.querySelector("#tools-wrapper-outer");
  const tools = document.querySelectorAll(".tools");

  const height = 60;
  const margin = 4;
  const x = height + margin;
  const length = tools.length;

  let tx = [];

  function init() {
    toolsWrapperOuter.style.width = x * (length - 2) + "px";
    toolsWrapper.style.transform = `translateX(-${x}px)`;
    for (let i = 0; i < length; i++) {
      tools[i].style.height = height + "px";
      tools[i].style.marginRight = margin + "px";
      tools[i].ontransitionend = () => {
        tools[i].style.opacity = 1;
      };
      tx[i] = 0;
    }
    _toolsAutoScroll();
  }

  function _toolsAutoScroll() {
    let toBeEnd = 0;
    setInterval(() => {
      for (let i = 0; i < tools.length; i++) {
        if (i === toBeEnd) {
          tx[i] += x * (length - 1);
          tools[i].style.opacity = 0;
          tools[i].style.transform = `translateX(${tx[i]}px)`;
        } else {
          tx[i] -= x;
          tools[i].style.transform = `translateX(${tx[i]}px)`;
        }
      }
      if (toBeEnd !== length - 1) toBeEnd += 1;
      else toBeEnd = 0;
    }, 2000);
  }

  return { init };
})();

export { carousel };
