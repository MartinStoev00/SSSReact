import React from "react";
import LangChange from "./small/LangChange";
import Anchor from "./small/Anchor";
import LogoTop from "./small/LogoTop";
import LinkPages from "./small/LinkPages";

const Header = ({ lang, setLang, sideBarOpen, setSideBarOpen }) => {
  return (
    <>
      <div className="header" style={{ opacity: sideBarOpen ? 0.6 : 1 }}>
        <LogoTop className="header__logo" setSideBarOpen={setSideBarOpen} />
        <Anchor
          setSideBarOpen={setSideBarOpen}
          lang={lang}
          className="header__group"
        />
        <div className="header__end">
          <a href="https://www.google.com/" className="header__end-link">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="https://www.google.com/" className="header__end-link">
            <i className="fa fa-instagram"></i>
          </a>
          <LinkPages lang={lang} setSideBarOpen={setSideBarOpen} />
          <LangChange area={"header"} lang={lang} setLang={setLang} />
        </div>
        <div className="sidenav__btn" onClick={() => setSideBarOpen(true)}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
