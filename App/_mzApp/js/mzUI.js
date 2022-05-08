/*=========================*/
class mzUI {
  static num(num, by = 1) {
    if (by == 0) return num.toFixed(2);
    return (num / (10 * by)).toFixed(2);
  }

  static data = {};
  static setStyles() {
    return {};
  }

  styles = {};
  classes = {};
  constructor(styles = {}, classes = {}) {
    this.styles = styles;
    this.classes = classes;
  }
  static setStyles() {
    return {};
  }
  static setClasses() {
    return {};
  }
  getStyle(key = null) {
    return this.styles[key];
  }
  getClass(key = null) {
    return this.classes[key];
  }
}
/*=========================*/
class mzPositionUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(pn = null) {
    return { pn: pn };
  }

  static set(position = null) {
    return new mzUI(this.setStyles(position));
  }

  static default = new mzUI(this.setStyles("static"));

  static relative = new mzUI(this.setStyles("relative"));

  static fixed = new mzUI(this.setStyles("fixed"));

  static absolute = new mzUI(this.setStyles("absolute"));

  static relative = new mzUI(this.setStyles("relative"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzDisplayUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(dy = null) {
    return { dy: dy };
  }

  static set(display = null) {
    return new mzUI(this.setStyles(display));
  }

  static none = new mzUI(this.setStyles("none"));

  static inline = new mzUI(this.setStyles("inline"));

  static block = new mzUI(this.setStyles("block"));
  static inlineBlock = new mzUI(this.setStyles("inline-block"));

  static contents = new mzUI(this.setStyles("contents"));

  static flex = new mzUI(this.setStyles("flex"));
  static inlineFlex = new mzUI(this.setStyles("inline-flex"));

  static grid = new mzUI(this.setStyles("grid"));
  static inlineFrid = new mzUI(this.setStyles("inline-grid"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzOverflowUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ow = null) {
    return { ow_h: ow, ow_v: ow };
  }

  static set(overflow = null) {
    return new mzUI(this.setStyles(overflow));
  }

  static none = new mzUI(this.setStyles());

  static hidden = new mzUI(this.setStyles("hidden"));

  static clip = new mzUI(this.setStyles("clip"));

  static visible = new mzUI(this.setStyles("visible"));

  static scroll = new mzUI(this.setStyles("scroll"));

  static auto = new mzUI(this.setStyles("auto"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzWidthUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(wh = null, wh_n = null, wh_x = null) {
    return { wh: wh, wh_n: wh_n, wh_x: wh_x };
  }

  static set(width = null, minWidth = null, maxWidth = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(width)}rem`,
        `${mzUI.num(minWidth)}rem`,
        `${mzUI.num(maxWidth)}rem`
      )
    );
  }

  static percent(width = null, minWidth = null, maxWidth = null) {
    return new mzUI(
      this.setStyles(`${width}%`, `${minWidth}%`, `${maxWidth}%`)
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit", "inherit", "inherit"));

  static initial = new mzUI(this.setStyles("initial", "initial", "initial"));
}
/*=========================*/
class mzHeightUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ht = null, ht_n = null, ht_x = null) {
    return { ht: ht, ht_n: ht_n, ht_x: ht_x };
  }

  static set(height = null, minHeight = null, maxHeight = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(height)}rem`,
        `${mzUI.num(minHeight)}rem`,
        `${mzUI.num(maxHeight)}rem`
      )
    );
  }

  static percent(height = null, minHeight = null, maxHeight = null) {
    return new mzUI(
      this.setStyles(`${height}%`, `${minHeight}%`, `${maxHeight}%`)
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit", "inherit", "inherit"));

  static initial = new mzUI(this.setStyles("initial", "initial", "initial"));
}
/*=========================*/
class mzDirectionUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(dn = null) {
    return { dn: dn };
  }

  static set(direction = null) {
    return new mzUI(this.setStyles(direction));
  }

  static none = new mzUI(this.setStyles());

  static ltr = new mzUI(this.setStyles("ltr"));

  static rtl = new mzUI(this.setStyles("rtl"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzFontSizeUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ft_z = null) {
    return { ft_z: ft_z };
  }

  static set(size = null) {
    return new mzUI(this.setStyles(`${mzUI.num(size)}rem`));
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzFontFamilyUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ft_f = null) {
    return { ft_f: ft_f };
  }

  static set(font = null) {
    return new mzUI(this.setStyles(font));
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzFontStyleUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ft_s = null) {
    return { ft_s: ft_s };
  }

  static set(style = null) {
    return new mzUI(this.setStyles(style));
  }

  static none = new mzUI(this.setStyles());

  static normal = new mzUI(this.setStyles("normal"));

  static italic = new mzUI(this.setStyles("italic"));

  static oblique = new mzUI(this.setStyles("oblique"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzFontWeightUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ft_w = null) {
    return { ft_w: ft_w };
  }

  static set(weight = null) {
    return new mzUI(this.setStyles(weight));
  }

  static none = new mzUI(this.setStyles());

  static normal = new mzUI(this.setStyles("normal"));

  static bold = new mzUI(this.setStyles("bold"));

  static bolder = new mzUI(this.setStyles("bolder"));

  static light = new mzUI(this.setStyles("light"));

  static lighter = new mzUI(this.setStyles("lighter"));

  static w100 = new mzUI(this.setStyles("100"));

  static w200 = new mzUI(this.setStyles("200"));

  static w300 = new mzUI(this.setStyles("300"));

  static w400 = new mzUI(this.setStyles("400"));

  static w500 = new mzUI(this.setStyles("500"));

  static w600 = new mzUI(this.setStyles("600"));

  static w700 = new mzUI(this.setStyles("700"));

  static w800 = new mzUI(this.setStyles("800"));

  static w900 = new mzUI(this.setStyles("900"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzTextAlignUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(tt_a = null) {
    return { tt_a: tt_a };
  }

  static set(align = null) {
    return new mzUI(this.setStyles(align));
  }

  static none = new mzUI(this.setStyles());

  static start = new mzUI(this.setStyles("start"));

  static end = new mzUI(this.setStyles("end"));

  static center = new mzUI(this.setStyles("center"));

  static justify = new mzUI(this.setStyles("justify"));

  static left = new mzUI(this.setStyles("left"));

  static right = new mzUI(this.setStyles("right"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzTextDecorationUI extends mzUI {
  constructor() {
    super();
  }

  static data = {
    line: {
      underline: "underline",
      overline: "overline",
      lineThrough: "line-through",
    },
    style: {
      solid: "solid",
      double: "double",
      dotted: "dotted",
      dashed: "dashed",
      wavy: "wavy",
    },
  };

  static setStyles(td_l = null, td_s = null, td_c = null, td_t = null) {
    return { td_l: td_l, td_s: td_s, td_c: td_c, td_t: td_t };
  }

  static set(lines = null, style = null, color = null, thickness = null) {
    return new mzUI(this.setStyles(lines, style, color, mzUI.num(thickness)));
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(
    this.setStyles("inherit", "inherit", "inherit", "inherit")
  );

  static initial = new mzUI(
    this.setStyles("initial", "initial", "initial", "initial")
  );
}
/*=========================*/
class mzColorUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(cr = null) {
    return { cr: cr instanceof mzColorData ? cr.value() : cr };
  }

  static set(color = null) {
    return new mzUI(this.setStyles(color));
  }

  static none = new mzUI(this.setStyles());

  static transparent = new mzUI(this.setStyles("transparent"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzBackgroundUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(bd_c = null) {
    return { bd_c: bd_c instanceof mzColorData ? bd_c.value() : bd_c };
  }

  static set(color = null) {
    return new mzUI(this.setStyles(color));
  }

  static none = new mzUI(this.setStyles());

  static transparent = new mzUI(this.setStyles("transparent"));

  static inherit = new mzUI(this.setStyles("inherit"));

  static initial = new mzUI(this.setStyles("initial"));
}
/*=========================*/
class mzBorderUI extends mzUI {
  constructor() {
    super();
  }

  static data = {
    style: {
      solid: "solid",
      double: "double",
      dotted: "dotted",
      dashed: "dashed",
      wavy: "wavy",
    },
  };

  static setStyles(
    br_s = null,
    br_c = null,
    br_t = null,
    br_r = null,
    br_b = null,
    br_l = null
  ) {
    return {
      br_s: br_s,
      br_c: br_c instanceof mzColorData ? br_c.value() : br_c,
      br_t: br_t,
      br_r: br_r,
      br_b: br_b,
      br_l: br_l,
    };
  }

  static all(
    value = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI(
      this.setStyles(
        style,
        color,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`
      )
    );
  }

  static symmetric(
    vertical = null,
    horizontal = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI(
      this.setStyles(
        style,
        color,
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(horizontal)}rem`,
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(horizontal)}rem`
      )
    );
  }

  static TRBL(
    top = null,
    right = null,
    bottom = null,
    left = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI(
      this.setStyles(
        style,
        color,
        `${mzUI.num(top)}rem`,
        `${mzUI.num(right)}rem`,
        `${mzUI.num(bottom)}rem`,
        `${mzUI.num(left)}rem`
      )
    );
  }

  static TSBE(
    top = null,
    start = null,
    bottom = null,
    end = null,
    style = mzData.borderType.solid,
    color = mzColor.from("#333", 0.5)
  ) {
    return new mzUI(
      this.setStyles(
        style,
        color,
        `${mzUI.num(top)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(end) : mzUI.num(start)}rem`,
        `${mzUI.num(bottom)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(start) : mzUI.num(end)}rem`
      )
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(
    this.setStyles(
      "inherit",
      "inherit",
      "inherit",
      "inherit",
      "inherit",
      "inherit"
    )
  );

  static initial = new mzUI(
    this.setStyles(
      "initial",
      "initial",
      "initial",
      "initial",
      "initial",
      "initial"
    )
  );
}
/*=========================*/
class mzRadiusUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(rs_tl = null, rs_tr = null, rs_br = null, rs_bl = null) {
    return {
      rs_tl: rs_tl,
      rs_tr: rs_tr,
      rs_br: rs_br,
      rs_bl: rs_bl,
    };
  }

  static all(value = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`
      )
    );
  }

  static rounded(value = null) {
    return new mzUI(
      this.setStyles(`${value}%`, `${value}%`, `${value}%`, `${value}%`)
    );
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(horizontal)}rem`,
        `${mzUI.num(horizontal)}rem`
      )
    );
  }

  static diagonal(main = null, cross = null) {
    return new mzUI(
      this.setStyles(
        `${mzApp.getDIR() == "ltr" ? mzUI.num(main) : mzUI.num(cross)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(cross) : mzUI.num(main)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(main) : mzUI.num(cross)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(cross) : mzUI.num(main)}rem`
      )
    );
  }

  static TRBL(
    topLeft = null,
    topRight = null,
    bottomRight = null,
    bottomLeft = null
  ) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(topLeft)}rem`,
        `${mzUI.num(topRight)}rem`,
        `${mzUI.num(bottomRight)}rem`,
        `${mzUI.num(bottomLeft)}rem`
      )
    );
  }

  static TSBE(
    topStart = null,
    topEnd = null,
    bottomEnd = null,
    bottomStart = null
  ) {
    return new mzUI(
      this.setStyles(
        `${mzApp.getDIR() == "ltr" ? mzUI.num(topStart) : mzUI.num(topEnd)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(topEnd) : mzUI.num(topStart)}rem`,
        `${
          mzApp.getDIR() == "ltr" ? mzUI.num(bottomEnd) : mzUI.num(bottomStart)
        }rem`,
        `${
          mzApp.getDIR() == "ltr" ? mzUI.num(bottomStart) : mzUI.num(bottomEnd)
        }rem`
      )
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(
    this.setStyles("inherit", "inherit", "inherit", "inherit")
  );

  static initial = new mzUI(
    this.setStyles("initial", "initial", "initial", "initial")
  );
}
/*=========================*/
class mzShadowUI extends mzUI {
  constructor() {
    super();
  }

  static data = {
    style: {
      outward: null,
      inward: "inset",
    },
  };

  static setStyles(
    sh_t = null,
    sh_h = null,
    sh_v = null,
    sh_s = null,
    sh_c = null
  ) {
    return {
      sh_t: sh_t,
      sh_h: sh_h,
      sh_v: sh_v,
      sh_s: sh_s,
      sh_c: sh_c instanceof mzColorData ? sh_c.value() : sh_c,
    };
  }

  static elevate(
    value = 1,
    color = mzColorData.black.opacity(0.25),
    type = mzShadowUI.data.outward
  ) {
    return new mzUI(
      this.setStyles(
        type,
        null,
        `${mzUI.num(value, 2)}rem`,
        `${mzUI.num(value, 0.6)}rem`,
        color
      )
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(
    this.setStyles("inherit", "inherit", "inherit", "inherit", "inherit")
  );

  static initial = new mzUI(
    this.setStyles("initial", "initial", "initial", "initial", "initial")
  );
}
/*=========================*/
class mzPaddingUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(pg_t = null, pg_r = null, pg_b = null, pg_l = null) {
    return {
      pg_t: pg_t,
      pg_r: pg_r,
      pg_b: pg_b,
      pg_l: pg_l,
    };
  }

  static all(value = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`
      )
    );
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(horizontal)}rem`,
        `${mzUI.num(horizontal)}rem`
      )
    );
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(top)}rem`,
        `${mzUI.num(right)}rem`,
        `${mzUI.num(bottom)}rem`,
        `${mzUI.num(left)}rem`
      )
    );
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(top)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(end) : mzUI.num(start)}rem`,
        `${mzUI.num(bottom)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(start) : mzUI.num(end)}rem`
      )
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(
    this.setStyles("inherit", "inherit", "inherit", "inherit")
  );

  static initial = new mzUI(
    this.setStyles("initial", "initial", "initial", "initial")
  );
}
/*=========================*/
class mzMarginUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(mn_t = null, mn_r = null, mn_b = null, mn_l = null) {
    return {
      mn_t: mn_t,
      mn_r: mn_r,
      mn_b: mn_b,
      mn_l: mn_l,
    };
  }

  static all(value = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`,
        `${mzUI.num(value)}rem`
      )
    );
  }

  static symmetric(vertical = null, horizontal = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(vertical)}rem`,
        `${mzUI.num(horizontal)}rem`,
        `${mzUI.num(horizontal)}rem`
      )
    );
  }

  static TRBL(top = null, right = null, bottom = null, left = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(top)}rem`,
        `${mzUI.num(right)}rem`,
        `${mzUI.num(bottom)}rem`,
        `${mzUI.num(left)}rem`
      )
    );
  }

  static TSBE(top = null, start = null, bottom = null, end = null) {
    return new mzUI(
      this.setStyles(
        `${mzUI.num(top)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(end) : mzUI.num(start)}rem`,
        `${mzUI.num(bottom)}rem`,
        `${mzApp.getDIR() == "ltr" ? mzUI.num(start) : mzUI.num(end)}rem`
      )
    );
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(
    this.setStyles("inherit", "inherit", "inherit", "inherit")
  );

  static initial = new mzUI(
    this.setStyles("initial", "initial", "initial", "initial")
  );
}
/*=========================*/
class mzFlexFlowUI extends mzUI {
  constructor() {
    super();
  }

  static data = {
    direction: {
      row: "row",
      column: "column",
      rowReverse: "row-reverse",
      columnReverse: "column-reverse",
    },
    wrap: {
      wrap: "wrap",
      nowrap: "nowrap",
    },
  };

  static setStyles(ff_d = null, ff_w = null) {
    return { ff_d: ff_d, ff_w: ff_w };
  }

  static set(direction, wrap) {
    return new mzUI(this.setStyles(direction, wrap));
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit", "inherit"));

  static initial = new mzUI(this.setStyles("initial", "initial"));
}
/*=========================*/
class mzContentAlignUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(ca_m = null, ca_c = null) {
    return {
      ca_m: ca_m instanceof mzContentMainData ? ca_m.value() : ca_m,
      ca_c: ca_c instanceof mzContentCrossData ? ca_c.value() : ca_c,
    };
  }

  static set(
    mainAxis = mzContentMainData.start,
    crossAxis = mzContentCrossData.start
  ) {
    return new mzUI(this.setStyles(mainAxis, crossAxis));
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit", "inherit"));

  static initial = new mzUI(this.setStyles("initial", "initial"));
}
/*=========================*/
class mzItemAlignUI extends mzUI {
  constructor() {
    super();
  }

  static data = {
    main: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      around: "space-around",
      between: "space-between",
      evenly: "space-evenly",
    },
    cross: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      stretch: "stretch",
      around: "space-around",
      between: "space-between",
      evenly: "space-evenly",
    },
  };

  static setStyles(ia_m = null, ia_c = null) {
    return { ia_m: ia_m, ia_c: ia_c };
  }

  static set(
    mainAxis = mzItemAlignUI.data.main.start,
    crossAxis = mzItemAlignUI.data.cross.start
  ) {
    return new mzUI(this.setStyles(mainAxis, crossAxis));
  }

  static none = new mzUI(this.setStyles());

  static inherit = new mzUI(this.setStyles("inherit", "inherit"));

  static initial = new mzUI(this.setStyles("initial", "initial"));
}

/*=========================*/
class mzFlexExpandUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles(fx = null, shrink, basis) {
    return { flex: fx };
  }

  static set(grow = null, shrink = null, basis = null) {
    return new mzUI({
      styles: this.setStyles(
        `${grow || 1} ${shrink || 0} ${mzUI.num(basis)}rem`
      ),
      classes: { mzFlexExpand: true },
    });
  }

  static none = new mzUI({
    styles: this.setStyles(),
    classes: { mzFlexExpand: false },
  });
}
/*=========================*/
class mzTextOverflowUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles({ wp = false, cp = false, es = false }) {
    return { "mzTO-wp": wp, "mzTO-cp": cp, "mzTO-es": es };
  }

  static wrap = new mzUI({
    classes: this.setStyles({ wp: true }),
  });
  static clip = new mzUI({
    classes: this.setStyles({ cp: true }),
  });
  static ellipses = new mzUI({
    classes: this.setStyles({ es: true }),
  });
}
/*=========================*/
class mzMainAlignUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles({
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
    classes: this.setStyles({ st: true }),
  });
  static end = new mzUI({
    classes: this.setStyles({ ed: true }),
  });
  static center = new mzUI({
    classes: this.setStyles({ cr: true }),
  });
  static baseline = new mzUI({
    classes: this.setStyles({ be: true }),
  });
  static stretch = new mzUI({
    classes: this.setStyles({ sh: true }),
  });
  static around = new mzUI({
    classes: this.setStyles({ ad: true }),
  });
  static between = new mzUI({
    classes: this.setStyles({ bn: true }),
  });
  static evenly = new mzUI({
    classes: this.setStyles({ ey: true }),
  });
}
/*=========================*/
class mzCrossAlignUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles({
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
    classes: this.setStyles({ st: true }),
  });
  static end = new mzUI({
    classes: this.setStyles({ ed: true }),
  });
  static center = new mzUI({
    classes: this.setStyles({ cr: true }),
  });
  static baseline = new mzUI({
    classes: this.setStyles({ be: true }),
  });
  static stretch = new mzUI({
    classes: this.setStyles({ sh: true }),
  });
}
/*=========================*/
class mzWrapAlignUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles({
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
    classes: this.setStyles({ st: true }),
  });
  static end = new mzUI({
    classes: this.setStyles({ ed: true }),
  });
  static center = new mzUI({
    classes: this.setStyles({ cr: true }),
  });
  static stretch = new mzUI({
    classes: this.setStyles({ sh: true }),
  });
  static around = new mzUI({
    classes: this.setStyles({ ad: true }),
  });
  static between = new mzUI({
    classes: this.setStyles({ bn: true }),
  });
}
/*=========================*/
class mzObjectFitUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles({ cr = false, cn = false, fl = false, sn = false }) {
    return {
      "mzOF-cr": cr,
      "mzOF-cn": cn,
      "mzOF-fl": fl,
      "mzOF-sn": sn,
    };
  }

  static none = new mzUI({
    classes: this.setStyles({}),
  });
  static cover = new mzUI({
    classes: this.setStyles({ cr: true }),
  });
  static contain = new mzUI({
    classes: this.setStyles({ cn: true }),
  });
  static fill = new mzUI({
    classes: this.setStyles({ fl: true }),
  });
  static scaleDown = new mzUI({
    classes: this.setStyles({ sn: true }),
  });
}
/*=========================*/
class mzObjectPositionUI extends mzUI {
  constructor() {
    super();
  }

  static setStyles({
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
    classes: this.setStyles({}),
  });
  static top = new mzUI({
    classes: this.setStyles({ tp: true }),
  });
  static bottom = new mzUI({
    classes: this.setStyles({ bm: true }),
  });
  static center = new mzUI({
    classes: this.setStyles({ cr: true }),
  });
  static left = new mzUI({
    classes: this.setStyles({ lt: true }),
  });
  static right = new mzUI({
    classes: this.setStyles({ rt: true }),
  });
}
