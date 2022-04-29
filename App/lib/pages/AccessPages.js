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
        child: new mzFlex({
          direction: mzData.flexDirection.column,
          children: [
            new mzInputField({
              hint: "email",
              value: this.email,
              onchanged: (value) => {
                console.log(value);
                this.email = value;
                this.setState();
              },
            }),
          ],
        }),
      }),
    });
  }
}
