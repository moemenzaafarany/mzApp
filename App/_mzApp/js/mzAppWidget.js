//====================================================
//========================== mzAppWidget
class mzAppWidget {
  element = document.createElement("mzapp-widget");
  defaultStyling = [];
  children = [];
  classes = [];
  styles = {};
  attributes = {};
  nodeAttrs = {};
  styling = [];
  data = {};
  //
  constructor() {}
  //
  build() {}
  //
  state() {
    if (this.element.matches("mzapp-widget")) {
      this.children = [this.build()];
    }
    this.render();
    return this.element;
  }
  //
  setState() {
    //this.children.forEach((child) => child.setState());
    return this.state();
  }
  //
  render() {
    this.element.innerHTML = "";
    this.element.removeAttribute("class");
    this.element.removeAttribute("style");
    // children
    if (this.children) {
      for (let value of this.children) {
        if (value) {
          if (value instanceof mzAppWidget) this.element.append(value.state());
          else this.element.append(value);
        }
      }
    }
    // classes
    for (let value of this.classes) {
      if (value) this.element.classList.add(value);
    }
    // styles
    for (let key in this.styles) {
      if (key) this.element.style[key] = this.styles[key];
    }
    // styles
    this.defaultStyling.forEach((s) => {
      if (this.styling.findIndex((e) => e.constructor == s.constructor) == -1)
        this.styling.push(s);
    });
    for (let style of this.styling) {
      if (style instanceof mzAppUI) style.set(this.element);
    }
    // attributes
    for (let attr in this.attributes) {
      this.element.setAttribute(attr, this.attributes[attr]);
    }
    // node attributes
    for (let attr in this.nodeAttrs) {
      this.element[attr] = this.nodeAttrs[attr];
    }
  }
}
//====================================================
class mzRoot extends mzAppWidget {
  element = document.createElement("mzapp-root");
  //
  constructor({ child = null, styling = [] }) {
    super();
    this.children = [child];
    this.styling = styling;
  }
}
//====================================================
//========================== Scaffold
class mzScaffold extends mzAppWidget {
  element = document.createElement("mzapp-scaffold");
  //
  constructor({
    appBar = null,
    bottomBar = null,
    drawer = null,
    body = null,
    styling = [],
  }) {
    super();
    this.defaultStyling = [new mzColor(null, mzColor.from("#eee"))];
    this.children = [appBar, bottomBar, drawer, body];
    this.styling = styling;
  }
}
//========================== Container
class mzContainer extends mzAppWidget {
  element = document.createElement("mzapp-container");
  //
  constructor({ child = null, styling = [] }) {
    super();
    this.defaultStyling = [
      new mzShadow(1),
      new mzColor(null, mzColor.colors.White),
    ];
    this.children = [child];
    this.styling = styling;
  }
}
//========================== Flex
class mzFlex extends mzAppWidget {
  static type = { row: "row", column: "column" };
  //
  element = document.createElement("mzapp-flex");
  //
  constructor({
    children = null,
    type = mzFlex.type.row,
    mainAlignment = null,
    crossAlignment = null,
    shrink = false,
    wrap = false,
    styling = [],
  }) {
    super();
    this.defaultStyling.push(new mzFlexAlign(mainAlignment, crossAlignment));
    this.children = children;
    this.classes = [type, shrink ? "shrink" : "", wrap ? "wrap" : ""];
    this.styling = styling;
  }
}
//========================== Expand
class mzExpand extends mzAppWidget {
  element = document.createElement("mzapp-expand");
  //
  constructor({
    child = null,
    grow = 1,
    shrink = null,
    basis = null,
    styling = [],
  }) {
    super();
    this.defaultStyling.push(new mzFlexExpand(grow, shrink, basis));
    this.children = [child];
    this.styling = styling;
  }
}
//========================== Button
class mzButton extends mzAppWidget {
  element = document.createElement("mzapp-button");
  //
  constructor({
    child = null,
    disabled = false,
    onclick = null,
    styling = [],
  }) {
    super();
    this.defaultStyling = [
      new mzPadding().symmetric(2.5, 5),
      new mzMargin(2.5),
      new mzShadow(2),
      new mzColor(null, mzColor.colors.White),
    ];
    this.children = [child];
    this.classes = [disabled ? "disabled" : ""];
    this.nodeAttrs = { onclick: !disabled ? onclick : null };
    this.styling = styling;
  }
}
//========================== Text
class mzText extends mzAppWidget {
  element = document.createElement("mzapp-text");
  //
  constructor({ text = "", styling = [] }) {
    super();
    this.data.text = text;
    this.nodeAttrs = { innerText: text };
    this.styling = styling;
  }
}
//========================== Text
class mzIcon extends mzAppWidget {
  element = document.createElement("mzapp-icon");
  //
  constructor({ icon = "", styling = [] }) {
    super();
    this.data.icon = icon;
    this.nodeAttrs = { innerText: icon };
    this.styling = styling;
  }
}
//========================== Text
class mzImage extends mzAppWidget {
  element = document.createElement("mzapp-image");
  data = {
    img: document.createElement("img"),
  };
  //
  constructor({
    src = "",
    fit = mzFit.fit.contain,
    position = mzFit.position.center,
    styling = [],
  }) {
    super();
    //
    this.data.img.src = this.src;
    //
    this.defaultStyling.push(new mzFit(fit, position));
    this.styling = styling;
    this.children = [this.data.img];
  }
}
//========================== loader
class mzAppBar extends mzAppWidget {
  element = document.createElement("mzapp-appbar");
  //
  constructor({ child = null, styling = [] }) {
    super();
    this.children = [child];
    this.styling = styling;
  }
}
//========================== loader
class mzLoader extends mzAppWidget {
  element = document.createElement("mzapp-loader");
  //
  constructor({ child = null, loading = false, styling = [] }) {
    super();
    this.children = [child];
    this.classes = [loading ? "loading" : null];
    this.styling = styling;
  }
}
//========================== loader
class mzInput extends mzAppWidget {
  element = document.createElement("mzapp-input");
  data = { input: document.createElement("input") };
  //
  constructor({
    formGroup = null,
    controller = null,
    label = "",
    hint = "",
    error = "",
    value = "",
    disabled = false,
    validator = null,
    onchanged = null,
    styling = [],
  }) {
    super();
    //
    this.data.input.value = value;
    this.data.input.setAttribute("placeholder", hint);
    this.data.input.onchange = onchanged;
    this.data.input.onkeyup = onchanged;
    //
    this.defaultStyling = [
      new mzPadding().symmetric(2.5, 5),
      new mzMargin(2.5),
      new mzShadow(1),
      new mzCorner(2),
      new mzBorder(1, mzBorder.type.solid, mzColor.from("#333", 0.1)),
      new mzColor(null, mzColor.colors.White),
    ];
    //
    this.data.controller = controller;
    this.data.validator = validator;
    //
    this.children = [this.data.input];
    this.classes = [disabled ? "disabled" : ""];
    this.styling = styling;
  }
}
