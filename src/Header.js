import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
render() {
  return <div className='menuDiv'><div className='homeTitle-mb'>
    <b>The Glitch in the Tapestry</b></div>
    <div className='homeTitle-dk'>
      <b>The Glitch in the Tapestry :</b>
    </div>
    <hr className='hrLine'></hr>
    <div className='homeLinks'>
  <Link className ='h1links' to='/deceivers-1'><center>+</center> volkscomic</Link>  
  <Link className='h1links' to='/about'><center>+</center> about</Link>
 </div>
 </div>;
}
}
export default Header