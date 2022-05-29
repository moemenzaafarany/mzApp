import * as mzAPP from "./mzApp.js";
import * as mzDATA from "./mzData.js";
import * as mzSTYLE from "./mzStyle.js";
import * as mzWIDGET from "./mzWidget.js";
import * as mzCONTROLLER from "./mzController.js";
/*=========================*/
// Theme class: for all widgets themes
export class Theme {
  children = [];
  classes = {};
  styles = {};
  attributes = {};
  nodeAttrs = {};
  styling = [];
}
/*=========================*/
// Theme Scaffold class: Scaffold widget theme
export class Scaffold extends Theme {
  BackColor;

  constructor({
    BackColor = mzSTYLE.BackColor.set(mzDATA.Color.white.brightness(0.1)),
  }) {
    super();
    this.BackColor = BackColor;
  }
}
/*=========================*/
// Theme Container class: Container widget theme
export class Container extends Theme {
  width;
  height;
  padding;
  margin;
  border;
  radius;
  shadow;
  BackColor;

  constructor({
    Width = null,
    Height = null,
    Padding = null,
    Margin = null,
    Border = null,
    Radius = null,
    Shadow = null,
    BackColor = null,
  }) {
    super();
    this.Width = Width;
    this.Height = Height;
    this.Padding = Padding;
    this.Margin = Margin;
    this.Border = Border;
    this.Radius = Radius;
    this.Shadow = Shadow;
    this.BackColor = BackColor;
  }

  static card({
    Width = null,
    Height = null,
    Padding = mzSTYLE.Padding.all(mzDATA.Num.value(5)),
    Margin = mzSTYLE.Margin.all(mzDATA.Num.value(5)),
    Border = null,
    Radius = mzSTYLE.Radius.all(mzDATA.Num.value(5)),
    Shadow = mzSTYLE.Shadow.set({}),
    BackColor = mzSTYLE.BackColor.set(mzDATA.Color.white),
  }) {
    return new this({
      Width: Width,
      Height: Height,
      Padding: Padding,
      Margin: Margin,
      Border: Border,
      Radius: Radius,
      Shadow: Shadow,
      BackColor: BackColor,
    });
  }
}
/*=========================*/
// Theme Text class: Text widget theme
export class Text extends Theme {
  FontSize;
  FontFamily;
  FontStyle;
  FontWeight;
  TextAlign;
  TextDecoration;
  TextOverflow;
  Direction;
  ForeColor;

  constructor({
    FontSize = null,
    FontFamily = null,
    FontStyle = null,
    FontWeight = null,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    super();
    this.FontSize = FontSize;
    this.FontFamily = FontFamily;
    this.FontStyle = FontStyle;
    this.FontWeight = FontWeight;
    this.TextAlign = TextAlign;
    this.TextDecoration = TextDecoration;
    this.TextOverflow = TextOverflow;
    this.Direction = Direction;
    this.ForeColor = ForeColor;
  }

  static Header1({
    FontSize = mzSTYLE.FontSize.set(mzDATA.Num.value(22.5)),
    FontFamily = null,
    FontStyle = null,
    FontWeight = mzSTYLE.FontWeight.bold,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
  static Header2({
    FontSize = mzSTYLE.FontSize.set(mzDATA.Num.value(20)),
    FontFamily = null,
    FontStyle = null,
    FontWeight = mzSTYLE.FontWeight.bold,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
  static Header3({
    FontSize = mzSTYLE.FontSize.set(mzDATA.Num.value(17.5)),
    FontFamily = null,
    FontStyle = null,
    FontWeight = mzSTYLE.FontWeight.bold,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
  static Header4({
    FontSize = mzSTYLE.FontSize.set(mzDATA.Num.value(15)),
    FontFamily = null,
    FontStyle = null,
    FontWeight = mzSTYLE.FontWeight.bold,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
  static Header5({
    FontSize = mzSTYLE.FontSize.set(mzDATA.Num.value(12.5)),
    FontFamily = null,
    FontStyle = null,
    FontWeight = mzSTYLE.FontWeight.bold,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
  static Header6({
    FontSize = mzSTYLE.FontSize.set(mzDATA.Num.value(10)),
    FontFamily = null,
    FontStyle = null,
    FontWeight = mzSTYLE.FontWeight.bold,
    TextAlign = null,
    TextDecoration = null,
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
  static underline({
    FontSize = null,
    FontFamily = null,
    FontStyle = null,
    FontWeight = null,
    TextAlign = null,
    TextDecoration = mzSTYLE.TextDecoration.set({
      lines: mzDATA.LineType.underline,
      thickness: mzDATA.Num.value(1),
    }),
    TextOverflow = null,
    Direction = null,
    ForeColor = mzSTYLE.ForeColor.set(mzDATA.Color.black),
  }) {
    return new this({
      FontSize: FontSize,
      FontFamily: FontFamily,
      FontStyle: FontStyle,
      FontWeight: FontWeight,
      TextAlign: TextAlign,
      TextDecoration: TextDecoration,
      TextOverflow: TextOverflow,
      Direction: Direction,
      ForeColor: ForeColor,
    });
  }
}
