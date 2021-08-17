import "carbon-components-svelte/css/white.css";
import App from "./App.svelte";
import Sentry from "./util/sentry";

Sentry.init();

const app = new App({
  target: document.body,
});

export default app;
