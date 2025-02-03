import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./index.css";
import App from "./App";
import { Store } from "./RTK/Store";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import ContextProvider from "./Context/ContextProvider";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const root = ReactDOM.createRoot(document.getElementById("root"));

// ..
AOS.init();
root.render(
	<React.StrictMode>
		<Provider store={Store}>
			<ContextProvider>
				<CookiesProvider>
					<App />
				</CookiesProvider>
			</ContextProvider>
		</Provider>
	</React.StrictMode>
);
