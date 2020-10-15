import React, { useState, useEffect } from "react";
import Boosting from "./components/Boosting";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Making from "./components/Making";
import Results from "./components/Results";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import "./style.css";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [lang, setLang] = useState("BG");
  const [bgScroll, setBgScroll] = useState(0);
  const parallaxStyle = {
    backgroundPositionY: `${bgScroll}%`,
  };
  let touchstartX,
    touchendX = 0;
  useEffect(() => {
    if (window.location.hash) {
      setLang(window.location.hash.toString().replace("#", ""));
    }
    window.addEventListener("scroll", () => {
      setBgScroll((window.pageYOffset / document.body.scrollHeight) * 50);
    });
    if (window.innerWidth < 768) {
      function handleStart(e) {
        touchstartX = e.changedTouches[0].screenX;
      }
      function handleEnd(e) {
        touchendX = e.changedTouches[0].screenX;
        if (touchendX - 50 > touchstartX) {
          setSideBarOpen(true);
        } else if (touchendX < touchstartX - 50) {
          setSideBarOpen(false);
        }
      }
      window.addEventListener("touchstart", handleStart, false);
      window.addEventListener("touchend", handleEnd, false);
      return () => {
        window.removeEventListener("touchstart", handleStart);
        window.removeEventListener("touchend", handleEnd);
      };
    }
  }, []);

  return (
    <div style={{ backgroundColor: sideBarOpen ? "#333" : "#fff" }}>
      <Sidebar
        lang={lang}
        setLang={setLang}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <Header
        lang={lang}
        setLang={setLang}
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
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
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
