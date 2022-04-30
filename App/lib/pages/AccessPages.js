// packages
export class LoginPage extends mzWidget {
  static route = "/login";

  formGroup = new mzFormGroupController();
  email = new mzFormFieldController();

  row = false;
  constructor() {
    super();
    this.email.value = "moemen";
  }

  build() {
    return new mzScaffold({
      body: new mzCenter({
        child: new mzScroll({
          child: new mzContainer({
            margin: mzMargin.all(5),
            padding: mzPadding.all(10),
            child: new mzGrid({
              columns: 2,
              mainAlignment: mzMainAlign.stretch,
              crossAlignment: mzCrossAlign.stretch,
              wrapAlignment: mzWrapAlign.center,
              children: [
                new mzContainer({
                  size: mzSize.value(200, 100),
                  child: new mzText({ text: "text" }),
                }),

                !this.row ? new mzText({ text: "column" }) : null,

                new mzButton({
                  onclick: () => {
                    if (this.row) this.row = false;
                    else this.row = true;
                    this.setState();
                  },
                  child: "Some Text",
                }),

                new mzFormField({
                  formGroup: this.formGroup,
                  controller: this.email,
                  label: "email",
                  hint: "enter your email here",
                  onchanged: (value) => {
                    this.setState();
                  },
                  validator: mzValidators.email(false),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }
}
