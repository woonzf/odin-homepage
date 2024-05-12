const float = (() => {
  const bgHello = document.querySelector("#bg-hello");

  const heightDoc = document.body.scrollHeight;
  const heightScreen = screen.height;
  const heightScroll = heightDoc - heightScreen;

  function init() {
    document.onscroll = _floatHello;
  }

  function _floatHello() {
    let percentage = (window.scrollY / heightScroll) * 100;
    bgHello.style.transform = `translateY(-${percentage}%)`;
    console.log(percentage);
  }

  return { init };
})();

export { float };
