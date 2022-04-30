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
        child: new mzContainer({
          padding: mzPadding.all(10),
          child: new mzFlex({
            flow: this.row ? mzFlexFlow.row : mzFlexFlow.column,
            mainAlignment: mzMainAlign.center,
            crossAlignment: mzCrossAlign.center,
            children: [
              new mzText({ text: "text" }),

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
    });
  }
}
