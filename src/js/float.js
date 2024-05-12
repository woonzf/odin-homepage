const float = (() => {
  const bgHello = document.querySelector("#bg-hello");

  const heightDoc = document.body.scrollHeight;
  const heightScreen = screen.height;
  const heightScroll = heightDoc - heightScreen;

  function init() {
    document.onscroll = _floatHello;
  }

  function _floatHello() {
    const percent = _getScrollPercent() * 0.5;
    bgHello.style.transform = `translateY(-${percent}%)`;
  }

  function _getScrollPercent() {
    return (window.scrollY / heightScroll) * 100;
  }

  return { init };
})();

export { float };
