import * as mzAPP from "./mzApp.js";
import * as mzTHEME from "./mzTheme.js";
import * as mzDATA from "./mzData.js";
import * as mzWIDGET from "./mzWidget.js";
import * as mzCONTROLLER from "./mzController.js";

/*=========================*/
// main data
export class Styles {
  static map = {
    position: {
      style: "position",
      vars: null,
      val: "static",
      format: null,
    },
    top: {
      style: "top",
      vars: null,
      val: "auto",
      format: null,
    },
    right: {
      style: "right",
      vars: null,
      val: "auto",
      format: null,
    },
    bottom: {
      style: "bottom",
      vars: null,
      val: "auto",
      format: null,
    },
    left: {
      style: "left",
      vars: null,
      val: "auto",
      format: null,
    },
    display: {
      style: "display",
      vars: null,
      val: "flex",
      format: null,
    },
    "overflow-x": {
      style: "overflow-x",
      vars: null,
      val: "visible",
      format: null,
    },
    "overflow-y": {
      style: "overflow-y",
      vars: null,
      val: "visible",
      format: null,
    },
    "overflow-wrap": {
      style: "overflow-wrap",
      vars: null,
      val: "normal",
      format: null,
    },
    width: {
      style: "width",
      vars: null,
      val: "unset",
      format: null,
    },
    "min-width": {
      style: "min-width",
      vars: null,
      val: "unset",
      format: null,
    },
    "max-width": {
      style: "max-width",
      vars: null,
      val: "unset",
      format: null,
    },
    height: {
      style: "height",
      vars: null,
      val: "unset",
      format: null,
    },
    "min-height": {
      style: "min-height",
      vars: null,
      val: "unset",
      format: null,
    },
    "max-height": {
      style: "max-height",
      vars: null,
      val: "unset",
      format: null,
    },
    "font-size": {
      style: "font-size",
      vars: null,
      val: "10rem",
      format: null,
    },
    "font-family": {
      style: "font-family",
      vars: null,
      val: "inherit",
      format: null,
    },
    "font-style": {
      style: "font-style",
      vars: null,
      val: "normal",
      format: null,
    },
    "font-weight": {
      style: "font-weight",
      vars: null,
      val: "normal",
      format: null,
    },
    direction: {
      style: "direction",
      vars: null,
      val: "inherit",
      format: null,
    },
    "text-align": {
      style: "text-align",
      vars: null,
      val: "inherit",
      format: null,
    },
    "text-indent": {
      style: "text-indent",
      vars: null,
      val: "unset",
      format: null,
    },
    "text-overflow": {
      style: "text-overflow",
      vars: null,
      val: "unset",
      format: null,
    },
    "white-space": {
      style: "white-space",
      vars: null,
      val: "unset",
      format: null,
    },
    "word-wrap": {
      style: "word-wrap",
      vars: null,
      val: "unset",
      format: null,
    },
    "word-break": {
      style: "word-break",
      vars: null,
      val: "unset",
      format: null,
    },
    "text-decoration": {
      style: "text-decoration",
      vars: {
        lines: {
          val: "unset",
        },
        style: {
          val: "unset",
        },
        color: {
          val: "currentColor",
        },
        thickness: {
          val: "unset",
        },
      },
      val: null,
      format: "{lines} {style} {color} {thickness}",
    },
    color: {
      style: "color",
      vars: null,
      val: "inherit",
      format: null,
    },
    "background-color": {
      style: "background-color",
      vars: null,
      val: "transparent",
      format: null,
    },
    "background-image": {
      style: "background-image",
      vars: null,
      val: "transparent",
      format: null,
    },
    "border-width": {
      style: "border-width",
      vars: {
        top: {
          val: "0",
        },
        right: {
          val: "0",
        },
        bottom: {
          val: "0",
        },
        left: {
          val: "0",
        },
      },
      val: null,
      format: "{top} {right} {bottom} {left}",
    },
    "border-style": {
      style: "border-style",
      vars: null,
      val: "solid",
      format: null,
    },
    "border-color": {
      style: "border-color",
      vars: null,
      val: "transparent",
      format: null,
    },
    "border-radius": {
      style: "border-radius",
      vars: {
        "top-left": {
          val: "0",
        },
        "top-right": {
          val: "0",
        },
        "bottom-right": {
          val: "0",
        },
        "bottom-left": {
          val: "0",
        },
      },
      val: null,
      format: "{top-left} {top-right} {bottom-right} {bottom-left}",
    },
    "box-shadow": {
      style: "box-shadow",
      vars: {
        type: {
          val: "",
        },
        "horizontal-offset": {
          val: "0",
        },
        "vertical-offset": {
          val: "0",
        },
        spread: {
          val: "0",
        },
        color: {
          val: "transparent",
        },
      },
      val: null,
      format: "{type} {horizontal-offset} {vertical-offset} {spread} {color}",
    },
    padding: {
      style: "padding",
      vars: {
        top: {
          val: "0",
        },
        right: {
          val: "0",
        },
        bottom: {
          val: "0",
        },
        left: {
          val: "0",
        },
      },
      val: null,
      format: "{top} {right} {bottom} {left}",
    },
    margin: {
      style: "margin",
      vars: {
        top: {
          val: "0",
        },
        right: {
          val: "0",
        },
        bottom: {
          val: "0",
        },
        left: {
          val: "0",
        },
      },
      val: null,
      format: "{top} {right} {bottom} {left}",
    },
    "flex-flow": {
      style: "flex-flow",
      vars: {
        direction: {
          val: "row",
        },
        wrap: {
          val: "nowrap",
        },
      },
      val: null,
      format: "{direction} {wrap}",
    },
    "justify-content": {
      style: "justify-content",
      vars: null,
      val: "stretch",
      format: null,
    },
    "align-content": {
      style: "align-content",
      vars: null,
      val: "stretch",
      format: null,
    },
    "justify-items": {
      style: "justify-items",
      vars: null,
      val: "stretch",
      format: null,
    },
    "align-items": {
      style: "align-items",
      vars: null,
      val: "stretch",
      format: null,
    },
    "justify-self": {
      style: "justify-self",
      vars: null,
      val: "unset",
      format: null,
    },
    "align-self": {
      style: "align-self",
      vars: null,
      val: "unset",
      format: null,
    },
    flex: {
      style: "flex",
      vars: {
        grow: {
          val: "0",
        },
        shrink: {
          val: "1",
        },
        basis: {
          val: "max-content",
        },
      },
      val: null,
      format: "{grow} {shrink} {basis}",
    },
    "row-gap": {
      style: "row-gap",
      vars: null,
      val: "0",
      format: null,
    },
    "column-gap": {
      style: "column-gap",
      vars: null,
      val: "0",
      format: null,
    },
    "grid-template-rows": {
      style: "grid-template-rows",
      vars: null,
      val: "auto",
      format: null,
    },
    "grid-template-columns": {
      style: "grid-template-columns",
      vars: null,
      val: "auto",
      format: null,
    },
    "grid-row": {
      style: "grid-row",
      vars: null,
      val: "auto",
      format: null,
    },
    "grid-column": {
      style: "grid-column",
      vars: null,
      val: "auto",
      format: null,
    },
    "object-fit": {
      style: "object-fit",
      vars: null,
      val: "unset",
      format: null,
    },
    "object-position": {
      style: "object-position",
      vars: null,
      val: "unset",
      format: null,
    },
    "pointer-events": {
      style: "pointer-events",
      vars: null,
      val: "auto",
      format: null,
    },
    cursor: {
      style: "cursor",
      vars: null,
      val: "auto",
      format: null,
    },
    "user-select": {
      style: "user-select",
      vars: null,
      val: "auto",
      format: null,
    },
    opacity: {
      style: "opacity",
      vars: null,
      val: "1",
      format: null,
    },
  };

