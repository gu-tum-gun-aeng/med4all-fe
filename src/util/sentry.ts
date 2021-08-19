import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

const init = () =>
  Sentry.init({
    dsn: "https://1de5f68d4c1041dfbaa7e6ac6ed500e9@o960600.ingest.sentry.io/5908985",
    integrations: [new Integrations.BrowserTracing()],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

export default {
  init,
};
