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

  static _styles(wh = null, ht = null) {
    return { "--wh": wh, "--ht": ht };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static value(width = null, height = null) {
    return new mzUI({
      styles: this._styles(
        width ? `${mzUI.num(width)}rem` : null,
        height ? `${mzUI.num(height)}rem` : null
      ),
    });
  }

  static percent(width = null, height = null) {
    return new mzUI({
      styles: this._styles(
        width ? `${mzUI.num(width)}%` : null,
        height ? `${mzUI.num(height)}%` : null
      ),
    });
  }
}
/*=========================*/
class mzPadding extends mzUI {
  constructor() {
    super();
  }

  static _styles(pg = null) {
    return { "--pg": pg };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static all(value = null) {
    return new mzUI({
      styles: this._styles(`${mzUI.num(value)}rem`),
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`
      ),
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`
      ),
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: this._styles(
        mzApp.getDIR() == "ltr"
          ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(start)}rem`
          : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(end)}rem`
      ),
    });
  }
}
/*=========================*/
class mzMargin extends mzUI {
  constructor() {
    super();
  }

  static _styles(mn = null) {
    return { "--mn": mn };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static all(value = null) {
    return new mzUI({
      styles: this._styles(`${mzUI.num(value)}rem`),
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`
      ),
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`
      ),
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: this._styles(
        mzApp.getDIR() == "ltr"
          ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(start)}rem`
          : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(end)}rem`
      ),
    });
  }
}
/*=========================*/
class mzShadow extends mzUI {
  constructor() {
    super();
  }

  static _styles(bsw = null) {
    return { "--bsw": bsw };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static set(elevation = 1, color = "rgba(0,0,0,0.25)") {
    return new mzUI({
      styles: this._styles(
        `0 ${mzUI.num(elevation, 2)}rem ${mzUI.num(elevation, 0.6)}rem ${color}`
      ),
    });
  }

  static inset(elevation = 1, color = "rgba(0,0,0,0.25)") {
    return new mzUI({
      styles: this._styles(
        `inset 0 ${mzUI.num(elevation, 2)}rem ${mzUI.num(
          elevation,
          0.6
        )}rem ${color}`
      ),
    });
  }
}
/*=========================*/
class mzBorder extends mzUI {
  constructor() {
    super();
  }

  static _styles(bwh = null, bse = null, brr = null) {
    return { "--bwh": bwh, "--bse": bse, "--brr": brr };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static all(
    value = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: this._styles(`${mzUI.num(value)}rem`, style, color),
    });
  }

  static symmetric(
    vertical = null,
    horizontal = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`,
        style,
        color
      ),
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
      styles: this._styles(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`,
        style,
        color
      ),
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
      styles: this._styles(
        mzApp.getDIR() == "ltr"
          ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(start)}rem`
          : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(end)}rem`,
        style,
        color
      ),
    });
  }
}
/*=========================*/
class mzRadius extends mzUI {
  constructor() {
    super();
  }

  static _styles(brs = null) {
    return { "--brs": brs };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static all(value = null) {
    return new mzUI({
      styles: this._styles(`${mzUI.num(value)}rem`),
    });
  }

  static rounded(value = null) {
    return new mzUI({
      styles: this._styles(`${value}%`),
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`
      ),
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: this._styles(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`
      ),
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: this._styles(
        mzApp.getDIR() == "ltr"
          ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(start)}rem`
          : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(end)}rem`
      ),
    });
  }
}
/*=========================*/
class mzFlexExpand extends mzUI {
  constructor() {
    super();
  }

  static _styles(fx = null) {
    return { flex: fx };
  }

  static none = new mzUI({
    styles: this._styles(),
    classes: { mzFlexExpand: false },
  });

  static set(grow = null, shrink = null, basis = null) {
    return new mzUI({
      styles: this._styles(`${grow || 1} ${shrink || 0} ${mzUI.num(basis)}rem`),
      classes: { mzFlexExpand: true },
    });
  }
}
/*=========================*/
class mzColor extends mzUI {
  constructor() {
    super();
  }

  static _styles(cr = null) {
    return { "--cr": cr };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static set(color = null) {
    return new mzUI({ styles: this._styles(color) });
  }
}
/*=========================*/
class mzBackground extends mzUI {
  constructor() {
    super();
  }

  static _styles(bcr = null) {
    return { "--bcr": bcr };
  }

  static none = new mzUI({
    styles: this._styles(),
  });

  static set(color = null) {
    return new mzUI({ styles: this._styles(color) });
  }
}
/*=========================*/
class mzTextAlign extends mzUI {
  constructor() {
    super();
  }

  static _classes({ st = false, ed = false, cr = false, jy = false }) {
    return {
      "mzTA-st": st,
      "mzTA-ed": ed,
      "mzTA-cr": cr,
      "mzTA-jy": jy,
    };
  }

  static start = new mzUI({
    classes: this._classes({ st: true }),
  });
  static end = new mzUI({
    classes: this._classes({ ed: true }),
  });
  static center = new mzUI({
    classes: this._classes({ cr: true }),
  });
  static justify = new mzUI({
    classes: this._classes({ jy: true }),
  });
}
/*=========================*/
class mzTextOverflow extends mzUI {
  constructor() {
    super();
  }

  static _classes({ wp = false, cp = false, es = false }) {
    return { "mzTO-wp": wp, "mzTO-cp": cp, "mzTO-es": es };
  }

