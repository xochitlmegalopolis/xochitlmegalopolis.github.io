import React from "react";
import {Link, Redirect, BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import 
import ChOne from "./ChOne"

<BrowserRouter>
<Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/stories"><Stories /></Route>
        <Route path="/blog"><Blog /></Route>
        <Route path="/chapter-one"><ChOne /></Route>
</Switch>
</BrowserRouter>