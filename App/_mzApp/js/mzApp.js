//========================== mzApp
class mzApp {
  static mainWidget = null;
  // variables
  static routes;
  static html = {
    tab: {
      title: null,
      icon: null,
    },
    root: null,
    modals: null,
  };
  // constructor
  constructor({ routes = null }) {
    window.onload = () => {
      mzApp.html.tab.title = document.title;
      mzApp.html.tab.icon = document.getElementById("mzapp-tab-icon");
      mzApp.html.root = document.querySelector("body mzapp-root");
      mzApp.html.modals = document.querySelector("body mzapp-modals");
      mzApp.html.modals.onclick = () => {
        if (mzApp.html.modals.classList.contains("dismissible"))
          mzApp.hideModal();
      };
      //
      mzApp.routes = routes;
      //
      mzApp.runApp(mzApp.routes.getWidget());
    };
  }
  //
  static runApp(child) {
    mzApp.html.root.innerHTML = "";
    mzApp.html.root.append(child.state());
  }
  //
  static showModal({ child = null, barrierDismissible = false }) {
    mzApp.html.modals.innerHTML = "";
    mzApp.html.modals.classList.add("show");
    if (barrierDismissible) mzApp.html.modals.classList.add("dismissible");
    mzApp.html.modals.append(child.state());
  }
  //
  static hideModal() {
    mzApp.html.modals.classList.remove("show");
    mzApp.html.modals.classList.remove("dismissible");
    mzApp.html.modals.innerHTML = "";
  }
  //
  static changeMetadata({ title, icon }) {
    if (typeof title !== "undefined") document.title = title;
    if (typeof icon !== "undefined")
      mzApp.html.tab.icon.setAttribute("href", icon);
  }
}
//========================== mzRoutes
class mzRoutes {
  //
  home;
  routes;
  fallback;
  currentRoute;
  //
  constructor({ home = "/", routes = {}, fallback = null }) {
    this.home = home;
    this.routes = routes;
    this.fallback = fallback;
    this.currentRoute = document.documentElement.getAttribute("mzapp-route");
  }
  //
  getWidget() {
    let route = this.currentRoute;
    if (this.routes[route]) return this.routes[route];
    return this.fallback;
  }
  //
  navigate(route) {
    let url = window.location.href;
    url = url.slice(0, -this.currentRoute.length) + route;
    this.currentRoute = route;

    window.history.replaceState(null, document.title, url);

    mzApp.runApp(this.getWidget());
  }
}
//========================== mzData
class mzData {
  static borderType = {
    solid: "solid",
    dotted: "dotted",
    dashed: "dashed",
    double: "double",
  };
  static textAlign = {
    start: "start",
    end: "end",
    center: "center",
    justify: "justify",
  };
  static textOverflow = {
    wrap: "wrap",
    clip: "clip",
    ellipses: "ellipses",
  };
  static flexDirection = {
    row: "row",
    column: "column",
    reverseRow: "row-reverse",
    reverseColumn: "column-reverse",
  };
  static flexMainAlign = {
    start: "main-start",
    end: "main-start",
    center: "main-center",
    baseline: "main-baseline",
    stretch: "main-stretch",
    around: "main-around",
    between: "main-between",
    evenly: "main-evenly",
  };
  static flexCrossAlign = {
    start: "cross-start",
    end: "cross-start",
    center: "cross-center",
    baseline: "cross-baseline",
    stretch: "cross-stretch",
  };
  static stackMainAlign = {
    start: "main-start",
    end: "main-start",
    center: "main-center",
    baseline: "main-baseline",
  };
  static stackCrossAlign = {
    start: "cross-start",
    end: "cross-start",
    center: "cross-center",
    baseline: "cross-baseline",
  };
  static objectFit = {
    cover: "cover",
    contain: "contain",
    fill: "fill",
    scaleDown: "scale-down",
  };
  static objectPosition = {
    center: "center",
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
  };
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
    IndianRed: "#CD5C5C",
    Indigo: "#4B0082",
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
}
