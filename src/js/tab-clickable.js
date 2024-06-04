const tabClickable = (() => {
  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contact = document.querySelector("#contact");

  function init() {
    toggle(about);
    toggle(projects);
    toggle(contact);
  }

  function toggle(tab) {
    const buttons = tab.querySelectorAll("button");
    const links = tab.querySelectorAll("a");
    const article = tab.querySelector("article");

    const clickables = [buttons, links];

    article.classList.toggle("landscape:overflow-hidden");
    clickables.forEach((clickable) => {
      clickable.forEach((el) => {
        el.classList.toggle("landscape:hidden");
      });
    });
  }

  return { init, toggle };
})();

export { tabClickable };