  static getId(s="", v = "") {
    return this.ABBR(s + " " + v);
  }

  static ABBR(string) {
    let list = string.toLowerCase().replaceAll(/-/gi, " ").trim().split(" ");
    let res = "";
    for (let val of list) {
      res += val[0].toUpperCase() ?? "";
      res += val[Math.floor((val.length - 1) / 2)] ?? "";
      res += val[val.length - 1] ?? "";
    }
    return res;
  }

  static css() {
    let css = "";
    css += createCss("body *");
    css += createCss("body *.hover,body *:hover", "h-");
    css += createCss("body *.focus,body *:focus", "f-");
    return css;

    function createCss(tag = null, add = "") {
      let css = "";
      css += `${tag} {`;
      //start
      for (let k in Styles.map) {
        let style = Styles.map[k];

        if (style.vars && style.format) {
          let cssval = style.format;
          for (let v in style.vars) {
            let styleVar = style.vars[v];
            if (add) {
              css += `--${add}${Styles.ABBR(
                style.style + "-" + v
              )}: ${`var(--${Styles.ABBR(style.style + "-" + v)})`};`;
            } else {
              css += `--${Styles.ABBR(style.style + "-" + v)}: ${
                styleVar.val
              };`;
            }
            cssval = cssval.replaceAll(
              `{${v}}`,
              `var(--${add}${Styles.ABBR(style.style + "-" + v)})`
            );
          }
          if (!add) {
            css += `${k}: ${cssval};`;
          }
        } else {
          if (add) {
            css += `--${add}${Styles.ABBR(style.style)}: var(--${Styles.ABBR(
              style.style
            )});`;
          } else {
            css += `--${Styles.ABBR(style.style)}: ${style.val};`;
            css += `${k}: var(--${Styles.ABBR(style.style)});`;
          }
        }
      }
      //end
      css += "}\n";
      return css;
    }
  }
}
/*=========================*/
// Style class: for all Style of widgets
export class Style {
  styles = {};
  classes = {};

