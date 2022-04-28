//========================== mzApp
class mzApp {
  static mainWidget = null;
  // variables
  static routes;
  // constructor
  constructor({ routes = null }) {
    mzApp.routes = routes;
    //
    window.onload = () => {
      // run
      mzApp.run(mzApp.routes.getWidget());
    };
  }
  //
  static runApp(mzAppWidget) {
    document.body.innerHTML = "";
    document.body.append(new mzRoot({ child: mzAppWidget }).state());
  }
}
//========================== mzRoutes
class mzRoutes {
  //
  home;
  routes;
  fallback;
  currentRoute;
  //
  constructor({ home = "/", routes = {}, fallback = null }) {
    this.home = home;
    this.routes = routes;
    this.fallback = fallback;
    this.currentRoute = document.documentElement.getAttribute("mzapp-route");
  }
  //
  getWidget() {
    let route = this.currentRoute;
    if (this.routes[route]) return this.routes[route];
    return this.fallback;
  }
  //
  navigate(route) {
    let url = window.location.href;
    url = url.slice(0, -this.currentRoute.length) + route;
    this.currentRoute = route;

    window.history.replaceState(null, document.title, url);

    mzApp.run(this.getWidget());
  }
}
//========================== mzRoutes
class mzMetadata {
  //
  tabTitle;
  tabIcon;
  //
  constructor({ tabTitle = "Title", tabIcon }) {
    this.tabTitle = tabTitle;
    this.tabIcon = tabIcon;
    this.apply();
  }
  //
  apply() {
    // title
    document.title = this.tabTitle;
    // icon
    document.querySelectorAll("link[rel='icon']").forEach((el) => el.remove());
    let icon = document.createElement("link");
    icon.setAttribute("rel", "icon");
    icon.setAttribute("href", this.tabIcon);
    document.head.append(icon);
  }
}
