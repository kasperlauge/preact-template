import { h, render } from "preact";
import App from "./app";
import { register } from "./service-worker";

const env = process.env.NODE_ENV;
if (env === "production") {
	register();
}

render(<App />, document.getElementById("app"));
