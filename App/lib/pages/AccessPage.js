// packages
class AccessPage extends mzAppWidget {
  test = 0;

  constructor() {
    super();
  }

  build() {
    return new mzScaffold({
      body: new mzContainer({
        styling: [
          new mzSize(null, 100),
          new mzShadow(3),
          new mzPadding().symmetric(10, 20),
          new mzMargin(10),
          new mzCorner(10),
        ],
        child: new mzFlex({
          type: mzFlex.type.row,
          children: [
            new mzExpand({
              child: new mzImage({
                src: "https://exabytellc.com/_assets/media/logo.png",
                styling: [new mzSize(null, null)],
              }),
            }),

            new mzButton({
              onclick: () => {
                mzApp.routes.navigate("/home");
              },
              child: new mzText({
                text: "home",
              }),
            }),

            new mzButton({
              onclick: () => {
                this.test++;
                this.setState();
              },
              child: new mzText({
                text: this.test,
              }),
            }),
          ],
        }),
      }),
    });
  }
}
