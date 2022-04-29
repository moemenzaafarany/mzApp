//====================================================
//========================== mzWidget
class mzWidget {
  element = null;
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
    //this.element.removeAttribute("class");
    this.element.removeAttribute("style");
    //for (let attr of this.element.attributes) {
    //  this.element.removeAttribute(attr);
    //}
    // styling
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
    background = mzBackground.set("#eee"),
  }) {
    super();
    this.element = document.createElement("mzapp-scaffold");
    this.children = [appBar, bottomBar, drawer, body];
    this.styling = [background];
  }
}
//========================== Container
class mzContainer extends mzWidget {
  element = document.createElement("mzapp-container");
  //
  constructor({
    child = null,
    padding = mzPadding.none,
    margin = mzMargin.none,
    border = mzBorder.none,
    radius = mzRadius.all(2),
    shadow = mzShadow.set(1),
    background = mzBackground.set("#fff"),
  }) {
    super();
    this.children = [child];
    this.styling = [padding, margin, border, radius, shadow, background];
  }
}
//========================== Flex
class mzFlex extends mzWidget {
  constructor({
    children = null,
    direction = mzData.flexDirection.row,
    mainAlignment = mzData.flexMainAlign.start,
    crossAlignment = mzData.flexCrossAlign.start,
    rowGap = 0,
    columnGap = 0,
    shrink = false,
    wrap = false,
  }) {
    super();
    this.element = document.createElement("mzapp-flex");
    this.children = children;
    this.classes[mainAlignment] = true;
    this.classes[crossAlignment] = true;
    this.classes[direction] = true;
    this.classes["shrink"] = shrink;
    this.classes["wrap"] = wrap;
    this.styles["row-gap"] = rowGap;
    this.styles["columnGap-gap"] = columnGap;
  }
}
//========================== Expand
class mzExpand extends mzWidget {
  constructor({ child = null, grow = 1, shrink = null, basis = null }) {
    super();
    this.element = document.createElement("mzapp-expand");
    this.children = [child];
    this.styling = [new mzFlexExpand(grow, shrink, basis)];
  }
}
//========================== Flex
class mzStack extends mzWidget {
  constructor({
    children = null,
    mainAlignment = mzData.flexMainAlign.start,
    crossAlignment = mzData.flexCrossAlign.start,
  }) {
    super();
    this.element = document.createElement("mzapp-stack");
    this.classes[mainAlignment] = true;
    this.classes[crossAlignment] = true;
    this.children = children;
  }
}
//========================== Expand
class mzCenter extends mzWidget {
  constructor({ child = null }) {
    super();
    this.element = document.createElement("mzapp-center");
    this.children = [child];
  }
}
//========================== Button
class mzButton extends mzWidget {
  constructor({
    child = null,
    disabled = false,
    onclick = null,
    padding = mzPadding.symmetric(2.5, 5),
    margin = mzMargin.all(1),
    border = mzBorder.none,
    shadow = mzShadow.set(1),
    background = mzBackground.set("#fff"),
  }) {
    super();
    this.element = document.createElement("mzapp-button");
    this.children = [child];
    this.classes["disabled"] = disabled;
    this.nodeAttrs = { onclick: !disabled ? onclick : null };
    this.styling = [padding, margin, border, shadow, background];
  }
}
//========================== Text
class mzText extends mzWidget {
  constructor({
    text = "",
    align = mzData.textAlign.start,
    overflow = mzData.textOverflow.wrap,
    color = mzColor.set("#333"),
  }) {
    super();
    this.element = document.createElement("mzapp-text");
    this.classes[align] = true;
    this.classes[overflow] = true;
    this.nodeAttrs = { innerText: text };
    this.styling = [color];
  }
}
//========================== Text
class mzIcon extends mzWidget {
  constructor({
    icon = "",
    align = mzData.textAlign.start,
    color = mzColor.set("#333"),
  }) {
    super();
    this.element = document.createElement("mzapp-icon");
    this.classes[align] = true;
    this.nodeAttrs = { innerText: icon };
    this.styling = [color];
  }
}
//========================== Text
class mzImage extends mzWidget {
  //
  constructor({
    src = "",
    fit = mzFit.fit.contain,
    position = mzFit.position.center,
  }) {
    super();
    this.element = document.createElement("mzapp-image");
    //
    this.classes[fit] = true;
    this.classes[position] = true;
    this.children = [new mzImg({ src: src })];
  }
}
class mzImg extends mzWidget {
  constructor({ src }) {
    super();
    this.element = document.createElement("img");
    this.nodeAttrs = {
      src: src,
    };
  }
}
//========================== loader
class mzLoader extends mzWidget {
  constructor({ child = null, loading = false }) {
    super();
    this.element = document.createElement("mzapp-loader");
    this.children = [child];
    this.classes["loading"] = loading;
  }
}
//========================== Input Field
class mzInputField extends mzWidget {
  constructor({
    formGroup = null,
    label = "",
    hint = "",
    value = "",
    error = "",
    disabled = false,
    onchanged = null,
    validator = null,
  }) {
    super();
    this.element = document.createElement("mzapp-input");
    //
    // this.defaultStyling = [
    //   new mzPadding().symmetric(2.5, 5),
    //   new mzMargin(2.5),
    //   new mzShadow().inset(1),
    //   new mzCorner(2),
    //   new mzBorder(1, mzData.borderType.solid, "rgba(0,0,0,0.2)"),
    //   new mzColor(null, mzData.colors.White),
    // ];
    // //
    this.children = [
      new mzFieldset({
        label: label,
        hint: hint,
        value: value,
        onchanged: onchanged,
        validator: validator,
      }),
      error ? new mzText({ text: error }) : null,
    ];
    this.classes["disabled"] = disabled;
    //this.styling = styling;
  }
}

class mzFieldset extends mzWidget {
  constructor({
    label = "",
    hint = "",
    value = "",
    onchanged = null,
    validator = null,
    styling = [],
  }) {
    super();
    this.element = document.createElement("mzapp-field");
    this.children = [
      new mzFieldsetLegend({ text: label }),
      new mzInput({
        hint: hint,
        value: value,
        onchanged: onchanged,
        validator: validator,
      }),
    ];
  }
}

class mzFieldsetLegend extends mzWidget {
  constructor({ text = "", styling = [] }) {
    super();
    this.element = document.createElement("mzapp-label");
    this.nodeAttrs = {
      innerText: text,
    };
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
      onchange: onchanged ? (evt) => onchanged(evt.target.value) : null,
      onkeyup: onchanged ? (evt) => onchanged(evt.target.value) : null,
      validator: validator ? (evt) => validator(evt.target.value) : null,
    };
  }
}

/*

<fieldset>
  <legend>Personalia:</legend>
  <input type="text" id="fname" name="fname">
 </fieldset>
*/
