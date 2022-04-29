// packages
export class LoginPage extends mzWidget {
  static route = "/login";
  email = "";
  constructor() {
    super();
  }

  build() {
    return new mzScaffold({
      body: new mzCenter({
        child: new mzContainer({
          padding: mzPadding.all(10),
          child: new mzFlex({
            direction: mzData.flexDirection.column,
            children: [
              new mzInputField({
                label: "email",
                hint: "enter your email here",
                value: this.email,
                onchanged: (value) => {
                  this.email = value;
                  this.setState();
                },
              }),
            ],
          }),
        }),
      }),
    });
  }
}
