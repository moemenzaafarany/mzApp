import * as mzAPP from "./mzApp.js";
import * as mzSTYLE from "./mzStyle.js";
import * as mzTHEME from "./mzTheme.js";
import * as mzDATA from "./mzData.js";
import * as mzWIDGET from "./mzWidget.js";
/*=========================*/
// ui class: for all ui of widgets
export class Controller {}
//========================== Form Field
export class Form extends Controller {
  constructor({ validator = null, onchange = null }) {
    super();
    this.validator = validator;
    this.onchange = onchange;
  }

  widget = null;
  value = "";
  data = {};
  error = null;
  validator = null;
  onchange = null;
  onchanged = null;

  setWidget(widget, onchanged) {
    this.widget = widget;
    this.onchanged = onchanged;
  }

  setValue(value = null, data = null) {
    this.value = value;
    this.data = data;
    if (this.onchange) this.onchange(this.value);
    if (this.onchanged) this.onchanged(this.value);
  }

  setError(error = null) {
    this.error = error;
    if (this.onchange) this.onchange(this.value);
    if (this.onchanged) this.onchanged(this.value);
  }

  getError() {
    return this.error || this.validator(this.value);
  }
}
//========================== Form Field
export class Field extends Controller {
  constructor({ validator = null, onchange = null }) {
    super();
    this.validator = validator;
    this.onchange = onchange;
  }

  widget = null;
  value = "";
  data = {};
  error = null;
  validator = null;
  onchange = null;
  onchanged = null;

  setWidget(widget, onchanged) {
    this.widget = widget;
    this.onchanged = onchanged;
  }

  setValue(value = null, data = null) {
    this.value = value;
    this.data = data;
    if (this.onchange) this.onchange(this.value);
    if (this.onchanged) this.onchanged(this.value);
  }

  setError(error = null) {
    this.error = error;
    if (this.onchange) this.onchange(this.value);
    if (this.onchanged) this.onchanged(this.value);
  }

  getError() {
    if (this.error) return this.error;
    if (this.validator) return this.validator(this.value);
    return null;
  }
}
