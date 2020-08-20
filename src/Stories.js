import React from "react";
import {Link, Redirect, BrowserRouter, Route, Switch} from "react-router-dom";
import './story-styles.css'

export default function Stories() {
    return (
    <div className='storyCard'>
    <Link to="/chapter-one"><div>
      <img className='storyImg' src={require('./chapter-one.jpg')} />
        Chapter One</div></Link>

    </div>
  );
}
