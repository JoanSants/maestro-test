import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@j8s/microfrontend",
  app: () => System.import("@j8s/microfrontend"),
  activeWhen: () =>
    ["/", "/about", "/contacts", "/content"].includes(location.pathname),
});

registerApplication({
  name: "@j8s/microfrontend-partial",
  app: () => System.import("@j8s/microfrontend-partial"),
  activeWhen: ["/microfrontend-partial"],
});

start({
  urlRerouteOnly: true,
});
