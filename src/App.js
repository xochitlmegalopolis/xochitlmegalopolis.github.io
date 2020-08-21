import React from "react";
import {Link, Redirect, BrowserRouter, Route, Switch} from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import MenuImage from "./MenuImage";
import Stories from "./Stories"
import BlogApp from "./BlogApp"
import ChOne from "./ChOne"
import About from "./About"
import Entry1 from "./Entry1"

export default function App() {
    return (
    <div>
<BrowserRouter basename='glitchingtapestry.com'>
 <Switch>
    <Route exact path="/"><Home /><MenuImage /></Route>
    <Route path="/stories"><Home /><br /><center><Stories /></center></Route>
    <Route path="/blog"><Home /><br /><center><BlogApp /></center></Route>
    <Route path="/about"><Home /><center><About /></center></Route>
    <Route path="/chapter-one"><ChOne /></Route>
    <Route path="/blog-posts/the-creation-myth"><Entry1 /></Route>    
    </Switch>
    </BrowserRouter>
        </div>
  );
}
