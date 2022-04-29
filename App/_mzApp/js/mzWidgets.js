//====================================================
//========================== mzWidget
class mzWidget {
  element = null;
  defaultStyling = [];
  children = [];
  classes = {};
  styles = {};
  attributes = {};
  nodeAttrs = {};
  styling = [];
  data = {};
  //
  constructor() {
    this.element = document.createElement("mzapp-widget");
  }
  //
  build() {}
  //
  state() {
    if (this.element.matches("mzapp-widget")) {
      this.children = [this.build()];
    }
    this.renderChildren();
    this.renderElement();
    return this.element;
  }
  //
  setState(children = null) {
    if (!children) children = this.build();

    if (!Array.isArray(children)) children = [children];

    if (this.children.length == children.length) {
      for (let i in this.children) {
        if (typeof this.children[i] === typeof children[i]) {
          if (
            this.children[i] instanceof mzWidget &&
            children[i] instanceof mzWidget
          ) {
            if (this.children[i].constructor === children[i].constructor) {
              this.children[i].defaultStyling = children[i].defaultStyling;
              this.children[i].classes = children[i].classes;
              this.children[i].styles = children[i].styles;
              this.children[i].attributes = children[i].attributes;
              this.children[i].nodeAttrs = children[i].nodeAttrs;
              this.children[i].styling = children[i].styling;
              this.children[i].data = children[i].data;
              this.children[i].setState(children[i].children);
            } else {
              this.children = children;
              this.renderChildren();
            }
          } else if (this.children[i] !== children[i]) {
            this.children = children;
            this.renderChildren();
          }
        } else {
          this.children = children;
          this.renderChildren();
        }
      }
    } else {
      this.children = children;
      this.renderChildren();
    }
    //
    this.renderElement();
    return this.element;
  }
  //
  renderChildren() {
    this.element.innerHTML = ""; // children
    if (this.children) {
      for (let value of this.children) {
        if (value) {
          if (value instanceof mzWidget) this.element.append(value.state());
          else this.element.append(value);
        }
      }
    }
  }
  //
  renderElement() {
    this.element.removeAttribute("class");
    this.element.removeAttribute("style");
    for (let attr of this.element.attributes) {
      this.element.removeAttribute(attr);
    }
    // styling
    this.defaultStyling.forEach((s) => {
      if (s && s instanceof mzUI)
        if (this.styling.findIndex((e) => e.constructor == s.constructor) == -1)
          this.styling.push(s);
    });
    for (let style of this.styling) {
      if (style instanceof mzUI) {
        for (let key in style.classes) {
          this.classes[key] = style.classes[key];
        }
        for (let key in style.styles) {
          this.styles[key] = style.styles[key];
        }
      }
    }
    // classes
    for (let key in this.classes) {
      if (key) {
        if (this.classes[key]) this.element.classList.add(key);
        else this.element.classList.remove(key);
      }
    }
    // styles
    for (let key in this.styles) {
      if (key) this.element.style[key] = this.styles[key];
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
//========================== Scaffold
class mzScaffold extends mzWidget {
  constructor({
    appBar = null,
    bottomBar = null,
    drawer = null,
    body = null,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-scaffold");
    this.defaultStyling = [new mzColor(null, mzColor.fromHEX("#eee"))];
    this.children = [appBar, bottomBar, drawer, body];
    this.styling = styling;
  }
}
//========================== Container
class mzContainer extends mzWidget {
  element = document.createElement("mzapp-container");
  //
  constructor({ child = null, styling = [] }) {
    super();
    this.defaultStyling = [
      new mzShadow(1),
      new mzColor(null, mzData.colors.White),
    ];
    this.children = [child];
    this.styling = styling;
  }
}
//========================== Flex
class mzFlex extends mzWidget {
  constructor({
    children = null,
    direction = mzData.flexDirection.row,
    mainAlignment = mzData.flexMainAlign.start,
    crossAlignment = mzData.flexCrossAlign.start,
    shrink = false,
    wrap = false,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-flex");
    this.children = children;
    this.classes[mainAlignment] = true;
    this.classes[crossAlignment] = true;
    this.classes[direction] = true;
    this.classes["shrink"] = shrink;
    this.classes["wrap"] = wrap;
    this.styling = styling;
  }
}
//========================== Expand
class mzExpand extends mzWidget {
  constructor({
    child = null,
    grow = 1,
    shrink = null,
    basis = null,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-expand");
    this.defaultStyling.push(new mzFlexExpand(grow, shrink, basis));
    this.children = [child];
    this.styling = styling;
  }
}
//========================== Flex
class mzStack extends mzWidget {
  constructor({
    children = null,
    mainAlignment = mzData.flexMainAlign.start,
    crossAlignment = mzData.flexCrossAlign.start,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-stack");
    this.classes[mainAlignment] = true;
    this.classes[crossAlignment] = true;
    this.children = children;
    this.styling = styling;
  }
}
//========================== Expand
class mzCenter extends mzWidget {
  constructor({ child = null, styling = [] }) {
    super();
    this.element = document.createElement("mzapp-center");
    this.children = [child];
    this.styling = styling;
  }
}
//========================== Button
class mzButton extends mzWidget {
  constructor({
    child = null,
    disabled = false,
    onclick = null,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-button");
    this.defaultStyling = [
      new mzPadding().symmetric(2.5, 5),
      new mzMargin(2.5),
      new mzShadow(2),
      new mzColor(mzData.colors.black, mzData.colors.White),
    ];
    this.children = [child];
    this.classes["disabled"] = disabled;
    this.nodeAttrs = { onclick: !disabled ? onclick : null };
    this.styling = styling;
  }
}
//========================== Text
class mzText extends mzWidget {
  constructor({
    text = "",
    align = mzData.textAlign.start,
    overflow = mzData.textOverflow.wrap,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-text");
    this.data.text = text;
    this.classes[align] = true;
    this.classes[overflow] = true;
    this.nodeAttrs = { innerText: text };
    this.styling = styling;
  }
}
//========================== Text
class mzIcon extends mzWidget {
  constructor({ icon = "", styling = [] }) {
    super();
    this.element = document.createElement("mzapp-icon");
    this.data.icon = icon;
    this.nodeAttrs = { innerText: icon };
    this.styling = styling;
  }
}
//========================== Text
class mzImage extends mzWidget {
  //
  constructor({
    src = "",
    fit = mzFit.fit.contain,
    position = mzFit.position.center,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-image");
    this.data = {
      img: document.createElement("img"),
    };
    //
    this.data.img.src = src;
    //
    this.classes[fit] = true;
    this.classes[position] = true;
    this.styling = styling;
    this.children = [this.data.img];
  }
}
//========================== loader
class mzAppBar extends mzWidget {
  constructor({ child = null, styling = [] }) {
    super();
    this.element = document.createElement("mzapp-appbar");
    this.children = [child];
    this.styling = styling;
  }
}
//========================== loader
class mzLoader extends mzWidget {
  constructor({ child = null, loading = false, styling = [] }) {
    super();
    this.element = document.createElement("mzapp-loader");
    this.children = [child];
    this.classes["loading"] = loading;
    this.styling = styling;
  }
}
//========================== loader
class mzInputField extends mzWidget {
  constructor({
    label = "",
    hint = "",
    value = "",
    error = "",
    disabled = false,
    onchanged = null,
    validator = null,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-input");
    //
    this.defaultStyling = [
      new mzPadding().symmetric(2.5, 5),
      new mzMargin(2.5),
      new mzShadow(1),
      new mzCorner(2),
      new mzBorder(1, mzData.borderType.solid, mzColor.fromHEX("#333", 0.1)),
      new mzColor(null, mzData.colors.White),
    ];
    //
    this.children = [
      new mzInput({
        hint: hint,
        value: value,
        onchanged: onchanged,
        validator: validator,
      }),
    ];
    this.classes["disabled"] = disabled;
    this.styling = styling;
  }
}

class mzInput extends mzWidget {
  constructor({
    hint = "",
    value = "",
    onchanged = null,
    validator = null,
    styling = [],
  }) {
    super();
    this.element = document.createElement("input");
    this.attributes = {
      value: value,
      placeholder: hint,
    };
    this.nodeAttrs = {
      value: value,
      onkeyup: onchanged ? () => onchanged(this.element.value) : null,
      validator: validator ? () => validator(this.element.value) : null,
    };
    console.log(this.element.value, "-", value);
  }
}
