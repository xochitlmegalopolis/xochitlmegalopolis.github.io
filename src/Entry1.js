import React, { Component } from "react";
import Entry1Body from './Entry1Body'
import './blog-styles.css'

export default function Entry1() {
    return (
    <div>
      <div className='hdrBg'>
      <div className='hdrBdr'>
      <div className='postHdr'>
        <center>
       <img className='featImg' src={require('./bird.jpg')} />
       </center>
       </div>
       </div>
       </div>
       <center>
      <div>
        <div className='entryBg'></div>
        <div className='entryHdr'>The Creation Myth</div>
        <Entry1Body />
      </div>
      </center>
   </div>
  );
}