import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import "./styles.css";
import BlogApp from './BlogApp';
import Entry1 from './Entry1'

const Blog = () => (
  <div>
      <BrowserRouter>
        <div>
        <Route exact path='/blog'><BlogApp /></Route>
        </div>
    </BrowserRouter>
  </div>
);

export default Blog