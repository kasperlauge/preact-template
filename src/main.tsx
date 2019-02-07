import { h, render } from "preact";
import { Provider } from "preact-redux";
import App from "./app";
import { register } from "./service-worker";
import { configureStore } from "./state/store";

const env = process.env.NODE_ENV;
if (env === "production") {
	register();
}
const store = configureStore();
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("app")
);
