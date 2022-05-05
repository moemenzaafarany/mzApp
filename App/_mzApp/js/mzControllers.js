//========================== Controller
class mzController {}

//========================== Form Field
class mzFormController extends mzController {
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
class mzFieldController extends mzController {
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
