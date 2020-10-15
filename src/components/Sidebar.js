import React from "react";
import Logo from "../pics/peak_logo.png";
import LangChange from "./small/LangChange";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const Sidebar = ({ lang, setLang, sideBarOpen, setSideBarOpen }) => {
  return (
    <div
      className="sidenav"
      style={{ width: sideBarOpen ? "calc(100vw - 30px)" : 0 }}
    >
      <button className="closebtn" onClick={() => setSideBarOpen(false)}>
        &times;
      </button>
      <div
        className="sidenav__logo"
        onClick={() => {
          scroll.scrollToTop();
          setSideBarOpen(false);
        }}
      >
        <img src={Logo} alt="Logo" />
      </div>
      <div className="sidenav__links">
        <Link
          onClick={() => setSideBarOpen(false)}
          to="description"
          offset={-100}
          smooth={true}
          duration={1000}
        >
          {lang === "EN" && <span>SERVICES</span>}
          {lang === "BG" && <span>Услуги</span>}
        </Link>
        <Link
          onClick={() => setSideBarOpen(false)}
          to="boosting"
          offset={-100}
          smooth={true}
          duration={1000}
        >
          {lang === "EN" && <span>CONSULTING</span>}
          {lang === "BG" && <span>Консултиране</span>}
        </Link>
        <Link
          onClick={() => setSideBarOpen(false)}
          to="making"
          offset={-100}
          smooth={true}
          duration={1000}
        >
          {lang === "EN" && <span>TECHNOLOGY</span>}
          {lang === "BG" && <span>Технология</span>}
        </Link>
        <Link
          onClick={() => setSideBarOpen(false)}
          to="results"
          offset={-100}
          smooth={true}
          duration={1000}
        >
          {lang === "EN" && <span>PRICING</span>}
          {lang === "BG" && <span>Цена</span>}
        </Link>
        <Link
          onClick={() => setSideBarOpen(false)}
          to="footer"
          offset={-100}
          smooth={true}
          duration={1000}
        >
          {lang === "EN" && <span>CONTACT</span>}
          {lang === "BG" && <span>Контакт</span>}
        </Link>
      </div>
      <div className="sidenav__social">
        <a href="https://www.google.com/" className="fa fa-facebook-f"></a>
        <a href="https://www.google.com/" className="fa fa-instagram"></a>
      </div>
      <LangChange
        area={"sidenav"}
        lang={lang}
        setLang={setLang}
        closeSidebar={() => setSideBarOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
