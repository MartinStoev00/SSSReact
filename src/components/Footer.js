import React from 'react'
import Logo from '../pics/peak_logo.png'
import {animateScroll as scroll} from 'react-scroll'

const Footer = ({lang}) => {
    return (
        <div className="footer" id="footer">
			<img src={Logo} alt="Logo" className="footer__logo" onClick={() => scroll.scrollToTop()}/>
			<div className="footer__list">
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
				<div>{lang==="BG"&&<span>Нещо 1</span>}{lang==="EN"&&<span>Home1</span>}</div>
			</div>
			<p className="footer__text">Peak Social Media</p>
		</div>
    )
}

export default Footer
