(function () {
  function focus(event, target) {
    document
      .querySelectorAll(".focus")
      .forEach((el) => el.classList.remove("focus"));

    // mzfield
    if (
      target.matches("mzfield mzvalue") ||
      target.matches("mzfield mzvalue *")
    ) {
      target.mzFindParent("mzfield").classList.add("focus");
    }
  }

  document.addEventListener("click", (event) => {
    focus(event, event.target);
  });
})();

//========================== mzWidget
class mzWidget {
  id = mzApp.getId();
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
    this.element = document.createElement("mzwidget");
  }
  //
  build() {}
  //
  state() {
    if (this.element.matches("mzwidget")) {
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
    this.attributes["id"] = this.id;
    for (let attr in this.attributes) {
      if (this.attributes[attr])
        this.element.setAttribute(attr, this.attributes[attr]);
      else this.element.removeAttribute(attr);
    }
    // node attributes
    for (let attr in this.nodeAttrs) {
      this.element[attr] = this.nodeAttrs[attr];
    }
  }
  //
  findFirstChild(type = mzWidget) {
    return recursiveSearch(this.children);

    function recursiveSearch(children = []) {
      let child = null;
      for (let el of children) {
        if (el instanceof type) {
          child = el;
          break;
        }
      }
      if (child) return child;
      else {
        for (let el of children) {
          if (el && el instanceof mzWidget) return recursiveSearch(el.children);
        }
      }
      return null;
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
    background = mzBackgroundUI.set("#eee"),
  }) {
    super();
    this.element = document.createElement("mzscaffold");
    this.children = [appBar, bottomBar, drawer, body];
    this.styling = [background];
  }
}

//========================== Container
class mzContainer extends mzWidget {
  constructor({
    child = null,
    width = mzWidthUI.none,
    height = mzHeightUI.none,
    padding = mzPaddingUI.all(1),
    margin = mzMarginUI.all(1),
    border = mzBorderUI.none,
    radius = mzRadiusUI.all(1),
    shadow = mzShadowUI.elevate(1),
    background = mzBackgroundUI.set("#fff"),
  }) {
    super();
    this.element = document.createElement("mzcontainer");
    this.children = [child];
    //this.styling = [size, padding, margin, border, radius, shadow, background];
  }
}

//========================== Container
class mzScroll extends mzWidget {
  constructor({ child = null, overflowX = true, overflowY = true }) {
    super();
    this.element = document.createElement("mzscroll");
    this.children = [child];
    this.classes["x"] = overflowX;
    this.classes["y"] = overflowY;
  }
}

//========================== Divider
class mzDivider extends mzWidget {
  constructor({ border = mzBorderUI.all(1, "solid", "#333") }) {
    super();
    this.element = document.createElement("mzdivider");
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
    flow = mzFlexFlowUI.row,
    mainContentAlign = mzMainAlignUI.start,
    crossContentAlign = mzCrossAlignUI.start,
    mainItemAlign = mzMainAlignUI.stretch,
    crossItemAlign = mzMainAlignUI.stretch,
  }) {
    super();
    this.element = document.createElement("mzflex");
    this.children = children;
    this.classes["shrink"] = shrink;
    this.classes["wrap"] = wrap;
    this.styles["--rgp"] = `${mzUI.num(rowGap)}rem`;
    this.styles["--cgp"] = `${mzUI.num(columnGap)}rem`;
    this.styling = [
      flow,
      mainContentAlign,
      crossContentAlign,
      mainItemAlign,
      crossItemAlign,
    ];
  }
}

//========================== Expand
class mzExpand extends mzWidget {
  constructor({ child = null, grow = 1, shrink = null, basis = null }) {
    super();
    this.element = document.createElement("mzexpand");
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
    this.element = document.createElement("mzstack");
    this.children = children;
    this.styling = [mainAlignment, crossAlignment];
  }
}

//========================== Positioned
class mzPositioned extends mzWidget {
  constructor({ child = null, grow = 1, shrink = null, basis = null }) {
    super();
    this.element = document.createElement("mzpositioned");
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
    this.element = document.createElement("mzgrid");
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
    this.element = document.createElement("mzcenter");
    this.children = [child];
  }
}

//========================== Button
class mzButton extends mzWidget {
  constructor({
    child = null,
    disabled = false,
    onclick = null,
    padding = mzPaddingUI.symmetric(2.5, 5),
    margin = mzMarginUI.all(1),
    radius = mzRadiusUI.all(1),
    shadow = mzShadowUI.elevate(1),
    color = mzColorUI.set("#333"),
    background = mzBackgroundUI.set("#fff"),
    border = mzBorderUI.none,
    hoverColor = mzColorUI.set("#fff"),
    hoverBackground = mzBackgroundUI.set("#333"),
    hoverBorder = mzBorderUI.none,
  }) {
    super();
    this.element = document.createElement("mzbutton");
    this.children = [child];
    this.classes["disabled"] = disabled;
    this.nodeAttrs = { onclick: !disabled ? onclick : null };
    //
    // this.styles["--h-cr"] = hoverColor.styles["--cr"];
    // this.styles["--h-bcr"] = hoverBackground.styles["--bcr"];
    // this.styles["--h-bwt"] = hoverBorder.styles["--bwt"];
    // this.styles["--h-bse"] = hoverBorder.styles["--bse"];
    // this.styles["--h-brr"] = hoverBorder.styles["--brr"];\

    //this.styling = [padding, margin, radius, shadow, color, background, border];
  }
}

