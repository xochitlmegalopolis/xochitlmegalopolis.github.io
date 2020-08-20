import React from "react";
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";
import './blog-styles.css';

export default function BlogApp() {
    return (
        <div className='blogCard'>
    <Link to='/blog-posts/the-creation-myth'>
        <img className='entryImg' src={require('./bird.jpg')} />
        <p />The Creation Myth
        </Link>
    </div>
  );
}