  constructor(styles = {}, classes = {}) {
    this.styles = styles;
    this.classes = classes;
  }

  setStyle() {}
  setClasses() {
    return this.classes;
  }

  getStyle(key = null) {
    return this.styles[key];
  }
  getClass(key = null) {
    return this.classes[key];
  }
}
/*=========================*/
export class Position extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return { [Styles.getId("position")]: value };
  }

  static static = new this(this.setStyle("static"));
  static relative = new this(this.setStyle("relative"));
  static fixed = new this(this.setStyle("fixed"));
  static absolute = new this(this.setStyle("absolute"));
  static relative = new this(this.setStyle("relative"));

  static none = new this(this.setStyle());
  static unset = new this(this.setStyle("unset"));
  static inherit = new this(this.setStyle("inherit"));
  static initial = new this(this.setStyle("initial"));
  static revert = new this(this.setStyle("revert"));
  static revertLayer = new this(this.setStyle("revert-layer"));
  static auto = new this(this.setStyle("auto"));
}
/*=========================*/
export class Display extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return { [Styles.getId("display")]: value };
  }

  static inline = new this(this.setStyle("inline"));
  static block = new this(this.setStyle("block"));
  static inlineBlock = new this(this.setStyle("inline-block"));
  static contents = new this(this.setStyle("contents"));
  static flex = new this(this.setStyle("flex"));
  static inlineFlex = new this(this.setStyle("inline-flex"));
  static grid = new this(this.setStyle("grid"));
  static inlineFrid = new this(this.setStyle("inline-grid"));

  static none = new this(this.setStyle());
}
/*=========================*/
export class Overflow extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return {
      [Styles.getId("overflow-x")]: value,
      [Styles.getId("overflow-y")]: value,
    };
  }

  static hidden = new this(this.setStyle("hidden"));
  static clip = new this(this.setStyle("clip"));
  static visible = new this(this.setStyle("visible"));
  static scroll = new this(this.setStyle("scroll"));
  static auto = new this(this.setStyle("auto"));

  static null = new this();
}
/*=========================*/
export class Width extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null, min = null, max = null) {
    return {
      [Styles.getId("width")]: mzInstanceOf(value, mzDATA.Num)
        ? value.num
        : value,
      [Styles.getId("min-width")]: mzInstanceOf(min, mzDATA.Num)
        ? min.num
        : min,
      [Styles.getId("max-width")]: mzInstanceOf(max, mzDATA.Num)
        ? max.num
        : max,
    };
  }

  static set({ value = null, min = null, max = null }) {
    return new this(this.setStyle(value, min, max));
  }
}
/*=========================*/
export class Height extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null, min = null, max = null) {
    return {
      [Styles.getId("height")]: mzInstanceOf(value, mzDATA.Num)
        ? value.num
        : value,
      [Styles.getId("min-height")]: mzInstanceOf(min, mzDATA.Num)
        ? min.num
        : min,
      [Styles.getId("max-height")]: mzInstanceOf(max, mzDATA.Num)
        ? max.num
        : max,
    };
  }

  static set({ value = null, min = null, max = null }) {
    return new this(this.setStyle(value, min, max));
  }
}
/*=========================*/
export class Direction extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return { [Styles.getId("direction")]: value };
  }

  static ltr = new this(this.setStyle("ltr"));
  static rtl = new this(this.setStyle("rtl"));
}
/*=========================*/
export class FontSize extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return {
      [Styles.getId("font-size")]: mzInstanceOf(value, mzDATA.Num)
        ? value.num
        : value,
    };
  }

  static set(size = null) {
    return new this(this.setStyle(size));
  }
}
/*=========================*/
export class FontFamily extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return { [Styles.getId("font-family")]: value };
  }

  static set(font = null) {
    return new this(this.setStyle(font));
  }
}
/*=========================*/
export class FontStyle extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }
  static setStyle(value = null) {
    return { [Styles.getId("font-style")]: value };
  }

  static normal = new this(this.setStyle("normal"));
  static italic = new this(this.setStyle("italic"));
  static oblique = new this(this.setStyle("oblique"));
}
/*=========================*/
export class FontWeight extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return { [Styles.getId("font-weight")]: value };
  }

  static normal = new this(this.setStyle("normal"));
  static bold = new this(this.setStyle("bold"));
  static bolder = new this(this.setStyle("bolder"));
  static light = new this(this.setStyle("light"));
  static lighter = new this(this.setStyle("lighter"));
  static w100 = new this(this.setStyle("100"));
  static w200 = new this(this.setStyle("200"));
  static w300 = new this(this.setStyle("300"));
  static w400 = new this(this.setStyle("400"));
  static w500 = new this(this.setStyle("500"));
  static w600 = new this(this.setStyle("600"));
  static w700 = new this(this.setStyle("700"));
  static w800 = new this(this.setStyle("800"));
  static w900 = new this(this.setStyle("900"));
}
/*=========================*/
export class TextAlign extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return { [Styles.getId("text-align")]: value };
  }

  static start = new this(this.setStyle("start"));
  static end = new this(this.setStyle("end"));
  static center = new this(this.setStyle("center"));
  static justify = new this(this.setStyle("justify"));
  static left = new this(this.setStyle("left"));
  static right = new this(this.setStyle("right"));
  static inherit = new this(this.setStyle("inherit"));
  static initial = new this(this.setStyle("initial"));
}
/*=========================*/
export class TextDecoration extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(lines = null, style = null, color = null, thickness = null) {
    return {
      [Styles.getId("text-decoration", "lines")]: mzInstanceOf(
        lines,
        mzDATA.LineType
      )
        ? lines.type
        : lines,
      [Styles.getId("text-decoration", "style")]: mzInstanceOf(
        style,
        mzDATA.LineStyle
      )
        ? style.style
        : style,
      [Styles.getId("text-decoration", "color")]: mzInstanceOf(
        color,
        mzDATA.Color
      )
        ? color.color
        : color,
      [Styles.getId("text-decoration", "thickness")]: mzInstanceOf(
        thickness,
        mzDATA.Num
      )
        ? thickness.num
        : thickness,
    };
  }

  static set({
    lines = null,
    style = mzDATA.LineStyle.solid,
    color = null,
    thickness = null,
  }) {
    return new this(this.setStyle(lines, style, color, thickness));
  }
}
/*=========================*/
export class TextOverflow extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(whiteSpace = null, overflow = null, textOverflow = null) {
    return {
      [Styles.getId("white-space")]: whiteSpace,
      [Styles.getId("overflow-x")]: overflow,
      [Styles.getId("overflow-y")]: overflow,
      [Styles.getId("text-overflow")]: textOverflow,
    };
  }

  static wrap = new this(this.setStyle());
  static clip = new this(this.setStyle("nowrap", null, "clip"));
  static ellipses = new this(this.setStyle("nowrap", "hidden", "ellipsis"));
}

