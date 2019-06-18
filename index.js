import React from "react";
import ReactDOM from "react-dom";

import Login from "./src/gateway/LoginWidget";

ReactDOM.render(<Login />, document.getElementById("app"));

module.hot.accept();
