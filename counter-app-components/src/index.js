import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//Importing bootstrap: npm i bootstrap@4.1.1
import "bootstrap/dist/css/bootstrap.css";
//Importing our new Counter class
import Counters from "./components/counters";

//ReactDOM.render(<App />, document.getElementById("root"));
//Rendering our Counter component
ReactDOM.render(<Counters />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
