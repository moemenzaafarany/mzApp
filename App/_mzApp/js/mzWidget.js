import * as mzAPP from "./mzApp.js";
import * as mzSTYLE from "./mzStyle.js";
import * as mzTHEME from "./mzTheme.js";
import * as mzDATA from "./mzData.js";
import * as mzCONTROLLER from "./mzController.js";
/*=========================*/
// ui class: for all ui of widgets
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
//========================== widget
export class Widget {
  id = mzAPP.App.getId();
  element = null;
  parent = null;
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
            mzInstanceOf(this.children[i], Widget) &&
            mzInstanceOf(children[i], Widget)
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
  // == inner functions
  setParent(widget) {
    if (mzInstanceOf(widget, Widget)) this.parent = widget;
    return this;
  }
  renderChildren() {
    this.element.innerHTML = ""; // children
    if (this.children) {
      for (let widget of this.children) {
        if (widget) {
          if (mzInstanceOf(widget, Widget)) {
            this.element.append(widget.setParent(this).state());
          } else this.element.append(widget);
        }
      }
    }
  }
  //
  renderElement() {
    // styling
    for (let style of this.styling) {
      if (mzInstanceOf(style, mzSTYLE.Style)) {
        for (let key in style.classes) {
          this.classes[key] = style.classes[key];
        }
        for (let key in style.styles) {
          this.styles[`--${key}`] = style.styles[key];
        }
      }
    }
    // classes
    for (let key in this.classes) {
      if (key) {
        let exists = this.element.classList.contains(key);
        if (this.classes[key] && !exists) this.element.classList.add(key);
        else if (exists) this.element.classList.remove(key);
      }
    }
    // styles
    let currStyles = window.getComputedStyle(this.element);
    for (let key in this.styles) {
      let equal = currStyles[key] == this.styles[key];
      if (this.styles[key] && !equal)
        this.element.style.setProperty(key, this.styles[key]);
      else if (!equal) this.element.style.removeProperty(key);
    }
    // attributes
    this.attributes["id"] = this.id;
    for (let attr in this.attributes) {
      let equal = this.element.getAttribute(attr) == this.attributes[attr];
      if (this.attributes[attr] && !equal)
        this.element.setAttribute(attr, this.attributes[attr]);
      else if (!equal) this.element.removeAttribute(attr);
    }
    // node attributes
    for (let attr in this.nodeAttrs) {
      let equal = this.element[attr] == this.nodeAttrs[attr];
      if (this.attributes[attr] && !equal)
        this.element[attr] = this.nodeAttrs[attr];
      else if (!equal) this.element[attr] = this.nodeAttrs[attr];
    }
  }
  //
  findFirstChild(type = Widget) {
    return recursiveSearch(this.children);

    function recursiveSearch(children = []) {
      let child = null;
      for (let el of children) {
        if (mzInstanceOf(el, type)) {
          child = el;
          break;
        }
      }
      if (child) return child;
      else {
        for (let el of children) {
          if (el && mzInstanceOf(el, Widget))
            return recursiveSearch(el.children);
        }
      }
      return null;
    }
  }
  //
  findFirstParent(type = Widget) {
    return recursiveSearch(this.parent);

    function recursiveSearch(widget) {
      let parent = null;
      if (mzInstanceOf(widget, type)) {
        parent = widget;
      }
      if (parent) return parent;
      else recursiveSearch(widget.parent);
      return null;
    }
  }
}

//========================== Scaffold
export class Scaffold extends Widget {
  constructor({
    appBar = null,
    bottomBar = null,
    drawer = null,
    body = null,
    theme = null,
  }) {
    super();
    this.element = document.createElement("mzscaffold");
    this.children = [appBar, bottomBar, drawer, body];
    if (mzInstanceOf(theme, mzTHEME.Scaffold)) theme = new mzTHEME.Scaffold({});
    this.styling = [theme.BackColor];
  }
}

//========================== Container
export class Container extends Widget {
  constructor({ child = null, theme = null }) {
    super();
    this.element = document.createElement("mzcontainer");
    this.children = [child];
    if (!mzInstanceOf(theme, mzTHEME.Container))
      theme = new mzTHEME.Container({});
    this.styling = [
      theme.Width,
      theme.Height,
      theme.Padding,
      theme.Margin,
      theme.Border,
      theme.Radius,
      theme.Shadow,
      theme.BackColor,
    ];
  }
}

//========================== Container
export class Scroll extends Widget {
  constructor({ child = null, overflowX = true, overflowY = true }) {
    super();
    this.element = document.createElement("mzscroll");
    this.children = [child];
    this.classes["x"] = overflowX;
    this.classes["y"] = overflowY;
  }
}

//========================== Divider
export class Divider extends Widget {
  constructor({ border = mzBorderUI.all(1, "solid", "#333") }) {
    super();
    this.element = document.createElement("mzdivider");
    this.styling = [border];
  }
}

//========================== Flex
export class Flex extends Widget {
  constructor({
    children = null,
    shrink = false,
    gap = mzFlexGapUI.none,
    wrap = mzFlexWrapUI.nowrap,
    direction = mzFlexFlowUI.column,
    contentMainAlign = mzContentMainAlignUI.start,
    contentCrossAlign = mzContentCrossAlignUI.start,
    itemMainAlign = mzItemMainAlignUI.stretch,
    itemCrossAlign = mzItemCrossAlignUI.stretch,
  }) {
    super();
    this.element = document.createElement("mzflex");
    this.children = children;
    this.classes["shrink"] = shrink;
    this.styling = [
      gap,
      wrap,
      direction,
      contentMainAlign,
      contentCrossAlign,
      itemMainAlign,
      itemCrossAlign,
    ];
  }
}

