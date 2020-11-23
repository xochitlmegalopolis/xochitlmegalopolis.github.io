import React from "react";
import {Link} from "react-router-dom";



class Deceivers3 extends React.Component {
  render() {
    return ( 

    <div className="homeBody">
    <div className='desktopNext'> 
    <div className='contentlinks-next'>
    </div>
    </div>
    <div className='homeContent'>
     <img className='comic' src={require('../../images/deceivers-panel-3.jpg')} />
     <div className='caption'>
    When they came, they ruined everything.
    </div>
    </div>
    <div className='desktopNext'> 
    <div className='contentlinks-prev'>
    <Link className='h1links' to="/deceivers-2">
    »</Link>
    </div>
    </div>
    <div className='mobileNext'>
    <div className='footerlinks'>
    <Link className='h1links' to="/deceivers-2"><center>+</center>Previous</Link>
    </div>
    </div>
    </div>
);
    }
}

export default Deceivers3