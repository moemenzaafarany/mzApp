/*=========================*/
class mzUI {
  static num(num, by = 1) {
    if (by == 0) return num.toFixed(2);
    return (num / (10 * by)).toFixed(2);
  }

  styles = {};
  classes = {};
  apply = null;

  constructor() {}
}
/*=========================*/
class mzSize extends mzUI {
  constructor(width = null, height = null) {
    super();
    if (width) this.styles["width"] = `${mzUI.num(width)}rem`;
    if (height) this.styles["height"] = `${mzUI.num(height)}rem`;
  }

  percent(width = null, height = null) {
    if (width) this.styles["width"] = `${mzUI.num(width, 0)}%`;
    if (height) this.styles["height"] = `${mzUI.num(height, 0)}%`;
    return this;
  }

  none() {
    this.styles["width"] = null;
    this.styles["height"] = null;
    return this;
  }
}
/*=========================*/
class mzPadding extends mzUI {
  constructor(all = null) {
    super();
    if (all) this.styles["padding"] = `${mzUI.num(all)}rem`;
  }

  symmetric(vertical = null, horizontal = null) {
    this.styles["padding"] = `${mzUI.num(vertical)}rem ${mzUI.num(
      horizontal
    )}rem`;
    return this;
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.styles["padding"] = `${mzUI.num(top)}rem ${mzUI.num(
      right
    )}rem ${mzUI.num(bottom)}rem ${mzUI.num(left)}rem`;
    return this;
  }

  none() {
    this.styles["padding"] = null;
    return this;
  }
}
/*=========================*/
class mzMargin extends mzUI {
  constructor(all = null) {
    super();
    if (all) this.styles["margin"] = `${mzUI.num(all)}rem`;
  }

  symmetric(vertical = null, horizontal = null) {
    this.styles["margin"] = `${mzUI.num(vertical)}rem ${mzUI.num(
      horizontal
    )}rem`;
    return this;
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.styles["margin"] = `${mzUI.num(top)}rem ${mzUI.num(
      right
    )}rem ${mzUI.num(bottom)}rem ${mzUI.num(left)}rem`;
    return this;
  }

  none() {
    this.styles["margin"] = null;
    return this;
  }
}
/*=========================*/
class mzShadow extends mzUI {
  constructor(elevation = 1, color = "rgba(0,0,0,0.25)") {
    super();
    this.styles["box-shadow"] = `0 ${mzUI.num(elevation, 2)}rem ${mzUI.num(
      elevation,
      0.6
    )}rem ${color}`;
  }

  inset(elevation = 1, color = "rgba(0,0,0,0.25)") {
    this.styles["box-shadow"] = `inset 0 ${mzUI.num(
      elevation,
      2
    )}rem ${mzUI.num(elevation, 0.6)}rem ${color}`;
    return this;
  }

  none() {
    this.styles["box-shadow"] = null;
    return this;
  }
}
/*=========================*/
class mzBorder extends mzUI {
  constructor(
    all = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    super();
    this.styles["border"] = `${mzUI.num(all)}rem ${style} ${color}`;
  }

  symmetric(
    vertical = null,
    horizontal = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    this.styles["border"] = `0 ${style} ${color}`;
    this.styles["border-width"] = `${mzUI.num(vertical)}rem ${mzUI.num(
      horizontal
    )}rem`;
    return this;
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.styles["border"] = `0 ${style} ${color}`;
    this.styles["border-width"] = `${mzUI.num(top)}rem ${mzUI.num(
      right
    )}rem ${mzUI.num(bottom)}rem ${mzUI.num(left)}rem`;
    return this;
  }

  none() {
    this.styles["border"] = null;
    this.styles["border-width"] = null;
    return this;
  }
}
/*=========================*/
class mzCorner extends mzUI {
  constructor(all = null) {
    super();
    this.styles["border-radius"] = `${mzUI.num(all)}rem`;
  }

  rounded(all = null) {
    this.styles["border-radius"] = `${all}%`;
    return this;
  }

  symmetric(vertical = null, horizontal = null) {
    this.styles["border-radius"] = `${mzUI.num(vertical)}rem `;
    this.styles["border-radius"] += `${mzUI.num(horizontal)}rem`;
    return this;
  }

  TLBR(top = null, right = null, bottom = null, left = null) {
    this.styles["border-radius"] = `${mzUI.num(top)}rem `;
    this.styles["border-radius"] += `${mzUI.num(right)}rem  `;
    this.styles["border-radius"] += `${mzUI.num(bottom)}rem`;
    this.styles["border-radius"] += `${mzUI.num(left)}rem`;
    return this;
  }

  none() {
    this.styles["border-radius"] = null;
    return this;
  }
}
/*=========================*/
class mzFlexExpand extends mzUI {
  constructor(grow = null, shrink = null, basis = null) {
    super();
    this.styles["flex"] = `${grow || 1} `;
    this.styles["flex"] += `${shrink || 0} `;
    this.styles["flex"] += `${mzUI.num(basis)}rem`;
    this.classes["mzFlexExpand"] = true;
  }

  none() {
    this.styles["flex"] = null;
    this.classes["mzFlexExpand"] = false;
    return this;
  }
}
/*=========================*/
class mzColor extends mzUI {
  constructor(color = null, background = null) {
    super();
    this.styles["color"] = color;
    this.styles["background-color"] = background;
  }

  none() {
    this.styles["color"] = null;
    this.styles["background-color"] = null;
    return this;
  }

  static fromHEX = (hexColor, opacity = 1) => {
    if (opacity < 1) {
      let result; //= "/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i".exec(hexColor);
      if (!result) return hexColor;
      result = [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ];
      return `rgba(${result[0]},${result[1]},${result[2]},${opacity})`;
    } else return hexColor;
  };
}
