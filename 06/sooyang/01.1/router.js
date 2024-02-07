export default () => {
  const routes = [];
  let notFount = () => {};
  const router = {};

  const checkRouter = () => {
    const currentRoute = routes.find((route) => {
      return window.location.hash === route.fragment;
    });

    if (!currentRoute) {
      notFount();
      return;
    }

    return currentRoute.component();
  };

  router.setNotFound = (cb) => {
    notFount = cb;
    return router;
  };

  router.addRoute = (fragment, component) => {
    routes.push({
      fragment,
      component,
    });
    return router;
  };

  router.start = () => {
    window.addEventListener("hashchange", checkRouter);

    if (window.location.hash) {
      window.location.hash = "#/";
    }

    checkRouter();
  };
  return router;
};
