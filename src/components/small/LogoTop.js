import React from "react";
import logo from "../../pics/logo2.png";
import { animateScroll as scroll } from "react-scroll";

const LogoTop = ({ className, setSideBarOpen }) => {
  return (
    <div
      className="header__logo"
      onClick={() => {
        scroll.scrollToTop();
        setSideBarOpen(false);
      }}
    >
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default LogoTop;
