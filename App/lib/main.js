// mzWeb init
new mzApp({
  routes: new mzRoutes({
    routes: {
      "/home": new HomePage(),
      "/login": new AccessPage(),
    },
    home: "/home",
    fallback: new HomePage(),
  }),
});

var globalTest = 1;
