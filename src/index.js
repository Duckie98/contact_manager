import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// display App component to class "root" in index.html
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
