import { LoginPage } from "./pages/AccessPages.js";
import { HomePage } from "./pages/homepage.js";

// mzWeb init
new mzApp({
  routes: new mzRoutes({
    routes: {
      [HomePage.route]: new HomePage(),
      [LoginPage.route]: new LoginPage(),
    },
    home: HomePage.route,
    fallback: new HomePage(),
  }),
});
