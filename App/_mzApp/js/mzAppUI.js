/*=========================*/
class mzAppUI {
  static icons = {
    fontAwesomeBrands: [],
    fontAwesomeRegular: [],
    fontAwesomeSolid: [],
  };
}
/*=========================*/
class mzSize extends mzAppUI {
  d = {};

  constructor(width = null, height = null) {
    super();
    if (width) this.d.w = `${(width / 10).toFixed(2)}rem`;
    if (height) this.d.h = `${(height / 10).toFixed(2)}rem`;
  }

  percent(width = null, height = null) {
    if (width) this.d.w = `${width.toFixed(2)}%`;
    if (height) this.d.h = `${height.toFixed(2)}%`;
  }

  set(el) {
    if (this.d.w) el.style.width = this.d.w;
    if (this.d.h) el.style.height = this.d.h;
  }
}
/*=========================*/
class mzPadding extends mzAppUI {
  d = {};

  constructor(allSides = null) {
    super();
    this.d.top = (allSides / 10).toFixed(2);
    this.d.right = (allSides / 10).toFixed(2);
    this.d.bottom = (allSides / 10).toFixed(2);
    this.d.left = (allSides / 10).toFixed(2);
  }

  symmetric(vertical = null, horizontal = null) {
    this.d.top = (vertical / 10).toFixed(2);
    this.d.right = (horizontal / 10).toFixed(2);
    this.d.bottom = (vertical / 10).toFixed(2);
    this.d.left = (horizontal / 10).toFixed(2);
    return this;
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.d.top = (top / 10).toFixed(2);
    this.d.right = (right / 10).toFixed(2);
    this.d.bottom = (bottom / 10).toFixed(2);
    this.d.left = (left / 10).toFixed(2);
    return this;
  }

  set(el) {
    el.style.padding = `${this.d.top}rem ${this.d.right}rem ${this.d.bottom}rem ${this.d.left}rem`;
  }
}
/*=========================*/
class mzMargin extends mzAppUI {
  d = {};

  constructor(allSides = null) {
    super();
    this.d.top = (allSides / 10).toFixed(2);
    this.d.right = (allSides / 10).toFixed(2);
    this.d.bottom = (allSides / 10).toFixed(2);
    this.d.left = (allSides / 10).toFixed(2);
  }

  symmetric(vertical = null, horizontal = null) {
    this.d.top = (vertical / 10).toFixed(2);
    this.d.right = (horizontal / 10).toFixed(2);
    this.d.bottom = (vertical / 10).toFixed(2);
    this.d.left = (horizontal / 10).toFixed(2);
    return this;
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.d.top = (top / 10).toFixed(2);
    this.d.right = (right / 10).toFixed(2);
    this.d.bottom = (bottom / 10).toFixed(2);
    this.d.left = (left / 10).toFixed(2);
    return this;
  }

  set(el) {
    el.style.margin = `${this.d.top}rem ${this.d.right}rem ${this.d.bottom}rem ${this.d.left}rem`;
  }
}
/*=========================*/
class mzShadow extends mzAppUI {
  d = {};

  constructor(elevation = 1, color = "rgba(0,0,0,0.25)") {
    super();
    this.d.elevation = (elevation / 20).toFixed(2);
    this.d.spread = (elevation / 15).toFixed(2);
    this.d.color = color;
  }

  set(el) {
    el.style.boxShadow = `0 ${this.d.elevation}rem ${this.d.spread}rem 0 ${this.d.color}`;
  }
}
/*=========================*/
class mzBorder extends mzAppUI {
  static type = {
    solid: "solid",
    dotted: "dotted",
    dashed: "dashed",
    double: "double",
  };
  //
  d = {};
  //
  constructor(
    allSides = null,
    style = mzBorder.types.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    super();
    this.d.top = (allSides / 10).toFixed(2);
    this.d.right = (allSides / 10).toFixed(2);
    this.d.bottom = (allSides / 10).toFixed(2);
    this.d.left = (allSides / 10).toFixed(2);
    this.d.style = style;
    this.d.color = color;
  }
  //
  symmetric(
    vertical = null,
    horizontal = null,
    style = mzBorder.types.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    this.d.top = (vertical / 10).toFixed(2);
    this.d.right = (horizontal / 10).toFixed(2);
    this.d.bottom = (vertical / 10).toFixed(2);
    this.d.left = (horizontal / 10).toFixed(2);
    this.d.style = style;
    this.d.color = color;
    return this;
  }

  TLBR(
    top = null,
    right = null,
    bottom = null,
    left = null,
    style = mzBorder.types.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    this.d.top = (top / 10).toFixed(2);
    this.d.right = (right / 10).toFixed(2);
    this.d.bottom = (bottom / 10).toFixed(2);
    this.d.left = (left / 10).toFixed(2);
    this.d.style = style;
    this.d.color = color;
    return this;
  }

