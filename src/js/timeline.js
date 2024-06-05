const timeline = (() => {
  const contents = document.querySelectorAll(".timeline-content");

  function init() {
    let x = 0;
    contents.forEach((content) => {
      if (x === 0) content.classList.add("left");
      else content.classList.add("right");
      x = +!x;
    });
  }

  return { init };
})();

export { timeline };
