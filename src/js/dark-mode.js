const darkMode = (() => {
  const btn = document.querySelector("#btn-dark-mode");
  const ball = document.querySelector("#dark-mode-ball");

  const body = document.querySelector("body");
  const headerWrapper = document.querySelector("#header-wrapper");

  function init() {
    _applyWidth();
    btn.onclick = _toggle;
  }

  function _applyWidth() {
    btn.style.width = btn.offsetHeight * 2 + "px";
  }

  function _toggle() {
    ball.classList.toggle("dark");
    if (ball.classList.contains("dark")) _darkMode();
    else _lightMode();
  }

  function _lightMode() {}

  function _darkMode() {}

  return { init };
})();

export { darkMode };
