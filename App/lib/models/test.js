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
  //====================================================< Number
  Number.prototype.mzRound = function (decimals = 0) {
    let val = this.valueOf();
    return +val.toFixed(decimals);
  };
  Number.prototype.mzClamp = function (min, max) {
    let val = this.valueOf();
    return Math.min(Math.max(val, min), max);
  };
  Number.prototype.mzRerange = function (oMin, oMax, nMin, nMax) {
    let val = this.valueOf();
    return ((val - oMin) / (oMax - oMin)) * (nMax - nMin) + nMin;
  };
  Number.prototype.mzPercent = function (total) {
    let val = this.valueOf();
    return (val / total) * 100;
  };
  Number.prototype.mzRiseTo = function (to, step) {
    let val = this.valueOf();
    if (val >= to) {
      val = val - step;
      if (val < to) val = to;
    } else {
      val = val + step;
      if (val > to) val = to;
    }
    return val;
  };
  Number.prototype.mzLinearTo = function (step, min, max) {
    let val = this.valueOf() + step;
    if (val < min) return min;
    if (val > max) return max;
    return val;
  };
  Number.prototype.mzFromPercent = function (percent) {
    let val = this.valueOf();
    return (percent / 100) * val;
  };
  Number.prototype.mzClampLoop = function (step, min, max) {
    let val = this.valueOf() + step;
    if (val < min) return max - (min - val);
    if (val > max) return min + (val - max);
    return val;
  };
  //====================================================< URL
  function mzGetUrlParam(key) {
    let url = window.location.href;
    let params = url.split("?");
    if (!params[1]) return null;
    params = params[1].split("&");
    for (let param of params) {
      param = param.split("=");
      if (param[0] == key) {
        if (!param[1]) return null;
        if (decodeURI(param[1]) !== decodeURIComponent(param[1]))
          return decodeURIComponent(param[1]);
        return param[1];
      }
    }
    return null;
  }
  function mzSetUrlParam(key, value) {
    let url = window.location.href;
    let params = {};
    let urlParams = url.split("?");
    if (urlParams[1]) {
      urlParams[1] = urlParams[1].split("&");
      for (let p of urlParams[1]) {
        p = p.split("=");
        params[p[0]] = p[1];
      }
    }
    params[key] = encodeURIComponent(value);
    let pp = "";
    for (let key in params)
      if (key && params[key]) pp += key + "=" + params[key] + "&";
    window.history.replaceState(null, null, urlParams[0] + "?" + pp);
  }
  //====================================================< Cookies
  
  //====================================================< Storage
  
  //====================================================< form
  (function () {
    function loadHandler(evt) {
      document.querySelectorAll(".mzInput *").forEach((el) => check(el));
    }
  
    function changeHandler(evt) {
      var el = evt.target;
      if (el.matches(".mzInput *")) check(el);
    }
  
    function check(el) {
      var label = el.getAttribute("placeholder") || "";
      var error = el.validationMessage || "";
      var value = el.value;
      var parent = el.parentNode;
  
      //checkbox and radiobox
      if (
        el.matches('input[type="checkbox"]') ||
        el.matches('input[type="radio"]')
      ) {
        label = "";
        if (!el.checked) value = "";
      }
  
      //range
      if (el.matches('input[type="range"]')) {
        el.dataset.mzValue = value;
        el.style["background-size"] =
          parseFloat(el.value)
            .mzRerange(el.min || 0, el.max || 100, 1, 100)
            .mzRound(2) + "% 100%";
      }
  
      //all
      if (!el.dataset.mzLabel) el.dataset.mzLabel = label;
      el.dataset.mzError = error;
      el.dataset.mzValue = value;
    }
  
    window.mzListen("load", loadHandler);
    document.mzListen("mzForm", loadHandler);
    document.mzListen("change", changeHandler);
    document.mzListen("input", changeHandler);
    document.mzListen("mzInput", changeHandler);
  })();
  //====================================================< Page
  (function () {
    let HTML;
    let MODAL;
  
    // Data
    function loadHandler() {
      HTML = document.querySelector("html");
      MODAL = document.querySelector(".mzModals");
    }
    window.mzListen("load", loadHandler);
  
    // Modals
    function mzModalsShowHandler(evt) {
      if (MODAL && evt.detail) {
        MODAL.querySelectorAll(".mzModal").forEach((el) =>
          el.classList.remove("visible")
        );
        let M = MODAL.querySelector(".mzModal[data-modal='" + evt.detail + "']");
        if (M) {
          M.classList.add("visible");
          if (HTML) HTML.classList.add("mzModalsVisible");
        }
      }
    }
    function mzModalsHideHandler(evt) {
      if (MODAL) {
        MODAL.querySelectorAll(".mzModal").forEach((el) =>
          el.classList.remove("visible")
        );
      }
      if (HTML) HTML.classList.remove("mzModalsVisible");
    }
    document.mzListen("mzModalsShow", mzModalsShowHandler);
    document.mzListen("mzModalsHide", mzModalsHideHandler);
  })();
  //====================================================< loading
  (function () {
    var html;
    var loadingElement;
  
    function loadHandler(evt) {
      html = document.querySelector("html");
      loadingElement = document.createElement("div");
      loadingElement.setAttribute("id", "mzLoading");
    }
  
    function showHandler(evt) {
      var loading = document.getElementById("mzLoading");
      html.classList.add("mzLoading");
      if (!loading) document.body.appendChild(loadingElement);
    }
  
    function hideHandler(evt) {
      var loading = document.getElementById("mzLoading");
      html.classList.remove("mzLoading");
      if (loading) loading.remove();
    }
  
    window.mzListen("load", loadHandler);
    document.mzListen("mzLoadingShow", showHandler);
    document.mzListen("mzLoadingHide", hideHandler);
  })();
  //====================================================< XHR
  class mzXHR {
    //
    request = new XMLHttpRequest();
    requestMethod = null;
    requestURL = null;
    requestHeaders = null;
    requestURLData = null;
    requestBodyData = null;
    requestResponseType = null;
    //
    callback = null;
    //
    httpCode = null;
    state = null;
    stateText = null;
    error = null;
    bodyText = null;
    bodyJson = null;
    //
    upload = {
      total: 0,
      loaded: 0,
      time: 0,
      duration: 0,
      percentage: 0,
      speed: 0,
      estimate: 0,
    };
    //
    constructor({
      requestMethod = null,
      requestURL = null,
      requestHeaders = null,
      requestURLData = null,
      requestBodyData = null,
      requestResponseType = null,
      callback = null,
    }) {
      this.requestMethod = requestMethod;
      this.requestURL = requestURL;
      this.requestHeaders = requestHeaders;
      this.requestURLData = requestURLData;
      this.requestBodyData = requestBodyData;
      this.requestResponseType = requestResponseType;
      this.callback = callback;
      //
      this.requestURLDataParse();
      // setState
      this.setState(0, null);
    }
  
    async send() {
      return await new Promise((resolve) => {
        try {
          // request
          // response type
          if (this.requestResponseType)
            this.request.responseType = this.requestResponseType;
          // this.request.timeout = 4000;
          this.request.open(
            this.requestMethod,
            this.requestURL,
            true,
            this.requestUsername,
            this.requestPassword
          );
          // headers
          if (!this.requestHeaders) this.requestHeaders = {};
          this.requestHeaders["User-Timezone"] = -new Date().getTimezoneOffset();
          for (let key in this.requestHeaders)
            this.request.setRequestHeader(key, this.requestHeaders[key]);
          // onloadstart
          this.request.onloadstart = (event) => this.setState(1, null);
          // upload onloadstart
          this.request.upload.onloadstart = (event) => {
            //
            this.upload.start = Date.now();
            this.upload.total = event.total;
            this.upload.loaded = event.loaded;
            this.uploadCalc();
            //
            this.setState(2, null);
            //
          };
          // upload onprogress
          this.request.upload.onprogress = (event) => {
            //
            this.upload.loaded = event.loaded;
            this.uploadCalc();
            //
            this.setState(2, null);
            //
          };
          // upload onload
          this.request.upload.onload = (event) => {
            //
            this.upload.loaded = event.loaded;
            this.uploadCalc();
            //
            this.setState(3, null);
            //
          };
          // onprogress
          this.request.onprogress = (event) => {
            this.setState(3, null);
          };
          // onload
          this.request.onload = (event) => {
            //
            try {
              this.bodyText = this.request.response;
              this.bodyJson = JSON.parse(this.bodyText);
            } catch (e) {}
            //
            this.setState(4, null), resolve(this);
          };
          // ontimeout
          this.request.ontimeout = (event) => {
            this.setState(5, "timeout"), resolve(this);
          };
          // onabort
          this.request.onabort = (event) => {
            this.setState(5, "aborted"), resolve(this);
          };
          // onerror
          this.request.onerror = (event) => {
            this.setState(5, "failed"), resolve(this);
          };
          // send
          this.request.send(this.requestBodyData);
          //
        } catch (e) {
          this.setState(5, e);
        }
      });
    }
  
    uploadCalc() {
      this.upload.duration = Date.now() - this.upload.start;
      if (this.state > 2) {
        this.upload.speed = 0;
        this.upload.estimate = 0;
      } else {
        this.upload.percentage = (
          (this.upload.loaded / this.upload.total) *
          100
        ).mzRound(2);
        this.upload.speed = (this.upload.loaded / this.upload.duration).mzRound(
          2
        );
        this.upload.estimate = (
          (this.upload.total - this.upload.loaded) /
          this.upload.speed
        ).mzRound(2);
      }
    }
  
    setState(id, error = null) {
      const STATES = {
        0: "unsent",
        1: "started",
        2: "uploading",
        3: "processing",
        4: "completed",
        5: "failed",
      };
      //
      this.httpCode = this.request.status;
      this.state = id;
      this.stateText = STATES[id];
      this.error = error;
      //
      if (this.callback) this.callback(this);
    }
  
    requestURLDataParse() {
      if (!this.requestURLData) this.requestURLData = {};
      let query = "?";
      for (let key in this.requestURLData)
        query += `${encodeURIComponent(key)}=${encodeURIComponent(
          this.requestURLData[key]
        )}&`;
      this.requestURL += query;
    }
  }
  //====================================================< Check
  (function () {
    function loadHandler(evt) {
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((el) => check(el));
    }
  
    function changeHandler(evt) {
      var el = evt.target;
      if (el.matches(".mzInput *")) check(el);
    }
  
    function check(el) {
      var label = el.getAttribute("placeholder") || "";
      var error = el.validationMessage || "";
      var value = el.value;
      var parent = el.parentNode;
  
      //checkbox and radiobox
      if (
        el.matches('input[type="checkbox"]') ||
        el.matches('input[type="radio"]')
      ) {
        label = "";
        if (!el.checked) value = "";
      }
  
      //range
      if (el.matches('input[type="range"]')) {
        el.dataset.mzValue = value;
        el.style["background-size"] =
          parseFloat(el.value)
            .mzRerange(el.min || 0, el.max || 100, 1, 100)
            .mzRound(2) + "% 100%";
      }
  
      //all
      if (!el.dataset.mzLabel) el.dataset.mzLabel = label;
      el.dataset.mzError = error;
      el.dataset.mzValue = value;
    }
  
    window.mzListen("load", loadHandler);
    document.mzListen("mzForm", loadHandler);
    document.mzListen("change", changeHandler);
    document.mzListen("input", changeHandler);
    document.mzListen("mzInput", changeHandler);
  })();