const timeline = (() => {
  const contents = document.querySelectorAll(".timeline-content");
  const timeline = document.querySelector("#timeline");
  const btnTimelineToggle = document.querySelector("#btn-timeline-toggle");

  const fullHeight = timeline.clientHeight;
  const halfScreen = window.innerHeight * 0.5;

  function init() {
    _alignTimeline();
    _checkTimelineHeight();
    _initBtnToggle();
  }

  function _alignTimeline() {
    let x = 0;
    contents.forEach((content) => {
      if (x === 0) content.classList.add("left");
      else content.classList.add("right");
      x = +!x;
    });
  }

  function _checkTimelineHeight() {
    if (timeline.clientHeight > halfScreen) {
      timeline.style.height = halfScreen + "px";
      timeline.classList.toggle("less");
      btnTimelineToggle.classList.toggle("hidden");
    }
  }

  function _initBtnToggle() {
    btnTimelineToggle.onclick = () => {
      timeline.classList.toggle("less");
      if (timeline.classList.contains("less")) {
        btnTimelineToggle.textContent = "SHOW ALL";
        timeline.style.height = halfScreen + "px";
      } else {
        btnTimelineToggle.textContent = "SHOW LESS";
        timeline.style.height = fullHeight + "px";
      }
    };
  }

  return { init };
})();

export { timeline };
