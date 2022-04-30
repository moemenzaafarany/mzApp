//========================== Controller
class mzController {}

//========================== Form Group
class mzFormGroupController extends mzController {
  constructor() {
    super();
  }

  Widgets = [];

  validate() {}
}

//========================== Form Field
class mzFormFieldController extends mzController {
  constructor() {
    super();
  }

  widget = null;
  value = "";
  error = false;
  validator = null;
  onchange = null;

  setWidget(widget, validator) {
    this.widget = widget;
    this.validator = validator;
    if (this.validator) this.error = !!this.validator(this.value);
  }

  setValue(value) {
    this.value = value;
    if (this.validator) this.error = !!this.validator(this.value);
    if (this.onchange) () => this.onchange(this.value);
  }
}
