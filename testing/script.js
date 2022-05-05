document.addEventListener("click", (evt) => {
  let el = evt.target;
  document
    .querySelectorAll(".focus")
    .forEach((el) => el.classList.remove("focus"));
  if (el.matches("mzfield mzvalue") || el.matches("mzfield mzvalue *")) {
    el.mzFindParent("mzfield").classList.add("focus");
  }
});

Document.prototype.mzFindParent = HTMLElement.prototype.mzFindParent =
  function (parent) {
    while (this.parentNode) {
      if (this.parentNode.matches(parent)) return this.parentNode;
      else return this.parentNode.mzFindParent(parent);
    }
    return null;
  };
