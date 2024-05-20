const background = (() => {
  const bgLeft = document.querySelector("#bg-left");
  const bgRight = document.querySelector("#bg-right");

  let bg = null;

  function shrink(int) {
    bg = _getBg(int);
    bg.classList.toggle("shrink");
  }

  function _getBg(int) {
    if (int === 1) return bgLeft;
    else if (int === 2) return bgRight;
  }

  return { shrink };
})();

export { background };
