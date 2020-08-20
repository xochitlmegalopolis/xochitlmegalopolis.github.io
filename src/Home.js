import React, { Component } from "react";
import Header from "./Header.js";
import HomeLinks from "./HomeLinks.js";
import MenuImage from "./MenuImage";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import Stories from "./Stories";
import Blog from "./Blog"


class Home extends React.Component {
  render() {
    return ( 
<div className="Home">
    <Header />
    <HomeLinks />
  </div>
);
    }
}

export default Home