//========================== Text
class mzText extends mzWidget {
  constructor({
    text = "",
    fontSize = 16,
    align = null, //mzTextAlign.start,
    overflow = null, //mzTextOverflow.wrap,
    color = mzColorUI.set("#333"),
  }) {
    super();
    this.element = document.createElement("mztext");
    this.nodeAttrs = { innerText: text, fontSize: mzUI.num(fontSize) };
    this.styling = [align, overflow, color];
  }
}

//========================== Icon
class mzIcon extends mzWidget {
  constructor({
    icon = "",
    align = mzTextAlign.start,
    color = mzColorUI.set("#333"),
  }) {
    super();
    this.element = document.createElement("mzicon");
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
    this.element = document.createElement("mzimage");
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
    this.element = document.createElement("mzloader");
    this.children = [child];
    this.classes["loading"] = loading;
  }
}

//========================== Tab View
class mzTabView extends mzWidget {
  constructor({ child = null }) {
    super();
    this.element = document.createElement("mztabview");
    this.children = [child];
  }
}

//========================== Tab View
class mzTabBar extends mzWidget {
  constructor({ children = null }) {
    super();
    this.element = document.createElement("mztabbar");
    this.children = children;
  }
}

//========================== Tab View
class mzTabContent extends mzWidget {
  constructor({ children = null }) {
    super();
    this.element = document.createElement("mztabcontent");
    this.children = children;
  }
}

/*
//========================== Form Label
class mzFormLabel extends mzWidget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzformlabel");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Form Error
class mzFormError extends mzWidget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzformerror");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Form Field
class mzFormField extends mzWidget {
  constructor({
    formGroup = null,
    controller = new mzFormController(),
    disabled = false,
    label = "",
    hint = "",
    animatedLabel = true,
    radius = mzRadiusUI.all(2),
    border = mzBorderUI.all(1, mzData.borderType.solid, "#333"),
    color = mzColorUI.set("#333"),
    background = mzBackgroundUI.set("#FFF"),
    focusColor = mzColorUI.set("#00F"),
    errorColor = mzColorUI.set("#F00"),
  }) {
    super();
    this.element = document.createElement("mzformfield");

    this.data.label = label;
    this.data.controller = controller;
    this.data.hint = hint;

    this.children = this.build();
    this.styles["--bwh"] = border.styles["--bwh"];
    this.styles["--cr"] = color.styles["--cr"];
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.styles["--e-cr"] = errorColor.styles["--cr"];
    this.classes["label"] = !animatedLabel && label;
    this.classes["labelless"] = !label;
    this.classes["disabled"] = disabled;
    this.styling = [radius, border, color, background];

    controller.setWidget(this, () => this.setState());
  }

  build() {
    return [
      new mzFormLabel({ text: this.data.label }),
      new mzFieldInput({
        controller: this.data.controller,
        hint: this.data.hint,
      }),
      new mzFormError({
        text: this.data.controller.getError(),
      }),
    ];
  }
}

//========================== Field Input
class mzFieldInput extends mzWidget {
  constructor({ controller = null, hint = "", shadow = mzShadowUI.inset(1) }) {
    super();
    this.element = document.createElement("input");
    this.attributes = {
      value: controller.value,
      error: controller.getError(),
      placeholder: hint,
    };
    this.nodeAttrs = {
      value: controller.value,
    };
    this.styling = [shadow];

    if (controller) {
      this.nodeAttrs["onchange"] = this.nodeAttrs["onkeyup"] = (evt) => {
        controller.setValue(evt.target.value);
      };
    }
  }
}

//========================== Form Select
class mzFormSelect extends mzWidget {
  constructor({
    formGroup = null,
    controller = new mzFormController(),
    animatedLabel = true,
    multiple = false,
    disabled = false,
    label = "",
    hint = "",
    options = null,
    radius = mzRadiusUI.all(2),
    border = mzBorderUI.all(1, mzData.borderType.solid, "#333"),
    color = mzColorUI.set("#333"),
    background = mzBackgroundUI.set("#FFF"),
    focusColor = mzColorUI.set("#00F"),
    errorColor = mzColorUI.set("#F00"),
  }) {
    super();
    this.element = document.createElement("mzformselect");

    this.data.label = label;
    this.data.controller = controller;
    this.data.hint = hint;
    this.data.options = options;

    this.children = this.build();
    this.styles["--bwh"] = border.styles["--bwh"];
    this.styles["--cr"] = color.styles["--cr"];
    this.styles["--f-brr"] = focusColor.styles["--cr"];
    this.styles["--e-brr"] = errorColor.styles["--cr"];
    this.styles["--e-cr"] = errorColor.styles["--cr"];
    this.classes["label"] = !animatedLabel && label;
    this.classes["labelless"] = !label;
    this.classes["disabled"] = disabled;
    this.styling = [radius, border, color, background];

    controller.setWidget(this, () => this.setState());
  }

  build() {
    return [
      new mzFormLabel({ text: this.data.label }),
      new mzSelectValue({
        controller: this.data.controller,
        hint: this.data.hint,
      }),
      new mzFormError({
        text: this.data.controller.getError(),
      }),
      new mzSelectList({ children: this.data.options }),
    ];
  }
}

//========================== Field List
class mzSelectValue extends mzWidget {
  constructor({ controller = null, hint = null, shadow = mzShadowUI.inset(1) }) {
    super();
    this.element = document.createElement("mzselectvalue");
    this.attributes = {
      value: controller.value,
      error: controller.getError(),
      placeholder: hint,
    };
    this.styling = [shadow];
    if (controller.data.child) this.children = [controller.data.child];
  }
}

//========================== Field List
class mzSelectList extends mzWidget {
  constructor({ children = null }) {
    super();
    this.element = document.createElement("mzselectlist");
    this.children = children;
  }
}

//========================== Field Option
class mzSelectOption extends mzWidget {
  constructor({
    controller = new mzFormController(),
    value = null,
    child = null,
  }) {
    super();
    this.element = document.createElement("mzselectoption");
    this.attributes = {
      value: value,
    };
    this.nodeAttrs = {
      onclick: () => {
        controller.setValue(value, { child: this.element.cloneNode(true) });
      },
    };
    this.children = [child];
  }
}
*/

