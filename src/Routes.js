import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About/About"
import Deceivers2 from "./pages/Comic/Deceivers-2"
import Deceivers3 from "./pages/Comic/Deceivers-3"
import Deceivers1 from "./pages/Comic/Deceivers-1"

export default function Routes() {
    return (
<BrowserRouter basename='/'>
 <Switch>
    <Route exact path="/"><Header /><Deceivers3 /><Footer /></Route>
    <Route path='/deceivers-2'><Header /><Deceivers2 /><Footer /></Route>
    <Route path='/deceivers-1'><Header /><Deceivers1 /><Footer /></Route>
    <Route path="/about"><Header /><About /></Route>    
    </Switch>
    </BrowserRouter>
  );
}
