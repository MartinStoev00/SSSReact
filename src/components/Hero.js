import React from 'react'
import HeroImg from '../pics/peak_homepage.png'

const Hero = ({sideBarOpen,lang}) => {
    return (
      <div className="hero" style={{opacity:sideBarOpen?0.6:1}}>
        <div className="hero__text">
          <img src={HeroImg} alt="Logo"/>
          <h3>
            {lang==="BG"&&<span>Елате при <b>нас</b> за да успеете</span>}
            {lang==="EN"&&<span>Come to <b>us</b> in order to succeed</span>}
          </h3>
          <a href="https://www.google.com/">
            {lang==="BG"&&<span>Научете Повече</span>}
            {lang==="EN"&&<span>Learn More</span>}
          </a>
        </div>
      </div>
    )
}

export default Hero