//========================== Grid
export class Grid extends Widget {
  constructor({
    children = null,
    columns = 2,
    shrink = false,
    gap = mzFlexGapUI.none,
    contentMainAlign = mzContentMainAlignUI.start,
    contentCrossAlign = mzContentCrossAlignUI.start,
    itemMainAlign = mzItemMainAlignUI.stretch,
    itemCrossAlign = mzItemCrossAlignUI.stretch,
  }) {
    super();
    this.element = document.createElement("mzgrid");
    this.children = children;
    this.classes["shrink"] = shrink;
    this.styling = [
      mzGridColumnsUI.fraction(columns, 1),
      mzGridRowsUI.fraction(Math.ceil(children.length / columns), 1),
      gap,
      contentMainAlign,
      contentCrossAlign,
      itemMainAlign,
      itemCrossAlign,
    ];
  }
}

//========================== Expand
export class Expand extends Widget {
  constructor({ child = null, grow = 1, shrink = null, basis = null }) {
    super();
    this.element = document.createElement("mzexpand");
    this.children = [child];
    this.styling = [new mzFlexExpand(grow, shrink, basis)];
  }
}

//========================== Stack
export class Stack extends Widget {
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
export class Positioned extends Widget {
  constructor({ child = null, grow = 1, shrink = null, basis = null }) {
    super();
    this.element = document.createElement("mzpositioned");
    this.children = [child];
    this.styling = [new mzFlexExpand(grow, shrink, basis)];
  }
}

//========================== Center
export class Center extends Widget {
  constructor({ child = null }) {
    super();
    this.element = document.createElement("mzcenter");
    this.children = [child];
    this.styling = [
      //     mzSTYLE.
    ];
  }
}

//========================== Button
export class Button extends Widget {
  constructor({
    child = null,
    disabled = false,
    onclick = null,
    theme = null,
    /*
    padding = mzPaddingUI.symmetric(2.5, 5),
    margin = mzMarginUI.all(1),
    radius = mzRadiusUI.all(1),
    shadow = mzShadowUI.elevate(1),
    color = mzColorUI.set("#333"),
    background = mzBackgroundUI.set("#fff"),
    border = mzBorderUI.none,
    hoverColor = mzColorUI.set("#fff"),
    hoverBackground = mzBackgroundUI.set("#333"),
    hoverBorder = mzBorderUI.none,*/
  }) {
    super();
    this.element = document.createElement("button");
    this.children = [child];
    this.classes["disabled"] = disabled;
    this.nodeAttrs = {
      onclick: mzIf(!disabled, onclick),
    };
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
export class Text extends Widget {
  constructor({ text = "", theme = new mzTHEME.Text({}) }) {
    super();
    this.element = document.createElement("mztext");
    this.nodeAttrs = {
      innerText: text,
    };

    if (!mzInstanceOf(theme, mzTHEME.Text)) theme = new mzTHEME.Text({});
    this.styling = [
      theme.FontSize,
      theme.FontFamily,
      theme.FontStyle,
      theme.FontWeight,
      theme.TextAlign,
      theme.TextDecoration,
      theme.TextOverflow,
      theme.Direction,
      theme.ForeColor,
    ];
  }
}

//========================== Icon
export class Icon extends Widget {
  constructor({
    icon = "",
    align = mzTextAlign.start,
    color = mzColorUI.set("#333"),
  }) {
    super();
    this.element = document.createElement("mzicon");
    this.classes[align] = true;
    this.nodeAttrs = {
      innerText: icon,
    };
    this.styling = [color];
  }
}

//========================== Image
export class Image extends Widget {
  constructor({
    src = "",
    fit = mzObjectFit.none,
    position = mzObjectPosition.none,
  }) {
    super();
    this.element = document.createElement("mzimage");
    //
    this.children = [
      new Img({
        src: src,
        fit: fit,
        position: position,
      }),
    ];
  }
}

//========================== Img
class Img extends Widget {
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
export class Loader extends Widget {
  constructor({ child = null, loading = false }) {
    super();
    this.element = document.createElement("mzloader");
    this.children = [child];
    this.classes["loading"] = loading;
  }
}

//========================== Label
class Label extends Widget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzlabel");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Hint
class Hint extends Widget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzhint");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Value
class Value extends Widget {
  constructor({ child = null }) {
    super();
    this.element = document.createElement("mzvalue");
    this.children = [child];
  }
}

//========================== Error
class Error extends Widget {
  constructor({ text = "" }) {
    super();
    this.element = document.createElement("mzerror");
    this.nodeAttrs = {
      innerText: text,
    };
  }
}

//========================== Error
class Input extends Widget {
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
export class FieldInput extends Widget {
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
      new label({
        text: this.data.label,
      }),
      new hint({
        text: this.data.hint,
      }),
      new value({
        child: new input({
          controller: this.data.controller,
        }),
      }),
      new error({
        text: this.data.controller.getError(),
      }),
    ];
  }
}
