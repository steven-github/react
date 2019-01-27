import React from "react";
import ReactDOM from "react-dom";
import App from "./componentes/App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

//ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<App name="Steven" />, document.getElementById("root"));
ReactDOM.render(
  <App name="Steven" message="Mensaje 123..." />,
  document.getElementById("root")
);
