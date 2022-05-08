//========================== mzEvent
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
Document.prototype.mzEvent = HTMLElement.prototype.mzEvent = function (
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
//========================== mzListen
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
Document.prototype.mzListen = HTMLElement.prototype.mzListen = function (
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
//========================== mzFind
Document.prototype.mzFindParent = HTMLElement.prototype.mzFindParent =
  function (parent) {
    while (this.parentNode) {
      if (this.parentNode.matches(parent)) return this.parentNode;
      else return this.parentNode.mzFindParent(parent);
    }
    return null;
  };
//========================== mzGenerate
Array.prototype.mzGenerate = function (callback = (i, val) => null) {
  let list = [];
  for (let i = 0; i < this.length; i++) {
    list.push(callback(i, this[i]));
  }
  return list;
};
//========================== mzMath
Number.prototype.mzClamp = function (min = 0, max = 0) {
  return Math.min(max, Math.max(this.valueOf(), min));
};

Number.prototype.mzPercentage = function (min = 0, max = 0, percent = 100) {
  return ((this.valueOf() - min) / max) * percent;
};

Number.prototype.mzFromPercentage = function (min = 0, max = 0, percent = 100) {
  return (max - min) * (this.valueOf() / percent);
};

Number.prototype.mzRound = function (decimals = 0) {
  return +this.valueOf().toFixed(decimals);
};

//========================== Event Listners
/*
(function () {
  function mzFormField(evt, target) {
    document.querySelectorAll("mzformfield input").forEach((el) => {
      //focus
      if (document.activeElement == el) el.parentNode.classList.add("focus");
      else el.parentNode.classList.remove("focus");
      //value
      if (el.value) el.parentNode.classList.add("value");
      else el.parentNode.classList.remove("value");
      //error
      if (el.getAttribute("error")) el.parentNode.classList.add("error");
      else el.parentNode.classList.remove("error");
    });
  }

  function mzFormSelect(evt, target) {
    document
      .querySelectorAll("mzformselect mzselectvalue")
      .forEach((el) => {
        //focus
        if (document.activeElement == el) el.parentNode.classList.add("focus");
        else el.parentNode.classList.remove("focus");
        //value
        if (el.getAttribute("value")) el.parentNode.classList.add("value");
        else el.parentNode.classList.remove("value");
        //error
        if (el.getAttribute("error")) el.parentNode.classList.add("error");
        else el.parentNode.classList.remove("error");
        //options
        if (
          target &&
          (el == target ||
            target.matches("mzformselect mzselectvalue *"))
        ) {
          el.parentNode.classList.add("options");
        } else {
          el.parentNode.classList.remove("options");
        }
      });
  }

  document.mzListen(
    "focus",
    (evt) => {
      mzFormField(evt, evt.target);
      mzFormSelect(evt, evt.target);
    },
    true
  );

  document.mzListen(
    "blur",
    (evt) => {
      mzFormField(evt, evt.target);
      mzFormSelect(evt, evt.target);
    },
    true
  );

  document.mzListen(
    "change",
    (evt) => {
      mzFormField(evt, evt.target);
      mzFormSelect(evt, evt.target);
    },
    true
  );

  document.mzListen(
    "click",
    (evt) => {
      mzFormField(evt, evt.target);
      mzFormSelect(evt, evt.target);
    },
    true
  );

  document.mzListen(
    "mzsetup",
    (evt) => {
      mzFormField();
      mzFormSelect();
    },
    true
  );
})();*/
//========================== mzXhr
class mzXhr {
  //
  request = new XMLHttpRequest();
  requestMethod = null;
  requestURL = null;
  requestHeaders = null;
  requestURLData = null;
  requestBodyData = null;
  requestResponseType = null;
  onStateChange = null;
  //
  httpCode = null;
  state = null;
  stateText = null;
  error = null;
  message = null;
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
    onStateChange = null,
  }) {
    this.requestMethod = requestMethod;
    this.requestURL = requestURL;
    this.requestHeaders = requestHeaders;
    this.requestURLData = requestURLData;
    this.requestBodyData = requestBodyData;
    this.requestResponseType = requestResponseType;
    this.onStateChange = onStateChange;
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
          this.upload.start = Date.now();
          this.upload.total = event.total;
          this.upload.loaded = event.loaded;
          this.uploadCalc();
          this.setState(2, null);
        };
        // upload onprogress
        this.request.upload.onprogress = (event) => {
          this.upload.loaded = event.loaded;
          this.uploadCalc();
          this.setState(2, null);
        };
        // upload onload
        this.request.upload.onload = (event) => {
          this.upload.loaded = event.loaded;
          this.uploadCalc();
          this.setState(3, null);
        };
        // onprogress
        this.request.onprogress = (event) => {
          this.setState(3, null);
        };
        // onload
        this.request.onload = (event) => {
          try {
            this.bodyText = this.request.response;
            this.bodyJson = JSON.parse(this.bodyText);
          } catch (e) {}
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
    if (this.onStateChange) this.onStateChange(this);
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
//========================== mzValidators
class mzValidators {
  static notEmpty() {
    return (value) => {
      if (!value) return "value cannot be empty";
      return null;
    };
  }

  static email(required = false, min = null, max = null) {
    return (value) => {
      if (!required && !value) return null;
      if (required && !value) return "value cannot be empty";

      if (
        !value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
        return "Invalid value";

      return null;
    };
  }
}
