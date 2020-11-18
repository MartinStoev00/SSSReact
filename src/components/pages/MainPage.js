import React from "react";
import Making from "../Making";
import Results from "../Results";
import Boosting from "../Boosting";
import Description from "../Description";
import Hero from "../Hero";

const MainPage = ({ lang, sideBarOpen, parallaxStyle }) => {
  return (
    <>
      <Hero lang={lang} sideBarOpen={sideBarOpen} />
      <div
        className="main"
        style={{
          opacity: sideBarOpen ? "0.6" : "1",
        }}
      >
        <Description lang={lang} />
        <div className="transp-bgc" style={parallaxStyle}></div>
        <Boosting lang={lang} />
        <div className="transp-bgc" style={parallaxStyle}></div>
        <Making lang={lang} />
        <div className="transp-bgc" style={parallaxStyle}></div>
        <Results lang={lang} />
        <div className="transp-bgc" style={parallaxStyle}></div>
      </div>
    </>
  );
};

export default MainPage;
