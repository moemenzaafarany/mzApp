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
    document.mzEvent("mzsetup");
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
      if (this.styles[key])
        this.element.style.setProperty(key, this.styles[key]);
      else this.element.style.removeProperty(key);
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
  constructor({
    child = null,
    size = mzSize.none,
    padding = mzPadding.all(1),
    margin = mzMargin.all(1),
    border = mzBorder.none,
    radius = mzRadius.all(1),
    shadow = mzShadow.set(1),
    background = mzBackground.set("#fff"),
  }) {
    super();
    this.element = document.createElement("mzapp-container");
    this.children = [child];
    this.styling = [size, padding, margin, border, radius, shadow, background];
  }
}

//========================== Container
class mzScroll extends mzWidget {
  constructor({ child = null, overflowX = true, overflowY = true }) {
    super();
    this.element = document.createElement("mzapp-scroll");
    this.children = [child];
    this.classes["x"] = overflowX;
    this.classes["y"] = overflowY;
  }
}

//========================== Divider
class mzDivider extends mzWidget {
  constructor({ border = mzBorder.all(1, "solid", "#333") }) {
    super();
    this.element = document.createElement("mzapp-divider");
    this.styling = [border];
  }
}

//========================== Flex
class mzFlex extends mzWidget {
  constructor({
    children = null,
    shrink = false,
    wrap = false,
    rowGap = 0,
    columnGap = 0,
    flow = mzFlexFlow.row,
    mainAlignment = mzMainAlign.start,
    crossAlignment = mzCrossAlign.start,
    wrapAlignment = mzWrapAlign.start,
  }) {
    super();
    this.element = document.createElement("mzapp-flex");
    this.children = children;
    this.classes["shrink"] = shrink;
    this.classes["wrap"] = wrap;
    this.styles["--rgp"] = `${mzUI.num(rowGap)}rem`;
    this.styles["--cgp"] = `${mzUI.num(columnGap)}rem`;
    this.styling = [flow, mainAlignment, crossAlignment, wrapAlignment];
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

//========================== Stack
class mzStack extends mzWidget {
  constructor({
    children = null,
    mainAlignment = mzMainAlign.start,
    crossAlignment = mzCrossAlign.start,
  }) {
    super();
    this.element = document.createElement("mzapp-stack");
    this.children = children;
    this.styling = [mainAlignment, crossAlignment];
  }
}

//========================== Positioned
class mzPositioned extends mzWidget {
  constructor({ child = null, grow = 1, shrink = null, basis = null }) {
    super();
    this.element = document.createElement("mzapp-positioned");
    this.children = [child];
    this.styling = [new mzFlexExpand(grow, shrink, basis)];
  }
}

//========================== Grid
class mzGrid extends mzWidget {
  constructor({
    children = null,
    columns = 2,
    rowGap = 1,
    columnGap = 1,
    mainAlignment = mzMainAlign.start,
    crossAlignment = mzCrossAlign.start,
    wrapAlignment = mzWrapAlign.start,
  }) {
    super();
    this.element = document.createElement("mzapp-grid");
    this.children = children;
    this.styles["--gtrs"] = `repeat(${Math.ceil(
      children.length / columns
    )},1fr)`;
    this.styles["--gtcs"] = `repeat(${columns}, 1fr)`;
    this.styles["--rgp"] = `${mzUI.num(rowGap)}rem`;
    this.styles["--cgp"] = `${mzUI.num(columnGap)}rem`;
    this.styling = [mainAlignment, crossAlignment, wrapAlignment];
  }
}

//========================== Center
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
    radius = mzRadius.all(1),
    shadow = mzShadow.set(1),
    color = mzColor.set("#333"),
    background = mzBackground.set("#fff"),
    border = mzBorder.none,
    hoverColor = mzColor.set("#fff"),
    hoverBackground = mzBackground.set("#333"),
    hoverBorder = mzBorder.none,
  }) {
    super();
    this.element = document.createElement("mzapp-button");
    this.children = [child];
    this.classes["disabled"] = disabled;
    this.nodeAttrs = { onclick: !disabled ? onclick : null };
    this.styles["--h-cr"] = hoverColor.styles["--cr"];
    this.styles["--h-bcr"] = hoverBackground.styles["--bcr"];
    this.styles["--h-bwt"] = hoverBorder.styles["--bwt"];
    this.styles["--h-bse"] = hoverBorder.styles["--bse"];
    this.styles["--h-brr"] = hoverBorder.styles["--brr"];
    this.styling = [padding, margin, radius, shadow, color, background, border];
  }
}

