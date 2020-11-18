import React from "react";
import LangChange from "./small/LangChange";
import Anchor from "./small/Anchor";
import LinkPages from "./small/LinkPages";
import LogoTop from "./small/LogoTop";

const Sidebar = ({ lang, setLang, sideBarOpen, setSideBarOpen }) => {
  return (
    <div
      className="sidenav"
      style={{ width: sideBarOpen ? "calc(100vw - 30px)" : 0 }}
    >
      <button className="closebtn" onClick={() => setSideBarOpen(false)}>
        &times;
      </button>
      <LogoTop className="sidenav__logo" setSideBarOpen={setSideBarOpen} />{" "}
      <LinkPages lang={lang} setSideBarOpen={setSideBarOpen} />
      <Anchor
        setSideBarOpen={setSideBarOpen}
        lang={lang}
        className="sidenav__links"
      />
      <div className="sidenav__social">
        <a href="https://www.google.com/">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="https://www.google.com/">
          <i className="fa fa-instagram"></i>
        </a>
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
