// packages
export class HomePage extends mzWidget {
  static route = "/home";

  test = 3;
  text = "Word ".repeat(this.test);

  constructor() {
    super();
  }

  build() {
    return new mzScaffold({
      body: new mzContainer({
        styling: [
          new mzSize(null, 400),
          new mzShadow(this.test),
          new mzPadding().symmetric(10, 20),
          new mzMargin(10),
          new mzCorner(10),
        ],
        child: new mzFlex({
          direction: mzData.flexDirection.column,
          children: [
            new mzExpand({
              child:
                this.test > 5
                  ? new mzButton({
                      onclick: () => {
                        mzApp.routes.navigate("/login");
                      },
                      child: new mzText({
                        text: "access",
                      }),
                    })
                  : null,
            }),

            new mzButton({
              onclick: () => {
                mzApp.showModal({
                  child: new mymodal(),
                  barrierDismissible: false,
                });
              },
              child: new mzText({
                text: "modal",
              }),
              styling: [
                new mzFlexExpand(1),
                new mzCorner(50),
                new mzColor(
                  "#fff",
                  this.test > 5 ? mzData.colors.Green : mzData.colors.Blue
                ),
                new mzMargin().none(),
              ],
            }),

            new mzExpand({
              child: new mzFlex({
                mainAlignment: mzData.flexMainAlign.stretch,
                crossAlignment: mzData.flexCrossAlign.stretch,
                children: [
                  new mzButton({
                    onclick: () => {
                      this.test--;
                      this.text = "Word ".repeat(this.test);
                      this.setState();
                    },
                    child: new mzText({
                      text: "-",
                    }),
                    styling: [
                      new mzFlexExpand(1),
                      new mzColor("#fff", mzData.colors.Red),
                      new mzMargin().none(),
                    ],
                  }),
                  new mzButton({
                    onclick: () => {
                      this.test++;
                      this.text = "Word ".repeat(this.test);
                      this.setState();
                    },
                    child: new mzText({
                      text: "+",
                    }),
                    styling: [
                      new mzFlexExpand(1),
                      new mzCorner(50),
                      new mzColor(
                        "#fff",
                        this.test > 5 ? mzData.colors.Green : mzData.colors.Blue
                      ),
                      new mzMargin().none(),
                    ],
                  }),
                ],
              }),
            }),

            new mzExpand({
              child: new mzFlex({
                direction: mzData.flexDirection.column,
                mainAlignment: mzData.flexMainAlign.stretch,
                crossAlignment: mzData.flexCrossAlign.stretch,
                children: [
                  new mzText({
                    styling: [
                      new mzFlexExpand(1),
                      new mzMargin(2.5),
                      new mzColor("#fff", "#333"),
                      new mzCorner(this.test * 5),
                      new mzPadding().symmetric(null, 10),
                    ],
                    overflow: mzData.textOverflow.wrap,
                    text: this.test + ": " + this.text,
                  }),
                  new mzText({
                    styling: [
                      new mzFlexExpand(1),
                      new mzMargin(2.5),
                      new mzColor("#fff", "#333"),
                      new mzCorner(this.test * 5),
                      new mzPadding().symmetric(null, 10),
                    ],
                    overflow: mzData.textOverflow.clip,
                    text: this.test + ": " + this.text,
                  }),
                  new mzText({
                    styling: [
                      new mzFlexExpand(1),
                      new mzMargin(2.5),
                      new mzColor("#fff", "#333"),
                      new mzCorner(this.test * 5),
                      new mzPadding().symmetric(null, 10),
                    ],
                    overflow: mzData.textOverflow.ellipses,
                    text: this.test + ": " + this.text,
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  }
}

export class mymodal extends mzWidget {
  constructor() {
    super();
  }

  build() {
    return new mzCenter({
      styling: [new mzPadding(25)],
      child: new mzContainer({
        styling: [new mzSize().percent(100, 100)],
        child: new mzButton({
          onclick: () => {
            mzApp.hideModal();
          },
          child: new mzText({ text: "close" }),
        }),
      }),
    });
  }
}
