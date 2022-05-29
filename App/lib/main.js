import {
  App,
  Style,
  Theme,
  Data,
  Widget,
  Controller,
} from "./../_mzApp/js/main.js";

var blue = new Data.Color(0, 0, 255);

var cardTheme = Theme.Container.card({
  Width: Style.Width.set({
    value: Data.Num.value(100),
  }),
  Height: Style.Height.set({
    value: Data.Num.value(100),
  }),
  BackColor: Style.BackColor.set(blue),
});

class HomePage extends Widget.Widget {
  x = 1;
  r = false;
  setInterva;
  constructor() {
    super();

    clearInterval(this.setInterva);
    this.setInterva = setInterval(() => {
      if (this.x > 100) this.r = true;
      if (this.x < 1) this.r = false;
      if (this.r == false) this.x++;
      else this.x--;
      cardTheme.BackColor = Style.BackColor.set(blue.brightness(this.x / 100));
      cardTheme.Width = Style.Width.set({
        value: Data.Num.value(100 + this.x * 2),
      });
      cardTheme.Height = Style.Height.set({
        value: Data.Num.value(100 + this.x * 2),
      });

      this.setState();
    }, 100);
  }

  build() {
    return new Widget.Container({
      theme: cardTheme,
      child: new Widget.Center({
        child: new Widget.Button({
          child: new Widget.Text({
            text: "Home " + this.x,
            theme: Theme.Text.Header1({
              ForeColor: Style.ForeColor.set(
                Data.Color.white.brightness(-this.x / 50)
              ),
            }),
          }),
          onclick: () => {
            App.Routes.navigate("/h2");
          },
        }),
      }),
    });
  }
}

class HomePage2 extends Widget.Widget {
  x = 1;
  r = false;
  setInterva;
  constructor() {
    super();

    clearInterval(this.setInterva);
    this.setInterva = setInterval(() => {
      if (this.x > 100) this.r = true;
      if (this.x < 1) this.r = false;
      if (this.r == false) this.x++;
      else this.x--;
      cardTheme.BackColor = Style.BackColor.set(blue.brightness(this.x / 100));
      cardTheme.Width = Style.Width.set({
        value: Data.Num.value(100 + this.x * 2),
      });
      cardTheme.Height = Style.Height.set({
        value: Data.Num.value(100 + this.x * 2),
      });
      this.setState();
    }, 100);
  }

  build() {
    return new Widget.Container({
      theme: cardTheme,
      child: new Widget.Button({
        child: new Widget.Text({
          text: "Home2 " + this.x,
          theme: Theme.Text.Header1({
            ForeColor: Style.ForeColor.set(
              Data.Color.white.brightness(-this.x / 50)
            ),
          }),
        }),
        onclick: () => {
          App.Routes.navigate("/home");
        },
      }),
    });
  }
}

// set routes
App.Routes.set({
  routes: {
    "/home": new HomePage(),
    "/h2": new HomePage2(),
  },
  home: HomePage.route,
  fallback: new HomePage(),
});

// run app
App.run();
