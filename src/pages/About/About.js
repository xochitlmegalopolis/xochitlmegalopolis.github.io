import React from "react";


const About = () => (
  <div className='aboutBody'>
  <div className='aboutContent'>
    <br />
    <center><div className='aboutGlitch'>
      <div className='aboutGlitch-text'><i>The Glitch in the Tapestry</i> is a digital <i>volkscomic</i> about the triumph of ancient desires over modern labyrinths. <p /></div></div>
      <div className='aboutUs'><div className='aboutUs-Hd'><b>Contributors :</b><p /></div>
      <div className='aboutSection'><img className='aboutPhoto' src={require('../../images/bio-hk.jpg')} />
      <div className='bioText'><div className='bioName'><i>Haley Kynefin:</i></div>
      <div className='bioContent'>Creator, author and artist. 
      Kynefin writes
      and draws the bulk of the <i>volkscomic</i> in a crude 
      ink-and-brush-pen style one might liken to cave painting.</div></div></div>
      <div className='aboutSection'>
      <img className='aboutPhoto' src={require('../../images/tapestry-corte.JPG')} />
      <div className='bioText'><div className='bioName'><i>Nick Schauer:</i></div> 
      <div className='bioContent'>Schauer is an LA-based artist who draws
      his influence from the monsters of the mind and other horror elements.      
      A long-time artist of all things twisted, horror, sci-fi
      and the otherworldly, it is his goal to spread awareness
      to the struggles of mental health through his art, stories and commission work.
      Follow for stories, inspiration, art and products on <a className='bodylinks' href="https://nickmonsters.com">nickmonsters.com</a>
    </div>
    </div>
    </div>
    </div>
    </center> 
  </div>
  </div>
);

export default About