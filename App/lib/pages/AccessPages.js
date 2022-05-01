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
            margin: mzMargin.all(10),
            padding: mzPadding.all(20),
            radius: mzRadius.all(5),
            child: new mzFlex({
              flow: mzFlexFlow.column,
              mainAlignment: mzMainAlign.start,
              crossAlignment: mzCrossAlign.stretch,
              wrapAlignment: mzWrapAlign.stretch,
              rowGap: 20,
              children: [
                new mzText({ text: "Login" }),

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

                new mzDivider({}),

                new mzButton({
                  onclick: () => {
                    if (this.row) this.row = false;
                    else this.row = true;
                    this.setState();
                  },
                  child: "Login",
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }
}
