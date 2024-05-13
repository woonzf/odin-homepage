const darkMode = (() => {
  const btn = document.querySelector("#btn-dark-mode");
  const ball = document.querySelector("#dark-mode-ball");
  const html = document.documentElement;

  function init() {
    _detectDarkMode();
    btn.onclick = _toggle;
  }

  function _detectDarkMode() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      _toggle();
    }
  }

  function _toggle() {
    ball.classList.toggle("dark");
    html.classList.toggle("dark");
  }

  return { init };
})();

export { darkMode };