/*=========================*/
export class ForeColor extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return {
      [Styles.getId("color")]: mzInstanceOf(value, mzDATA.Color)
        ? value.color
        : value,
    };
  }

  static set(color = null) {
    return new this(this.setStyle(color));
  }

  static transparent = new this(this.setStyle("transparent"));
}
/*=========================*/
export class BackColor extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(value = null) {
    return {
      [Styles.getId("background-color")]: mzInstanceOf(value, mzDATA.Color)
        ? value.color
        : value,
    };
  }

  static set(color = null) {
    return new this(this.setStyle(color));
  }

  static transparent = new this(this.setStyle("transparent"));
}
/*=========================*/
export class Border extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(
    style = null,
    color = null,
    top = null,
    right = null,
    bottom = null,
    left = null
  ) {
    return {
      [Styles.getId("border-style")]: mzInstanceOf(style, mzDATA.LineStyle)
        ? style.style
        : style,
      [Styles.getId("border-color")]: mzInstanceOf(color, mzDATA.Color)
        ? color.color
        : color,
      [Styles.getId("border-width", "top")]: mzInstanceOf(top, mzDATA.Num)
        ? top.num
        : top,
      [Styles.getId("border-width", "right")]: mzInstanceOf(right, mzDATA.Num)
        ? right.num
        : right,
      [Styles.getId("border-width", "bottom")]: mzInstanceOf(bottom, mzDATA.Num)
        ? bottom.num
        : bottom,
      [Styles.getId("border-width", "left")]: mzInstanceOf(left, mzDATA.Num)
        ? left.num
        : left,
    };
  }

  static all({
    thickness = null,
    style = mzDATA.LineStyle.solid,
    color = mzDATA.Color.black.opacity(0.75),
  }) {
    return new this(
      this.setStyle(style, color, thickness, thickness, thickness, thickness)
    );
  }

  static symmetric({
    vertical = null,
    horizontal = null,
    style = mzDATA.LineStyle.solid,
    color = mzDATA.Color.black.opacity(0.5),
  }) {
    return new this(
      this.setStyle(style, color, vertical, horizontal, vertical, horizontal)
    );
  }

  static TRBL({
    top = null,
    right = null,
    bottom = null,
    left = null,
    style = mzDATA.LineStyle.solid,
    color = mzDATA.Color.black.opacity(0.5),
  }) {
    return new this(this.setStyle(style, color, top, right, bottom, left));
  }

  static TSBE({
    top = null,
    start = null,
    bottom = null,
    end = null,
    style = mzDATA.LineStyle.solid,
    color = mzDATA.Color.black.opacity(0.5),
  }) {
    return new this(
      this.setStyle(
        style,
        color,
        top,
        mzAPP.Html.dirLTR() ? end : start,
        bottom,
        mzAPP.Html.dirLTR() ? start : end
      )
    );
  }
}
/*=========================*/
export class Radius extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(
    topLeft = null,
    topRight = null,
    bottomRight = null,
    bottomLeft = null
  ) {
    return {
      [Styles.getId("border-radius", "top-left")]: mzInstanceOf(
        topLeft,
        mzDATA.Num
      )
        ? topLeft.num
        : topLeft,
      [Styles.getId("border-radius", "top-right")]: mzInstanceOf(
        topRight,
        mzDATA.Num
      )
        ? topRight.num
        : topRight,
      [Styles.getId("border-radius", "bottom-right")]: mzInstanceOf(
        bottomRight,
        mzDATA.Num
      )
        ? bottomRight.num
        : bottomRight,
      [Styles.getId("border-radius", "bottom-left")]: mzInstanceOf(
        bottomLeft,
        mzDATA.Num
      )
        ? bottomLeft.num
        : bottomLeft,
    };
  }

  static all(value = null) {
    return new this(this.setStyle(value, value, value, value));
  }

  static symmetric({ vertical = null, horizontal = null }) {
    return new this(this.setStyle(vertical, vertical, horizontal, horizontal));
  }

  static diagonal({ main = null, cross = null }) {
    return new this(
      this.setStyle(
        mzAPP.Html.dirLTR() ? main : cross,
        mzAPP.Html.dirLTR() ? cross : main,
        mzAPP.Html.dirLTR() ? main : cross,
        mzAPP.Html.dirLTR() ? cross : main
      )
    );
  }

  static TRBL({
    topLeft = null,
    topRight = null,
    bottomRight = null,
    bottomLeft = null,
  }) {
    return new this(this.setStyle(topLeft, topRight, bottomRight, bottomLeft));
  }

  static TSBE({
    topStart = null,
    topEnd = null,
    bottomEnd = null,
    bottomStart = null,
  }) {
    return new this(
      this.setStyle(
        mzAPP.Html.dirLTR() ? topStart : topEnd,
        mzAPP.Html.dirLTR() ? topEnd : topStart,
        mzAPP.Html.dirLTR() ? bottomEnd : bottomStart,
        mzAPP.Html.dirLTR() ? bottomStart : bottomEnd
      )
    );
  }
}
/*=========================*/
export class Shadow extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(
    type = null,
    color = null,
    horizontalOffset = null,
    verticalOffset = null,
    spread = null
  ) {
    return {
      [Styles.getId("box-shadow", "type")]: type == "inset" ? type : null,
      [Styles.getId("box-shadow", "color")]: mzInstanceOf(color, mzDATA.Color)
        ? color.color
        : color,
      [Styles.getId("box-shadow", "horizontal-offset")]: mzInstanceOf(
        horizontalOffset,
        mzDATA.Num
      )
        ? horizontalOffset.num
        : horizontalOffset,
      [Styles.getId("box-shadow", "vertical-offset")]: mzInstanceOf(
        verticalOffset,
        mzDATA.Num
      )
        ? verticalOffset.num
        : verticalOffset,
      [Styles.getId("box-shadow", "spread")]: mzInstanceOf(spread, mzDATA.Num)
        ? spread.num
        : spread,
    };
  }

  static set({
    inset = false,
    color = mzDATA.Color.black.opacity(0.25),
    horizontalOffset = null,
    verticalOffset = mzDATA.Num.value(1),
    spread = mzDATA.Num.value(1),
  }) {
    return new this(
      this.setStyle(
        inset ? "inset" : null,
        color,
        horizontalOffset,
        verticalOffset,
        spread
      )
    );
  }
}
/*=========================*/
export class Padding extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(top = null, right = null, bottom = null, left = null) {
    return {
      [Styles.getId("padding", "top")]: mzInstanceOf(top, mzDATA.Num)
        ? top.num
        : top,
      [Styles.getId("padding", "right")]: mzInstanceOf(right, mzDATA.Num)
        ? right.num
        : right,
      [Styles.getId("padding", "bottom")]: mzInstanceOf(bottom, mzDATA.Num)
        ? bottom.num
        : bottom,
      [Styles.getId("padding", "left")]: mzInstanceOf(left, mzDATA.Num)
        ? left.num
        : left,
    };
  }

  static all(value = null) {
    return new this(this.setStyle(value, value, value, value));
  }

  static symmetric({ vertical = null, horizontal = null }) {
    return new this(this.setStyle(vertical, horizontal, vertical, horizontal));
  }

  static TRBL({ top = null, right = null, bottom = null, left = null }) {
    return new this(this.setStyle(top, right, bottom, left));
  }

  static TSBE({ top = null, start = null, bottom = null, end = null }) {
    return new this(
      this.setStyle(
        top,
        mzAPP.Html.dirLTR() ? end : start,
        bottom,
        mzAPP.Html.dirLTR() ? start : end
      )
    );
  }
}
/*=========================*/
export class Margin extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(top = null, right = null, bottom = null, left = null) {
    return {
      [Styles.getId("margin", "top")]: mzInstanceOf(top, mzDATA.Num)
        ? top.num
        : top,
      [Styles.getId("margin", "right")]: mzInstanceOf(right, mzDATA.Num)
        ? right.num
        : right,
      [Styles.getId("margin", "bottom")]: mzInstanceOf(bottom, mzDATA.Num)
        ? bottom.num
        : bottom,
      [Styles.getId("margin", "left")]: mzInstanceOf(left, mzDATA.Num)
        ? left.num
        : left,
    };
  }

  static all(value = null) {
    return new this(this.setStyle(value, value, value, value));
  }

  static symmetric({ vertical = null, horizontal = null }) {
    return new this(this.setStyle(vertical, horizontal, vertical, horizontal));
  }

  static TRBL({ top = null, right = null, bottom = null, left = null }) {
    return new this(this.setStyle(top, right, bottom, left));
  }

  static TSBE({ top = null, start = null, bottom = null, end = null }) {
    return new this(
      this.setStyle(
        top,
        mzAPP.Html.dirLTR() ? end : start,
        bottom,
        mzAPP.Html.dirLTR() ? start : end
      )
    );
  }
}
/*=========================*/
export class FlexFlow extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(direction = null) {
    return {
      [Styles.getId("flex-flow", "direction")]: direction,
    };
  }

  static row = new this(this.setStyle("row"));
  static column = new this(this.setStyle("column"));
  static rowReverse = new this(this.setStyle("row-reverse"));
  static columnReverse = new this(this.setStyle("column-reverse"));
}
/*=========================*/
export class FlexWrap extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(wrap = null) {
    return {
      [Styles.getId("flex-flow", "wrap")]: wrap,
    };
  }

  static wrap = new this(this.setStyle("wrap"));
  static nowrap = new this(this.setStyle("nowrap"));
}
/*=========================*/
export class ContentMainAlign extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(alignment = null) {
    return {
      [Styles.getId("justify-content")]: alignment,
    };
  }

  static start = new this(this.setStyle("flex-start"));
  static end = new this(this.setStyle("flex-end"));
  static center = new this(this.setStyle("center"));
  static around = new this(this.setStyle("space-around"));
  static between = new this(this.setStyle("space-between"));
  static evenly = new this(this.setStyle("space-evenly"));
}
/*=========================*/
export class ContentCrossAlign extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(alignment = null) {
    return {
      [Styles.getId("align-content")]: alignment,
    };
  }

  static start = new this(this.setStyle("flex-start"));
  static end = new this(this.setStyle("flex-end"));
  static center = new this(this.setStyle("center"));
  static stretch = new this(this.setStyle("stretch"));
  static around = new this(this.setStyle("space-around"));
  static between = new this(this.setStyle("space-between"));
  static evenly = new this(this.setStyle("space-evenly"));
}
/*=========================*/
export class ItemMainAlign extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(alignment = null) {
    return {
      [Styles.getId("justify-items")]: alignment,
    };
  }

  static start = new this(this.setStyle("flex-start"));
  static end = new this(this.setStyle("flex-end"));
  static center = new this(this.setStyle("center"));
  static baseline = new this(this.setStyle("baseline"));
  static stretch = new this(this.setStyle("stretch"));
  static around = new this(this.setStyle("space-around"));
  static between = new this(this.setStyle("space-between"));
  static evenly = new this(this.setStyle("space-evenly"));
}
/*=========================*/
export class ItemCrossAlign extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(alignment = null) {
    return {
      [Styles.getId("align-items")]: alignment,
    };
  }

  static start = new this(this.setStyle("flex-start"));
  static end = new this(this.setStyle("flex-end"));
  static center = new this(this.setStyle("center"));
  static baseline = new this(this.setStyle("baseline"));
  static stretch = new this(this.setStyle("stretch"));
}
/*=========================*/
export class FlexExpand extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(grow = null, shrink = null, basis = null) {
    return {
      [Styles.getId("flex", "grow")]: grow,
      [Styles.getId("flex", "shrink")]: shrink,
      [Styles.getId("flex", "basis")]: mzInstanceOf(basis, mzDATA.Num)
        ? basis.num
        : basis,
    };
  }
  static setClasses(mzFlexExpand = false) {
    return {
      mzFlexExpand: mzFlexExpand,
    };
  }

  static set({ grow = 1, shrink = 0, basis = null }) {
    return new this(this.setStyle(grow, shrink, basis), this.setClasses(true));
  }
}
/*=========================*/
export class FlexGap extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(row = null, column = null) {
    return {
      [Styles.getId("row-gap")]: mzInstanceOf(column, mzDATA.Num)
        ? column.num
        : column,
      [Styles.getId("column-gap")]: mzInstanceOf(row, mzDATA.Num)
        ? row.num
        : row,
    };
  }

  static set({ row = 0, column = 0 }) {
    return new this(this.setStyle(row, column));
  }
}
/*=========================*/
export class GridRows extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(template = null) {
    return {
      [Styles.getId("grid-template-rows")]: template,
    };
  }

  static repeat({ rows = 1, height = mzDATA.Num.auto }) {
    return new this(
      this.setStyle(
        `repeat(${rows}, ${
          mzInstanceOf(height, mzDATA.Num) ? height.num : height
        }`
      )
    );
  }
}
/*=========================*/
export class GridColumns extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(template = null) {
    return {
      [Styles.getId("grid-template-columns")]: template,
    };
  }

  static repeat({ columns = 1, width = mzDATA.Num.auto }) {
    return new this(
      this.setStyle(
        `repeat(${columns}, ${
          mzInstanceOf(width, mzDATA.Num) ? width.num : width
        }`
      )
    );
  }
}
/*=========================*/
export class GridItemRows extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(rows = null) {
    return {
      [Styles.getId("grid-row")]: rows,
    };
  }

  static set(start = 1, end = 1) {
    return new this(this.setStyle(`${start}/${end}`));
  }
}
/*=========================*/
export class GridItemColumns extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(columns = null) {
    return {
      [Styles.getId("grid-column")]: columns,
    };
  }

  static set(start = 1, end = 1) {
    return new this(this.setStyle(`${start}/${end}`));
  }
}
/*=========================*/
export class ObjectFit extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(fit = null) {
    return {
      [Styles.getId("object-fit")]: fit,
    };
  }

  static cover = new this(this.setStyle("cover"));
  static contain = new this(this.setStyle("contain"));
  static fill = new this(this.setStyle("fill"));
  static scaleDown = new this(this.setStyle("scale-down"));
}
/*=========================*/
export class ObjectPosition extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(position = null) {
    return {
      [Styles.getId("object-position")]: position,
    };
  }

  static top = new this(this.setStyle("top"));
  static bottom = new this(this.setStyle("bottom"));
  static center = new this(this.setStyle("center"));
  static left = new this(this.setStyle("left"));
  static right = new this(this.setStyle("right"));
}
/*=========================*/
export class PointerEvents extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(events = null) {
    return {
      [Styles.getId("pointer-Events")]: events,
    };
  }

  static auto = new this(this.setStyle("auto"));
  static none = new this(this.setStyle("none"));
}
/*=========================*/
export class Cursor extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(cursor = null) {
    return {
      [Styles.getId("cursor")]: cursor,
    };
  }

  static custom({ url = null, x = null, y = null }) {
    new this(
      this.setStyle(
        `url(${url}) ${mzInstanceOf(x, mzDATA.Num) ? x.num : x} ${
          mzInstanceOf(y, mzDATA.Num) ? y.num : y
        }, default`
      )
    );
  }

  static default = new this(this.setStyle("default"));
  static contextMenu = new this(this.setStyle("context-menu"));
  static help = new this(this.setStyle("help"));
  static pointer = new this(this.setStyle("pointer"));
  static progress = new this(this.setStyle("progress"));
  static wait = new this(this.setStyle("wait"));
  static cell = new this(this.setStyle("cell"));
  static crosshair = new this(this.setStyle("crosshair"));
  static text = new this(this.setStyle("text"));
  static verticalText = new this(this.setStyle("vertical-text"));
  static alias = new this(this.setStyle("alias"));
  static copy = new this(this.setStyle("copy"));
  static move = new this(this.setStyle("move"));
  static noDrop = new this(this.setStyle("no-drop"));
  static notAllowed = new this(this.setStyle("not-allowed"));
  static grab = new this(this.setStyle("grab"));
  static grabbing = new this(this.setStyle("grabbing"));
  static allScroll = new this(this.setStyle("all-scroll"));
  static colResize = new this(this.setStyle("col-resize"));
  static rowResize = new this(this.setStyle("row-resize"));
  static northResize = new this(this.setStyle("n-resize"));
  static eastResize = new this(this.setStyle("e-resize"));
  static southResize = new this(this.setStyle("s-resize"));
  static westResize = new this(this.setStyle("w-resize"));
  static northEastResize = new this(this.setStyle("ne-resize"));
  static northWestResize = new this(this.setStyle("nw-resize"));
  static southEastResize = new this(this.setStyle("se-resize"));
  static southWestResize = new this(this.setStyle("sw-resize"));
  static horizontalResize = new this(this.setStyle("ew-resize"));
  static verticalResize = new this(this.setStyle("ns-resize"));
  static diagonalStartResize = new this(this.setStyle("nwse-resize"));
  static diagonalEndResize = new this(this.setStyle("nesw-resize"));
  static zoomIn = new this(this.setStyle("zoom-in"));
  static zoomOut = new this(this.setStyle("zoom-out"));
}
/*=========================*/
export class UserSelect extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(select = null) {
    return {
      [Styles.getId("user-select")]: select,
    };
  }

  static all = new this(this.setStyle("all"));
  static text = new this(this.setStyle("text"));
  static none = new this(this.setStyle("none"));
}
/*=========================*/
export class Opacity extends Style {
  constructor(styles = {}, classes = {}) {
    super();
    this.styles = styles;
    this.classes = classes;
  }

  static setStyle(opacity = null) {
    return {
      [Styles.getId("opacity")]: opacity,
    };
  }

  static set(opacity = 1) {
    return new this(this.setStyle(opacity));
  }
}