//========================== Text
class mzText extends mzWidget {
  constructor({
    text = "",
    fontSize = 16,
    align = mzTextAlign.start,
    overflow = mzTextOverflow.wrap,
    color = mzColor.set("#333"),
  }) {
    super();
    this.element = document.createElement("mzapp-text");
    this.nodeAttrs = { innerText: text, fontSize: mzUI.num(fontSize) };
    this.styling = [align, overflow, color];
  }
}

//========================== Icon
class mzIcon extends mzWidget {
  constructor({
    icon = "",
    align = mzTextAlign.start,
    color = mzColor.set("#333"),
  }) {
    super();
    this.element = document.createElement("mzapp-icon");
    this.classes[align] = true;
    this.nodeAttrs = { innerText: icon };
    this.styling = [color];
  }
}

//========================== Image
class mzImage extends mzWidget {
  constructor({
    src = "",
    fit = mzObjectFit.none,
    position = mzObjectPosition.none,
  }) {
    super();
    this.element = document.createElement("mzapp-image");
    //
    this.children = [new mzImg({ src: src, fit: fit, position: position })];
  }
}

//========================== Img
class mzImg extends mzWidget {
  constructor({
    src,
    fit = mzObjectFit.none,
    position = mzObjectPosition.none,
  }) {
    super();
    this.element = document.createElement("img");
    this.nodeAttrs = {
      src: src,
    };
    this.styling = [fit, position];
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

//========================== Form Field
class mzFormField extends mzWidget {
  constructor({
    formGroup = null,
    controller = new mzFormFieldController(),
    onchanged = null,
    validator = null,
    disabled = false,
    label = "",
    hint = "",
    error = "",
    animatedLabel = true,
    radius = mzRadius.all(2),
    border = mzBorder.all(1, mzData.borderType.solid, "#333"),
    color = mzColor.set("#333"),
    background = mzBackground.set("#FFF"),
    focusColor = mzColor.set("#00F"),
    errorColor = mzColor.set("#F00"),
  }) {
    super();
    if (controller) {
      controller.setWidget(this, validator);
      controller.onchange = this.setState;
    }
    this.element = document.createElement("mzapp-formfield");
    this.children = [
      new mzFieldLabel({ text: label, color: color }),
      new mzFieldInput({
        controller: controller,
        onchanged: onchanged,
        hint: hint,
        radius: radius,
        border: border,
        color: color,
        focusColor: focusColor,
        errorColor: errorColor,
      }),
      new mzFieldError({
        text: error || validator(controller.value),
        color: errorColor,
      }),
    ];
    this.styles["--bwh"] = border.styles["--bwh"];
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.classes["label"] = !animatedLabel && label;
    this.classes["labelless"] = !label;
    this.classes["disabled"] = disabled;
    this.styling = [color, background];
  }
}

//========================== Field Label
class mzFieldLabel extends mzWidget {
  constructor({ text = "", color = mzColor.set("#333") }) {
    super();
    this.element = document.createElement("mzapp-label");
    this.nodeAttrs = {
      innerText: text,
    };
    this.styling = [color];
  }
}

//========================== Field Input
class mzFieldInput extends mzWidget {
  constructor({
    controller = null,
    onchanged = null,
    hint = "",
    shadow = mzShadow.inset(1),
    radius = mzRadius.all(2),
    color = mzColor.set("#333"),
    border = mzBorder.all(1, mzData.borderType.solid, "#333"),
    focusColor = mzColor.set("#00f"),
    errorColor = mzColor.set("#f00"),
  }) {
    super();
    this.element = document.createElement("input");
    this.attributes = {
      value: controller.value,
      error: controller.error,
      placeholder: hint,
    };
    this.nodeAttrs = {
      value: controller.value,
    };
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.styling = [shadow, radius, color, border];
    if (onchanged || controller) {
      this.nodeAttrs["onchange"] = this.nodeAttrs["onkeyup"] = (evt) => {
        if (controller) controller.setValue(evt.target.value);
        if (onchanged) onchanged(evt.target.value);
      };
    }
  }
}

//========================== Field Error
class mzFieldError extends mzWidget {
  constructor({ text = "", color = mzColor.set("#F00") }) {
    super();
    this.element = document.createElement("mzapp-error");
    this.nodeAttrs = {
      innerText: text,
    };
    this.styling = [color];
  }
}

//========================== Form Select
class mzFormSelect extends mzWidget {
  constructor({
    formGroup = null,
    controller = new mzFormFieldController(),
    onchanged = null,
    validator = null,
    disabled = false,
    label = "",
    hint = "",
    error = "",
    animatedLabel = true,
    radius = mzRadius.all(2),
    border = mzBorder.all(1, mzData.borderType.solid, "#333"),
    color = mzColor.set("#333"),
    background = mzBackground.set("#FFF"),
    focusColor = mzColor.set("#00F"),
    errorColor = mzColor.set("#F00"),
  }) {
    super();
    if (controller) {
      controller.setWidget(this, validator);
      controller.onchange = this.setState;
    }
    this.element = document.createElement("mzapp-formselect");
    this.children = [
      new mzFieldLabel({ text: label, color: color }),
      new mzFieldInput({
        controller: controller,
        onchanged: onchanged,
        hint: hint,
        radius: radius,
        border: border,
        color: color,
        focusColor: focusColor,
        errorColor: errorColor,
      }),
      new mzFieldError({
        text: error || validator(controller.value),
        color: errorColor,
      }),
    ];
    this.styles["--bwh"] = border.styles["--bwh"];
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.classes["label"] = !animatedLabel && label;
    this.classes["labelless"] = !label;
    this.classes["disabled"] = disabled;
    this.styling = [color, background];
  }
}

//========================== Field List
class mzFieldList extends mzWidget {
  constructor({
    controller = null,
    onchanged = null,
    hint = "",
    shadow = mzShadow.inset(1),
    radius = mzRadius.all(2),
    color = mzColor.set("#333"),
    border = mzBorder.all(1, mzData.borderType.solid, "#333"),
    focusColor = mzColor.set("#00f"),
    errorColor = mzColor.set("#f00"),
  }) {
    super();
    this.element = document.createElement("input");
    this.attributes = {
      value: controller.value,
      error: controller.error,
      placeholder: hint,
    };
    this.nodeAttrs = {
      value: controller.value,
    };
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.styling = [shadow, radius, color, border];
    if (onchanged || controller) {
      this.nodeAttrs["onchange"] = this.nodeAttrs["onkeyup"] = (evt) => {
        if (controller) controller.setValue(evt.target.value);
        if (onchanged) onchanged(evt.target.value);
      };
    }
  }
}

//========================== Field List
class mzFieldOption extends mzWidget {
  constructor({
    controller = null,
    onchanged = null,
    hint = "",
    shadow = mzShadow.inset(1),
    radius = mzRadius.all(2),
    color = mzColor.set("#333"),
    border = mzBorder.all(1, mzData.borderType.solid, "#333"),
    focusColor = mzColor.set("#00f"),
    errorColor = mzColor.set("#f00"),
  }) {
    super();
    this.element = document.createElement("input");
    this.attributes = {
      value: controller.value,
      error: controller.error,
      placeholder: hint,
    };
    this.nodeAttrs = {
      value: controller.value,
    };
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.styling = [shadow, radius, color, border];
    if (onchanged || controller) {
      this.nodeAttrs["onchange"] = this.nodeAttrs["onkeyup"] = (evt) => {
        if (controller) controller.setValue(evt.target.value);
        if (onchanged) onchanged(evt.target.value);
      };
    }
  }
}
