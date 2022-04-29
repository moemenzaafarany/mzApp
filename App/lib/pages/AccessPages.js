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
          child: new mzFlex({
            direction: mzData.flexDirection.column,
            children: [
              new mzInputField({
                label: "login",
                hint: "email",
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
