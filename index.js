import React from "react";
import ReactDOM from "react-dom";

import FlowManager from "./src/FlowManager.js";

ReactDOM.render(<FlowManager />, document.getElementById("app"));

module.hot.accept();
