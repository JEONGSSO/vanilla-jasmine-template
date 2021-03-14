var App = (function () {
  const qs = (selector, parent = document) => parent.querySelector(selector);
  const qsa = (selector, parent = document) =>
    parent.querySelectorAll(selector);

  return {
    qs,
    qsa,
  };
})();
