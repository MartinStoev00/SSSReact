import React, { useState, useEffect, useRef } from "react";
import LangChange from "./small/LangChange";
import logo from "../pics/peak_logo.png";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Header = ({ lang, setLang, sideBarOpen, setSideBarOpen }) => {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    setHeight(elementRef.current.clientHeight);
  }, []);

  return (
    <>
      <div
        className="header"
        style={{ opacity: sideBarOpen ? 0.6 : 1 }}
        ref={elementRef}
      >
        <div className="header__logo" onClick={() => scroll.scrollToTop()}>
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__group">
          <Link
            to="description"
            offset={-100}
            smooth={true}
            duration={1000}
            className="header__links"
          >
            {lang === "EN" && <span>SERVICES</span>}
            {lang === "BG" && <span>Услуги</span>}
          </Link>
          <Link
            to="boosting"
            offset={-100}
            smooth={true}
            duration={1000}
            className="header__links"
          >
            {lang === "EN" && <span>CONSULTING</span>}
            {lang === "BG" && <span>Консултиране</span>}
          </Link>
          <Link
            to="making"
            offset={-100}
            smooth={true}
            duration={1000}
            className="header__links"
          >
            {lang === "EN" && <span>TECHNOLOGY</span>}
            {lang === "BG" && <span>Технология</span>}
          </Link>
          <Link
            to="results"
            offset={-100}
            smooth={true}
            duration={1000}
            className="header__links"
          >
            {lang === "EN" && <span>PRICING</span>}
            {lang === "BG" && <span>Цена</span>}
          </Link>
          <Link
            to="footer"
            offset={-100}
            smooth={true}
            duration={1000}
            className="header__links"
          >
            {lang === "EN" && <span>CONTACT</span>}
            {lang === "BG" && <span>Контакт</span>}
          </Link>
        </div>
        <div className="header__end">
          <a href="https://www.google.com/" className="header__end-link"><i className="fa fa-facebook-f"></i></a>
          <a href="https://www.google.com/" className="header__end-link"><i className="fa fa-instagram"></i></a>
          <LangChange area={"header"} lang={lang} setLang={setLang} />
        </div>
        <div className="sidenav__btn" onClick={() => setSideBarOpen(true)}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
      <div className="header__placeholder" style={{ height: height }}></div>
    </>
  );
};

export default Header;
