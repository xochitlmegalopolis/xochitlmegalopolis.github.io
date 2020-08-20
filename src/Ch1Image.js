import React from "react";
import './ch1-styles.css'

class Ch1Image extends React.Component {
  render() {
    return ( <img className='ch1Img' src={require('./chapter-one.jpg')} />
    );
}
}


export default Ch1Image