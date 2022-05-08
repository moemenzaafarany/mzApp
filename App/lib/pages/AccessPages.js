// packages
export class LoginPage extends mzWidget {
  static route = "/login";

  //formGroup = new mzFormController();
  email = new mzFieldController({
    onchanged: (value) => {
      console.log(value);
    },
    validator: mzValidators.email(false),
  });
  org = new mzFieldController({
    validator: mzValidators.notEmpty(),
    onchanged: (value) => {
      console.log(value);
    },
  });

  orgs = [];

  row = false;
  constructor() {
    super();
    this.email.value = "moemen";

    for (let i = 1; i <= 100; i++) {
      this.orgs.push({ id: i, name: `org ${i}` });
    }
  }

  build() {
    return new mzScaffold({
      body: new mzCenter({
        child: new mzScroll({
          child: new mzContainer({
            margin: mzMarginUI.all(10),
            padding: mzPaddingUI.all(20),
            radius: mzRadiusUI.all(5),
            child: new mzFlex({
             // flow: mzFlexFlow.column,
            //  mainAlignment: mzMainAlign.start,
             // crossAlignment: mzCrossAlign.stretch,
             // wrapAlignment: mzWrapAlign.stretch,
              rowGap: 20,
              children: [
                new mzText({ text: "Login" }),

                new mzFieldInput({
                  controller: this.email,
                  label: "hi",
                  hint: "ass",
                }),
                /*
                new mzFormField({
                  formGroup: this.formGroup,
                  controller: this.email,
                  label: "email",
                  hint: "enter your email here",
                }),

                new mzFormSelect({
                  formGroup: this.formGroup,
                  controller: this.org,
                  label: "org",
                  hint: "Choose your org",
                  options: this.orgs.mzGenerate(
                    (i, val) =>
                      new mzSelectOption({
                        controller: this.org,
                        value: val["name"],
                        child: new mzText({ text: val["name"] }),
                      })
                  ),
                }),*/

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
