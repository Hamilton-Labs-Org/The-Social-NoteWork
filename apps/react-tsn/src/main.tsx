import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./app/app";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Uncomment the line belows if you want to use PostHog in development
// posthog.init(import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY, {
// 	api_host: import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST,
// });

if (
	!window.location.host.includes("127.0.0.1") &&
	!window.location.host.includes("localhost")
) {
	posthog.init(import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_KEY, {
		api_host: import.meta.env.VITE_REACT_APP_PUBLIC_POSTHOG_HOST,
	});
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	// <StrictMode>
		<PostHogProvider client={posthog}>
			<Router>
				<App />
			</Router>
		</PostHogProvider>
	// </StrictMode>,
);
