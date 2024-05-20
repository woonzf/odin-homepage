const scroll = (() => {
  const bg = document.querySelector("#bg");
  const bgLeft = document.querySelector("#bg-left");

  const heightDoc = document.body.scrollHeight;
  const heightScreen = screen.height;
  const heightScroll = heightDoc - heightScreen;

  let shrink = 0;

  function init() {
    if (window.innerHeight > window.innerWidth) {
      bg.style.height = heightDoc + "px";
      _shrinkBgLeft();
    }
  }

  function _shrinkBgLeft() {
    const threshold = 56;
    document.onscroll = () => {
      if (window.scrollY > threshold && shrink === 0) {
        bgLeft.classList.toggle("shrink");
        shrink = 1;
      } else if (window.scrollY < threshold && shrink === 1) {
        bgLeft.classList.toggle("shrink");
        shrink = 0;
      }
    };
  }

  // function _floatHello() {
  //   const percent = _getScrollPercent() * 0.5;
  //   x.style.transform = `translateY(-${percent}%)`;
  //   y.style.transform = `translateY(-${percent * 1.5}%)`;
  // }

  function _getScrollPercent() {
    return (window.scrollY / heightScroll) * 100;
  }

  return { init };
})();

export { scroll };
