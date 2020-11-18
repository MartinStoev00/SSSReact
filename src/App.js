import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/pages/MainPage";
import ProductsPage from "./components/pages/ProductsPage";
import AboutPage from "./components/pages/AboutPage";
import { motion, AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import "./scss/style.css";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [lang, setLang] = useState("BG");
  const [bgScroll, setBgScroll] = useState(0);
  const location = useLocation();
  const parallaxStyle = {
    backgroundPositionY: `${bgScroll}%`,
  };
  const animatePage = {
    variants: {
      initial: { x: "100vw", opacity: 0 },
      animate: { x: 0, opacity: 1 },
      transition: { duration: 0.4, type: "tween", delay: 0.4 },
      exit: { x: "-100vw", opacity: 0 },
    },
    initial: "initial",
    animate: "animate",
    transition: "transition",
    exit: "exit",
  };

  const amountSwiped = 70;
  useEffect(() => {
    let touchstartX,
      touchendX = 0;
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
        if (touchendX - amountSwiped > touchstartX) {
          setSideBarOpen(true);
        } else if (touchendX < touchstartX - amountSwiped) {
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
    <div
      style={{
        backgroundColor: sideBarOpen ? "#333" : "#fff",
        paddingTop: "73px",
      }}
    >
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
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/about">
            <motion.div {...animatePage}>
              <AboutPage
                lang={lang}
                sideBarOpen={sideBarOpen}
                parallaxStyle={parallaxStyle}
              />
            </motion.div>
          </Route>
          <Route path="/product">
            <motion.div {...animatePage}>
              <ProductsPage
                lang={lang}
                sideBarOpen={sideBarOpen}
                parallaxStyle={parallaxStyle}
              />
            </motion.div>
          </Route>
          <Route exact path="/">
            <motion.div {...animatePage}>
              <MainPage
                lang={lang}
                sideBarOpen={sideBarOpen}
                parallaxStyle={parallaxStyle}
              />
            </motion.div>
          </Route>
          <Route>
            <Redirect
              to={{
                pathname: "/",
                hash: `#${lang}`,
              }}
            />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
