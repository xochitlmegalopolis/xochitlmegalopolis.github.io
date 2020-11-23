import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";



class Deceivers1 extends React.Component {
  render() {
    return ( 

    <div className="homeBody">
    <div className='desktopNext'> 
    <div className='contentlinks-next'>
    <Link className='h1links' to="/deceivers-2">
    «</Link>
    </div>
    </div>
    <div className='homeContent'>
    <img className='comic' src={require('../../images/deceivers-panel-1.jpg')} />
    <div className='caption'>
    They were never supposed to exist.
    </div>
    </div>
    <div className='mobileNext'>
    <div className='footerlinks'>
        <Link className='h1links' to='/deceivers-2'><center>+</center>Next</Link>
        </div>
        </div>
    </div>
);
    }
}

export default Deceivers1