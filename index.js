import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import SiteManager from "./src/SiteManager.js";

ReactDOM.render(
    <BrowserRouter>
        <SiteManager />
    </BrowserRouter>,
    document.getElementById("app")
);

module.hot.accept();
