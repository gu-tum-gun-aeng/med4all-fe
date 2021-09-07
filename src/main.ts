import "carbon-components-svelte/css/g100.css";
import App from "./App.svelte";
import Sentry from "./util/sentry";

Sentry.init();

const app = new App({
  target: document.body,
});

export default app;
