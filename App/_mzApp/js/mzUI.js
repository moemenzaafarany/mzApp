/*=========================*/
class mzUI {
  static num(num, by = 1) {
    if (by == 0) return num.toFixed(2);
    return (num / (10 * by)).toFixed(2);
  }

  static _data() {
    return this.data;
  }

  data = {};

  constructor(data) {
    this.data = data;
  }
}
/*=========================*/
class mzPosition extends mzUI {
  constructor() {
    super();
  }

  static _data(pn = null) {
    return { pn: pn };
  }

  static value(position = null) {
    return new mzUI(this._data(position));
  }

  static default = new mzUI(this._data("static"));

  static relative = new mzUI(this._data("relative"));

  static fixed = new mzUI(this._data("fixed"));

  static absolute = new mzUI(this._data("absolute"));

  static relative = new mzUI(this._data("relative"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzDisplay extends mzUI {
  constructor() {
    super();
  }

  static _data(dy = null) {
    return { dy: dy };
  }

  static value(display = null) {
    return new mzUI(this._data(display));
  }

  static none = new mzUI(this._data("none"));

  static inline = new mzUI(this._data("inline"));

  static block = new mzUI(this._data("block"));
  static inlineBlock = new mzUI(this._data("inline-block"));

  static contents = new mzUI(this._data("contents"));

  static flex = new mzUI(this._data("flex"));
  static inlineFlex = new mzUI(this._data("inline-flex"));

  static grid = new mzUI(this._data("grid"));
  static inlineFrid = new mzUI(this._data("inline-grid"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzOverflow extends mzUI {
  constructor() {
    super();
  }

  static _data(ow = null) {
    return { ow_h: ow, ow_v: ow };
  }

  static value(overflow = null) {
    return new mzUI(this._data(overflow));
  }

  static none = new mzUI(this._data());

  static hidden = new mzUI(this._data("hidden"));

  static clip = new mzUI(this._data("clip"));

  static visible = new mzUI(this._data("visible"));

  static scroll = new mzUI(this._data("scroll"));

  static auto = new mzUI(this._data("auto"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzWidth extends mzUI {
  constructor() {
    super();
  }

  static _data(wh = null, wh_n = null, wh_x = null) {
    return { wh: wh, wh_n: wh_n, wh_x: wh_x };
  }

  static value(width = null, minWidth = null, maxWidth = null) {
    return new mzUI(
      this._data(
        `${mzUI.num(width)}rem`,
        `${mzUI.num(minWidth)}rem`,
        `${mzUI.num(maxWidth)}rem`
      )
    );
  }

  static percent(width = null, minWidth = null, maxWidth = null) {
    return new mzUI(this._data(`${width}%`, `${minWidth}%`, `${maxWidth}%`));
  }

  static none = new mzUI(this._data());

  static inherit = new mzUI(this._data("inherit", "inherit", "inherit"));

  static initial = new mzUI(this._data("initial", "initial", "initial"));
}
/*=========================*/
class mzHeight extends mzUI {
  constructor() {
    super();
  }

  static _data(ht = null, ht_n = null, ht_x = null) {
    return { ht: ht, ht_n: ht_n, ht_x: ht_x };
  }

  static value(height = null, minHeight = null, maxHeight = null) {
    return new mzUI(
      this._data(
        `${mzUI.num(height)}rem`,
        `${mzUI.num(minHeight)}rem`,
        `${mzUI.num(maxHeight)}rem`
      )
    );
  }

  static percent(height = null, minHeight = null, maxHeight = null) {
    return new mzUI(this._data(`${height}%`, `${minHeight}%`, `${maxHeight}%`));
  }

  static none = new mzUI(this._data());

  static inherit = new mzUI(this._data("inherit", "inherit", "inherit"));

  static initial = new mzUI(this._data("initial", "initial", "initial"));
}
/*=========================*/
class mzDirection extends mzUI {
  constructor() {
    super();
  }

  static _data(dn = null) {
    return { dn: dn };
  }

  static value(direction = null) {
    return new mzUI(this._data(direction));
  }

  static none = new mzUI(this._data());

  static ltr = new mzUI(this._data("ltr"));

  static rtl = new mzUI(this._data("rtl"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzFontSize extends mzUI {
  constructor() {
    super();
  }

  static _data(ft_z = null) {
    return { ft_z: ft_z };
  }

  static value(size = null) {
    return new mzUI(this._data(`${mzUI.num(size)}rem`));
  }

  static none = new mzUI(this._data());

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzFontFamily extends mzUI {
  constructor() {
    super();
  }

  static _data(ft_f = null) {
    return { ft_f: ft_f };
  }

  static value(font = null) {
    return new mzUI(this._data(font));
  }

  static none = new mzUI(this._data());

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzFontStyle extends mzUI {
  constructor() {
    super();
  }

  static _data(ft_s = null) {
    return { ft_s: ft_s };
  }

  static value(style = null) {
    return new mzUI(this._data(style));
  }

  static none = new mzUI(this._data());

  static normal = new mzUI(this._data("normal"));

  static italic = new mzUI(this._data("italic"));

  static oblique = new mzUI(this._data("oblique"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzFontWeight extends mzUI {
  constructor() {
    super();
  }

  static _data(ft_w = null) {
    return { ft_w: ft_w };
  }

  static value(weight = null) {
    return new mzUI(this._data(weight));
  }

  static none = new mzUI(this._data());

  static normal = new mzUI(this._data("normal"));

  static bold = new mzUI(this._data("bold"));

  static bolder = new mzUI(this._data("bolder"));

  static light = new mzUI(this._data("light"));

  static lighter = new mzUI(this._data("lighter"));

  static w100 = new mzUI(this._data("100"));

  static w200 = new mzUI(this._data("200"));

  static w300 = new mzUI(this._data("300"));

  static w400 = new mzUI(this._data("400"));

  static w500 = new mzUI(this._data("500"));

  static w600 = new mzUI(this._data("600"));

  static w700 = new mzUI(this._data("700"));

  static w800 = new mzUI(this._data("800"));

  static w900 = new mzUI(this._data("900"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzTextAlign extends mzUI {
  constructor() {
    super();
  }

  static _data(tt_a = null) {
    return { tt_a: tt_a };
  }

  static value(align = null) {
    return new mzUI(this._data(align));
  }

  static none = new mzUI(this._data());

  static start = new mzUI(this._data("start"));

  static end = new mzUI(this._data("end"));

  static center = new mzUI(this._data("center"));

  static justify = new mzUI(this._data("justify"));

  static left = new mzUI(this._data("left"));

  static right = new mzUI(this._data("right"));

  static inherit = new mzUI(this._data("inherit"));

  static initial = new mzUI(this._data("initial"));
}
/*=========================*/
class mzTextDecoration extends mzUI {
  constructor() {
    super();
  }

  static _data(td_l = null, td_s = null, td_c = null, td_t = null) {
    return { td_l: td_l, td_s: td_s, td_c: td_c, td_t: td_t };
  }

  static value(lines = null, style = null, color = null, thickness = null) {
    return new mzUI(this._data(lines, style, color, thickness));
  }

  static none = new mzUI(this._data());

  static inherit = new mzUI(
    this._data("inherit", "inherit", "inherit", "inherit")
  );

  static initial = new mzUI(
    this._data("initial", "initial", "initial", "initial")
  );
}

/*=========================*/
class mzColor extends mzUI {
  constructor() {
    super();
  }

  static _data(cr = null) {
    return { cr: cr };
  }

  static none = new mzUI(this._data());

  static set(color = null) {
    return new mzUI(this._data(color));
  }
}
/*=========================*/
class mzBackground extends mzUI {
  constructor() {
    super();
  }

  static _data(bdcr = null, bdie = null) {
    return { bdcr: bdcr, bdie: bdie };
  }

  static none = new mzUI(this._data());

  static set(color = null) {
    return new mzUI(this._data(color));
  }
}
/*=========================*/
class mzPadding extends mzUI {
  constructor() {
    super();
  }

  static _data(pg = null) {
    return { pg: pg };
  }

  static none = new mzUI(this._data());

  static all(value = null) {
    return new mzUI(this._data(`${mzUI.num(value)}rem`));
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI(
      this._data(`${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`)
    );
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI(
      this._data(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`
      )
    );
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI(
      this._data(
        mzApp.getDIR() == "ltr"
          ? `${mzUI.num(top)}rem ${mzUI.num(end)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(start)}rem`
          : `${mzUI.num(top)}rem ${mzUI.num(start)}rem ${mzUI.num(
              bottom
            )}rem ${mzUI.num(end)}rem`
      )
    );
  }
}
/*=========================*/
class mzMargin extends mzUI {
  constructor() {
    super();
  }

  static _data(mn = null) {
    return { "--mn": mn };
  }

  static none = new mzUI({
    styles: this._data(),
  });

  static all(value = null) {
    return new mzUI({
      styles: this._data(`${mzUI.num(value)}rem`),
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: this._data(`${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`),
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: this._data(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`
      ),
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: this._data(
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

  static _data(bsw = null) {
    return { "--bsw": bsw };
  }

  static none = new mzUI({
    styles: this._data(),
  });

  static set(elevation = 1, color = "rgba(0,0,0,0.25)") {
    return new mzUI({
      styles: this._data(
        `0 ${mzUI.num(elevation, 2)}rem ${mzUI.num(elevation, 0.6)}rem ${color}`
      ),
    });
  }

  static inset(elevation = 1, color = "rgba(0,0,0,0.25)") {
    return new mzUI({
      styles: this._data(
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

  static _data(bwh = null, bse = null, brr = null) {
    return { "--bwh": bwh, "--bse": bse, "--brr": brr };
  }

  static none = new mzUI({
    styles: this._data(),
  });

  static all(
    value = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: this._data(`${mzUI.num(value)}rem`, style, color),
    });
  }

  static symmetric(
    vertical = null,
    horizontal = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI({
      styles: this._data(
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
      styles: this._data(
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
      styles: this._data(
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

  static _data(brs = null) {
    return { "--brs": brs };
  }

  static none = new mzUI({
    styles: this._data(),
  });

  static all(value = null) {
    return new mzUI({
      styles: this._data(`${mzUI.num(value)}rem`),
    });
  }

  static rounded(value = null) {
    return new mzUI({
      styles: this._data(`${value}%`),
    });
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI({
      styles: this._data(`${mzUI.num(vertical)}rem ${mzUI.num(horizontal)}rem`),
    });
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI({
      styles: this._data(
        `${mzUI.num(top)}rem ${mzUI.num(right)}rem ${mzUI.num(
          bottom
        )}rem ${mzUI.num(left)}rem`
      ),
    });
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI({
      styles: this._data(
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

  static _data(fx = null) {
    return { flex: fx };
  }

  static none = new mzUI({
    styles: this._data(),
    classes: { mzFlexExpand: false },
  });

  static set(grow = null, shrink = null, basis = null) {
    return new mzUI({
      styles: this._data(`${grow || 1} ${shrink || 0} ${mzUI.num(basis)}rem`),
      classes: { mzFlexExpand: true },
    });
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
