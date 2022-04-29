//====================================================< mzEvent
window.mzEvent = function (
  name,
  detail,
  bubbles = true,
  cancelable = false,
  composed = false
) {
  return window.dispatchEvent(
    new CustomEvent(name, {
      detail: detail,
      bubbles: bubbles,
      cancelable: cancelable,
      composed: composed,
    })
  );
};
Document.prototype.mzEvent = function (
  name,
  detail,
  bubbles = true,
  cancelable = false,
  composed = false
) {
  return this.dispatchEvent(
    new CustomEvent(name, {
      detail: detail,
      bubbles: bubbles,
      cancelable: cancelable,
      composed: composed,
    })
  );
};
HTMLElement.prototype.mzEvent = function (
  name,
  detail,
  bubbles = true,
  cancelable = false,
  composed = false
) {
  return this.dispatchEvent(
    new CustomEvent(name, {
      detail: detail,
      bubbles: bubbles,
      cancelable: cancelable,
      composed: composed,
    })
  );
};
//====================================================< mzListen
window.mzListen = function (
  event,
  callback = function () {},
  capture = false,
  once = false,
  passive = false
) {
  let controller = new AbortController();
  window.addEventListener(event, callback, {
    capture: capture,
    once: once,
    passive: passive,
    signal: controller.signal,
  });
  return controller;
};
Document.prototype.mzListen = function (
  event,
  callback = function () {},
  capture = false,
  once = false,
  passive = false
) {
  let controller = new AbortController();
  this.addEventListener(event, callback, {
    capture: capture,
    once: once,
    passive: passive,
    signal: controller.signal,
  });
  return controller;
};
HTMLElement.prototype.mzListen = function (
  event,
  callback,
  capture = false,
  once = false,
  passive = false
) {
  let controller = new AbortController();
  this.addEventListener(event, callback, {
    capture: capture,
    once: once,
    passive: passive,
    signal: controller.signal,
  });
  return controller;
};
