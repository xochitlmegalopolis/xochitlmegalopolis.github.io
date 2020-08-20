import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom"

export default function HomeLinks() {
    return (
    <div className='menuDiv'>
    <br />
    <Link className='homeLinks' to="/stories">Stories</Link>
    <Link className='homeLinks' to="/blog">Blog</Link>
    <Link className='homeLinks' to="/about">About</Link>
    </div>
  );
}
