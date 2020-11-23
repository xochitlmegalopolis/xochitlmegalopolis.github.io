import React from "react";
import {Link} from "react-router-dom";



class Deceivers2 extends React.Component {
  render() {
    return ( 

    <div className="homeBody">
    <div className='desktopNext'> 
    <div className='contentlinks-next'>
    <Link className='h1links' to="/">
    «</Link>
    </div>
    </div>
    <div className='homeContent'>
     <img className='comic' src={require('../../images/deceivers-panel-2.jpg')} />
     <div className='caption'>
    We were just living our lives.
    </div>
    </div>
    <div className='desktopNext'> 
    <div className='contentlinks-prev'>
    <Link className='h1links' to="/deceivers-1">
    »</Link>
    </div>
    </div>
    <div className='mobileNext'>
    <div className='footerlinks'>
    <Link className='h1links' to="/deceivers-1"><center>+</center>Previous</Link>
    <Link className='h1links' to="/"><center>+</center>Next</Link>
    </div>
    </div>
    </div>
);
    }
}

export default Deceivers2