  set(el) {
    el.style.borderTopWidth = `${this.d.top}rem`;
    el.style.borderRightWidth = `${this.d.right}rem`;
    el.style.borderBottomWidth = `${this.d.bottom}rem`;
    el.style.borderLeftWidth = `${this.d.left}rem`;
    el.style.borderStyle = this.d.style;
    el.style.borderColor = this.d.color;
  }
}
/*=========================*/
class mzCorner extends mzAppUI {
  d = {};

  constructor(allSides = null) {
    super();
    this.d.top = (allSides / 10).toFixed(2);
    this.d.right = (allSides / 10).toFixed(2);
    this.d.bottom = (allSides / 10).toFixed(2);
    this.d.left = (allSides / 10).toFixed(2);
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.d.top = (top / 10).toFixed(2);
    this.d.right = (right / 10).toFixed(2);
    this.d.bottom = (bottom / 10).toFixed(2);
    this.d.left = (left / 10).toFixed(2);
    return this;
  }

  set(el) {
    el.style.borderRadius = `${this.d.top}rem ${this.d.right}rem ${this.d.bottom}rem ${this.d.left}rem`;
  }
}
/*=========================*/
class mzFlexAlign extends mzAppUI {
  static main = {
    start: "main-start",
    end: "main-start",
    center: "main-center",
    baseline: "main-baseline",
    stretch: "main-stretch",
    around: "main-around",
    between: "main-between",
    evenly: "main-evenly",
  };
  static cross = {
    start: "cross-start",
    end: "cross-start",
    center: "cross-center",
    baseline: "cross-baseline",
    stretch: "cross-stretch",
  };
  //
  d = {};
  //
  constructor(
    mainAxis = mzFlexAlign.main.start,
    crossAxis = mzFlexAlign.cross.start
  ) {
    super();
    this.d.main = mainAxis;
    this.d.cross = crossAxis;
  }
  //
  set(el) {
    if (this.d.main) el.classList.add(this.d.main);
    if (this.d.cross) el.classList.add(this.d.cross);
  }
}
/*=========================*/
class mzFlexExpand extends mzAppUI {
  d = {};
  //
  constructor(grow = null, shrink = null, basis = null) {
    super();
    this.d.grow = grow || 1;
    this.d.shrink = shrink || 0;
    this.d.basis = (basis / 10).toFixed(2);
  }
  //
  set(el) {
    el.style.flex = `${this.d.grow} ${this.d.shrink} ${this.d.basis}rem`;
    el.classList.add("mzFlexExpand");
  }
}
/*=========================*/
class mzFit extends mzAppUI {
  static fit = {
    cover: "cover",
    contain: "contain",
    fill: "fill",
    scaleDown: "scale-down",
  };
  static position = {
    center: "center",
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
  };
  //
  d = {};
  //
  constructor(fit = mzFit.fit.contain, position = null) {
    super();
    this.d.fit = fit;
    this.d.position = position;
  }
  //
  set(el) {
    if (this.d.fit) el.classList.add(this.d.fit);
    if (this.d.position) el.classList.add(this.d.position);
  }
}
/*=========================*/
class mzColor extends mzAppUI {
  static colors = {
    AliceBlue: "#F0F8FF",
    AntiqueWhite: "#FAEBD7",
    Aqua: "#00FFFF",
    Aquamarine: "#7FFFD4",
    Azure: "#F0FFFF",
    Beige: "#F5F5DC",
    Bisque: "#FFE4C4",
    Black: "#000000",
    BlanchedAlmond: "#FFEBCD",
    Blue: "#0000FF",
    BlueViolet: "#8A2BE2",
    Brown: "#A52A2A",
    BurlyWood: "#DEB887",
    CadetBlue: "#5F9EA0",
    Chartreuse: "#7FFF00",
    Chocolate: "#D2691E",
    Coral: "#FF7F50",
    CornflowerBlue: "#6495ED",
    Cornsilk: "#FFF8DC",
    Crimson: "#DC143C",
    Cyan: "#00FFFF",
    DarkBlue: "#00008B",
    DarkCyan: "#008B8B",
    DarkGoldenRod: "#B8860B",
    DarkGray: "#A9A9A9",
    DarkGrey: "#A9A9A9",
    DarkGreen: "#006400",
    DarkKhaki: "#BDB76B",
    DarkMagenta: "#8B008B",
    DarkOliveGreen: "#556B2F",
    DarkOrange: "#FF8C00",
    DarkOrchid: "#9932CC",
    DarkRed: "#8B0000",
    DarkSalmon: "#E9967A",
    DarkSeaGreen: "#8FBC8F",
    DarkSlateBlue: "#483D8B",
    DarkSlateGray: "#2F4F4F",
    DarkSlateGrey: "#2F4F4F",
    DarkTurquoise: "#00CED1",
    DarkViolet: "#9400D3",
    DeepPink: "#FF1493",
    DeepSkyBlue: "#00BFFF",
    DimGray: "#696969",
    DimGrey: "#696969",
    DodgerBlue: "#1E90FF",
    FireBrick: "#B22222",
    FloralWhite: "#FFFAF0",
    ForestGreen: "#228B22",
    Fuchsia: "#FF00FF",
    Gainsboro: "#DCDCDC",
    GhostWhite: "#F8F8FF",
    Gold: "#FFD700",
    GoldenRod: "#DAA520",
    Gray: "#808080",
    Grey: "#808080",
    Green: "#008000",
    GreenYellow: "#ADFF2F",
    HoneyDew: "#F0FFF0",
    HotPink: "#FF69B4",
    "IndianRed ": "#CD5C5C",
    "Indigo ": "#4B0082",
    Ivory: "#FFFFF0",
    Khaki: "#F0E68C",
    Lavender: "#E6E6FA",
    LavenderBlush: "#FFF0F5",
    LawnGreen: "#7CFC00",
    LemonChiffon: "#FFFACD",
    LightBlue: "#ADD8E6",
    LightCoral: "#F08080",
    LightCyan: "#E0FFFF",
    LightGoldenRodYellow: "#FAFAD2",
    LightGray: "#D3D3D3",
    LightGrey: "#D3D3D3",
    LightGreen: "#90EE90",
    LightPink: "#FFB6C1",
    LightSalmon: "#FFA07A",
    LightSeaGreen: "#20B2AA",
    LightSkyBlue: "#87CEFA",
    LightSlateGray: "#778899",
    LightSlateGrey: "#778899",
    LightSteelBlue: "#B0C4DE",
    LightYellow: "#FFFFE0",
    Lime: "#00FF00",
    LimeGreen: "#32CD32",
    Linen: "#FAF0E6",
    Magenta: "#FF00FF",
    Maroon: "#800000",
    MediumAquaMarine: "#66CDAA",
    MediumBlue: "#0000CD",
    MediumOrchid: "#BA55D3",
    MediumPurple: "#9370DB",
    MediumSeaGreen: "#3CB371",
    MediumSlateBlue: "#7B68EE",
    MediumSpringGreen: "#00FA9A",
    MediumTurquoise: "#48D1CC",
    MediumVioletRed: "#C71585",
    MidnightBlue: "#191970",
    MintCream: "#F5FFFA",
    MistyRose: "#FFE4E1",
    Moccasin: "#FFE4B5",
    NavajoWhite: "#FFDEAD",
    Navy: "#000080",
    OldLace: "#FDF5E6",
    Olive: "#808000",
    OliveDrab: "#6B8E23",
    Orange: "#FFA500",
    OrangeRed: "#FF4500",
    Orchid: "#DA70D6",
    PaleGoldenRod: "#EEE8AA",
    PaleGreen: "#98FB98",
    PaleTurquoise: "#AFEEEE",
    PaleVioletRed: "#DB7093",
    PapayaWhip: "#FFEFD5",
    PeachPuff: "#FFDAB9",
    Peru: "#CD853F",
    Pink: "#FFC0CB",
    Plum: "#DDA0DD",
    PowderBlue: "#B0E0E6",
    Purple: "#800080",
    RebeccaPurple: "#663399",
    Red: "#FF0000",
    RosyBrown: "#BC8F8F",
    RoyalBlue: "#4169E1",
    SaddleBrown: "#8B4513",
    Salmon: "#FA8072",
    SandyBrown: "#F4A460",
    SeaGreen: "#2E8B57",
    SeaShell: "#FFF5EE",
    Sienna: "#A0522D",
    Silver: "#C0C0C0",
    SkyBlue: "#87CEEB",
    SlateBlue: "#6A5ACD",
    SlateGray: "#708090",
    SlateGrey: "#708090",
    Snow: "#FFFAFA",
    SpringGreen: "#00FF7F",
    SteelBlue: "#4682B4",
    Tan: "#D2B48C",
    Teal: "#008080",
    Thistle: "#D8BFD8",
    Tomato: "#FF6347",
    Turquoise: "#40E0D0",
    Violet: "#EE82EE",
    Wheat: "#F5DEB3",
    White: "#FFFFFF",
    WhiteSmoke: "#F5F5F5",
    Yellow: "#FFFF00",
    YellowGreen: "#9ACD32",
  };
  static from = (hexColor, opacity = 1) => {
    if (opacity < 1) {
      let result; //= "/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i".exec(hexColor);
      if (!result) return hexColor;
      result = [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ];
      console.log(`rgba(${result[0]},${result[1]},${result[2]},${opacity})`);
      return `rgba(${result[0]},${result[1]},${result[2]},${opacity})`;
    } else return hexColor;
  };
  //
  d = {};
  //
  constructor(color = null, background = null) {
    super();
    this.d.color = color;
    this.d.background = background;
  }
  //
  set(el) {
    if (this.d.color) el.style.color = this.d.color;
    if (this.d.background) el.style.backgroundColor = this.d.background;
  }
}
