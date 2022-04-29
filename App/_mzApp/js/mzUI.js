/*=========================*/
class mzUI {
  static num(num, by = 1) {
    if (by == 0) return num.toFixed(2);
    return (num / (10 * by)).toFixed(2);
  }

  styles = {};
  classes = {};

  constructor({ styles, classes }) {
    this.styles = styles;
    this.classes = classes;
  }
}
/*=========================*/
class mzSize extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { width: null, height: null },
  });

  static value(width = null, height = null) {
    return new mzUI({
      styles: {
        width: width ? `${mzUI.num(width)}rem` : null,
        height: height ? `${mzUI.num(height)}rem` : null,
      },
    });
  }

  static percent(width = null, height = null) {
    return new mzUI({
      styles: {
        width: width ? `${mzUI.num(width)}%` : null,
        height: height ? `${mzUI.num(height)}%` : null,
      },
    });
  }
}
/*=========================*/
class mzPadding extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { padding: null },
  });

  static all(value = null) {
    return new mzUI({
      styles: { padding: `${mzUI.num(value)}rem` },
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: {
        padding: `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`,
      },
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: {
        padding: `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`,
      },
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: {
        padding:
          mzApp.getDIR() == "ltr"
            ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(start)}rem`
            : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(end)}rem`,
      },
    });
  }
}
/*=========================*/
class mzMargin extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { margin: null },
  });

  static all(value = null) {
    return new mzUI({
      styles: { margin: `${mzUI.num(value)}rem` },
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: { margin: `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem` },
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: {
        margin: `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`,
      },
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: {
        margin:
          mzApp.getDIR() == "ltr"
            ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(start)}rem`
            : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(end)}rem`,
      },
    });
  }
}
/*=========================*/
class mzShadow extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { boxShadow: null },
  });

  static set(elevation = 1, color = "rgba(0,0,0,0.25)") {
    return new mzUI({
      styles: {
        boxShadow: `0 ${mzUI.num(elevation, 2)}rem ${mzUI.num(
          elevation,
          0.6
        )}rem ${color}`,
      },
    });
  }

  static inset(elevation = 1, color = "rgba(0,0,0,0.25)") {
    return new mzUI({
      styles: {
        boxShadow: `inset 0 ${mzUI.num(elevation, 2)}rem ${mzUI.num(
          elevation,
          0.6
        )}rem ${color}`,
      },
    });
  }
}
/*=========================*/
class mzBorder extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { border: null, borderWidth: null },
  });

  static all(
    value = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: { border: `${mzUI.num(value)}rem ${style} ${color}` },
    });
  }

  static symmetric(
    vertical = null,
    horizontal = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: {
        border: `0 ${style} ${color}`,
        borderWidth: `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`,
      },
    });
  }

  static TRBL(
    top = null,
    right = null,
    bottom = null,
    left = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: {
        border: `0 ${style} ${color}`,
        borderWidth: `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`,
      },
    });
  }

  static TRBL(
    top = null,
    start = null,
    bottom = null,
    end = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: {
        border: `0 ${style} ${color}`,
        borderWidth:
          mzApp.getDIR() == "ltr"
            ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(start)}rem`
            : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(end)}rem`,
      },
    });
  }
}
/*=========================*/
class mzRadius extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { borderRadius: null },
  });

  static all(value = null) {
    return new mzUI({
      styles: { borderRadius: `${mzUI.num(value)}rem` },
    });
  }

  static rounded(value = null) {
    return new mzUI({
      styles: { borderRadius: `${value}%` },
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: {
        borderRadius: `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`,
      },
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: {
        borderRadius: `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`,
      },
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: {
        borderRadius:
          mzApp.getDIR() == "ltr"
            ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(start)}rem`
            : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
                bottom
              )}rem ${mzUI.num(end)}rem`,
      },
    });
  }
}
/*=========================*/
class mzFlexExpand extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { flex: null },
    classes: { mzFlexExpand: false },
  });

  static set(grow = null, shrink = null, basis = null) {
    return new mzUI({
      styles: { flex: `${grow || 1} ${shrink || 0} ${mzUI.num(basis)}rem` },
      classes: { mzFlexExpand: true },
    });
  }
}
/*=========================*/
class mzColor extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { color: null },
  });

  static set(color = null) {
    return new mzUI({ styles: { color: color } });
  }
}

/*=========================*/
class mzBackground extends mzUI {
  constructor() {
    super();
  }

  static none = new mzUI({
    styles: { backgroundColor: null },
  });

  static set(color = null) {
    return new mzUI({ styles: { backgroundColor: color } });
  }
}