//========================== Label
class mzLabel extends mzWidget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzlabel");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Hint
class mzHint extends mzWidget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzhint");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Value
class mzValue extends mzWidget {
  constructor({ child = null }) {
    super();
    this.element = document.createElement("mzvalue");
    this.children = [child];
  }
}

//========================== Error
class mzError extends mzWidget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzerror");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Error
class mzInput extends mzWidget {
  constructor({ controller = null }) {
    super();
    this.element = document.createElement("input");
    this.attributes = {
      value: controller.value,
      error: controller.getError(),
    };
    this.nodeAttrs = {
      value: controller.value,
    };
    this.nodeAttrs["onchange"] = this.nodeAttrs["onkeyup"] = (evt) => {
      controller.setValue(evt.target.value);
    };
  }
}

//========================== Field
class mzFieldInput extends mzWidget {
  constructor({
    formController = null,
    controller = new mzFieldController({}),
    animatedLabel = true,
    disabled = false,
    //
    label = "",
    hint = "",
    //
    color = mzBackgroundUI.set("#333"),
    background = mzBackgroundUI.set("#fff"),
    fontSize = mzFontSizeUI.set(10),
    padding = mzPaddingUI.symmetric(5, 10),
    margin = mzMarginUI.none,
    hoverColor = null,
    focusColor = null,
    errorColor = null,
    border = null,
    insetShadow = null,
  }) {
    super();
    this.element = document.createElement("mzfield");
    //
    this.data.formController = formController;
    this.data.controller = controller;
    this.data.animatedLabel = animatedLabel;
    this.data.disabled = disabled;
    this.data.label = label;
    this.data.hint = hint;
    //
    this.children = this.build();
    //
    // this.styles["--cr"] = color.data.cr;
    // this.styles["--bdcr"] = background.data.bdcr;
    // this.styles["--bdie"] = background.data.bdie;
    // this.styles["--ftse"] = fontSize.data.ftse;
    // this.styles["--pg"] = padding.data.pg;
    // this.styles["--mn"] = margin.data.mn;

    /*    
  --bdcr: white;
  --bd: var(--bdcr);
  --cr: #333;
  --hrcr: black;
  --fscr: blue;
  --ercr: red;
  --ftse: 1rem;
  --pg: 0.2rem 0.4rem;
  --brwh: 0.125rem;
  --brse: solid;
  --brrs: 0.15rem;
  --itsw: inset 0 0.1rem 0.16rem var(--cr);
  */

    //
    controller.setWidget(this, () => this.setState());
  }

  build() {
    this.classes["label"] = !this.data.animatedLabel;
    this.classes["labelless"] = !this.data.label;
    this.classes["value"] = !!this.data.controller.value;
    this.classes["error"] = !!this.data.controller.getError();
    this.classes["disabled"] = this.data.disabled;
    return [
      new mzLabel({ text: this.data.label }),
      new mzHint({ text: this.data.hint }),
      new mzValue({
        child: new mzInput({ controller: this.data.controller }),
      }),
      new mzError({
        text: this.data.controller.getError(),
      }),
    ];
  }
}
