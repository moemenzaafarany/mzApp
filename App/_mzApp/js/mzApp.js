import * as mzSTYLE from "./mzStyle.js";
import * as mzTHEME from "./mzTheme.js";
import * as mzDATA from "./mzData.js";
import * as mzWIDGET from "./mzWidget.js";
import * as mzCONTROLLER from "./mzController.js";
/*=========================*/
// app class:
export class App {
  static mainWidget = null;
  //
  static showModal({ child = null, barrierDismissible = false }) {
    let modals = html.modals();
    modals.innerHTML = "";
    modals.classList.add("show");
    if (barrierDismissible) modals.classList.add("dismissible");
    modals.append(child.state());
    document.mzEvent("mzsetup");
  }
  //
  static hideModal() {
    let modals = html.modals();
    modals.classList.remove("show");
    modals.classList.remove("dismissible");
    modals.innerHTML = "";
    document.mzEvent("mzsetup");
  }
  //
  static widgetIds = 0;
  static widgetTree = {};
  static getId() {
    this.widgetIds++;
    return this.widgetIds;
  }
}
/*=========================*/
// app html class:
export class Html {
  static html() {
    return document.documentElement;
  }
  static body() {
    return document.body;
  }
  static headTitle(title = null) {
    if (title) document.title = title;
    return document.title;
  }
  static headIcon() {
    return document.getElementById("mztab-icon");
  }
  static headStyle(css = null) {
    let style = document.getElementById("mzhead-style");
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    return style;
  }
  static root() {
    return document.querySelector("body mzroot");
  }
  static modals() {
    return document.querySelector("body mzmodals");
  }
  static dirLTR() {
    return document.documentElement.html.getAttribute("dir") != "rtl";
  }
}
/*=========================*/
// app routes class:
export class Routes {
  //
  static home;
  static routes;
  static fallback;
  static currentRoute;
  //
  static set({ home = "/", routes = {}, fallback = null }) {
    this.home = home;
    this.routes = routes;
    this.fallback = fallback;
    this.currentRoute = document.documentElement.getAttribute("mzroute");
  }
  //
  static getWidget() {
    let route = this.currentRoute;
    if (this.routes[route]) return this.routes[route];
    return this.fallback;
  }
  //
  static navigate(route) {
    let url = window.location.href;
    url = url.slice(0, -this.currentRoute.length) + route;
    this.currentRoute = route;

    window.history.replaceState(null, document.title, url);

    run(this.getWidget());
  }
}
/*=========================*/
// app routes funciton:
export function run(widget = Routes.getWidget()) {
  //
  Html.headStyle(mzSTYLE.Styles.css());
  //
  let root = Html.root();
  root.innerHTML = "";
  root.append(widget.state());
  document.mzEvent("mzsetup");
}
