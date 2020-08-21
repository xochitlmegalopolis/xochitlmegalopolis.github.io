import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom"

import App from "./App";

ReactDOM.render(
  <HashRouter basename='/test-2'><App /></HashRouter>,
  document.getElementById('root')
);