  static wrap = new mzUI({
    classes: this._classes({ wp: true }),
  });
  static clip = new mzUI({
    classes: this._classes({ cp: true }),
  });
  static ellipses = new mzUI({
    classes: this._classes({ es: true }),
  });
}
/*=========================*/
class mzFlexFlow extends mzUI {
  constructor() {
    super();
  }

  static _classes({ rw = false, cn = false, re = false, ce = false }) {
    return { "mzFF-rw": rw, "mzFF-cn": cn, "mzFF-re": re, "mzFF-ce": ce };
  }

  static row = new mzUI({
    classes: this._classes({ rw: true }),
  });
  static column = new mzUI({
    classes: this._classes({ cn: true }),
  });
  static rowReverse = new mzUI({
    classes: this._classes({ re: true }),
  });
  static columnReverse = new mzUI({
    classes: this._classes({ ce: true }),
  });
}
/*=========================*/
class mzMainAlign extends mzUI {
  constructor() {
    super();
  }

  static _classes({
    st = false,
    ed = false,
    cr = false,
    be = false,
    sh = false,
    ad = false,
    bn = false,
    ey = false,
  }) {
    return {
      "mzMA-st": st,
      "mzMA-ed": ed,
      "mzMA-cr": cr,
      "mzMA-be": be,
      "mzMA-sh": sh,
      "mzMA-ad": ad,
      "mzMA-bn": bn,
      "mzMA-ey": ey,
    };
  }

  static start = new mzUI({
    classes: this._classes({ st: true }),
  });
  static end = new mzUI({
    classes: this._classes({ ed: true }),
  });
  static center = new mzUI({
    classes: this._classes({ cr: true }),
  });
  static baseline = new mzUI({
    classes: this._classes({ be: true }),
  });
  static stretch = new mzUI({
    classes: this._classes({ sh: true }),
  });
  static around = new mzUI({
    classes: this._classes({ ad: true }),
  });
  static between = new mzUI({
    classes: this._classes({ bn: true }),
  });
  static evenly = new mzUI({
    classes: this._classes({ ey: true }),
  });
}
/*=========================*/
class mzCrossAlign extends mzUI {
  constructor() {
    super();
  }

  static _classes({
    st = false,
    ed = false,
    cr = false,
    be = false,
    sh = false,
  }) {
    return {
      "mzCA-st": st,
      "mzCA-ed": ed,
      "mzCA-cr": cr,
      "mzCA-be": be,
      "mzCA-sh": sh,
    };
  }

  static start = new mzUI({
    classes: this._classes({ st: true }),
  });
  static end = new mzUI({
    classes: this._classes({ ed: true }),
  });
  static center = new mzUI({
    classes: this._classes({ cr: true }),
  });
  static baseline = new mzUI({
    classes: this._classes({ be: true }),
  });
  static stretch = new mzUI({
    classes: this._classes({ sh: true }),
  });
}
/*=========================*/
class mzWrapAlign extends mzUI {
  constructor() {
    super();
  }

  static _classes({
    st = false,
    ed = false,
    cr = false,
    sh = false,
    ad = false,
    bn = false,
  }) {
    return {
      "mzWA-st": st,
      "mzWA-ed": ed,
      "mzWA-cr": cr,
      "mzWA-sh": sh,
      "mzWA-ad": ad,
      "mzWA-bn": bn,
    };
  }

  static start = new mzUI({
    classes: this._classes({ st: true }),
  });
  static end = new mzUI({
    classes: this._classes({ ed: true }),
  });
  static center = new mzUI({
    classes: this._classes({ cr: true }),
  });
  static stretch = new mzUI({
    classes: this._classes({ sh: true }),
  });
  static around = new mzUI({
    classes: this._classes({ ad: true }),
  });
  static between = new mzUI({
    classes: this._classes({ bn: true }),
  });
}
/*=========================*/
class mzObjectFit extends mzUI {
  constructor() {
    super();
  }

  static _classes({ cr = false, cn = false, fl = false, sn = false }) {
    return {
      "mzOF-cr": cr,
      "mzOF-cn": cn,
      "mzOF-fl": fl,
      "mzOF-sn": sn,
    };
  }

  static none = new mzUI({
    classes: this._classes({}),
  });
  static cover = new mzUI({
    classes: this._classes({ cr: true }),
  });
  static contain = new mzUI({
    classes: this._classes({ cn: true }),
  });
  static fill = new mzUI({
    classes: this._classes({ fl: true }),
  });
  static scaleDown = new mzUI({
    classes: this._classes({ sn: true }),
  });
}
/*=========================*/
class mzObjectPosition extends mzUI {
  constructor() {
    super();
  }

  static _classes({
    tp = false,
    bm = false,
    cr = false,
    lt = false,
    rt = false,
  }) {
    return {
      "mzOP-tp": tp,
      "mzOP-bm": bm,
      "mzOP-cr": cr,
      "mzOP-lt": lt,
      "mzOP-rt": rt,
    };
  }

  static none = new mzUI({
    classes: this._classes({}),
  });
  static top = new mzUI({
    classes: this._classes({ tp: true }),
  });
  static bottom = new mzUI({
    classes: this._classes({ bm: true }),
  });
  static center = new mzUI({
    classes: this._classes({ cr: true }),
  });
  static left = new mzUI({
    classes: this._classes({ lt: true }),
  });
  static right = new mzUI({
    classes: this._classes({ rt: true }),
  });
}
