import React from "react";
import { Link, useLocation } from "react-router-dom";

const LinkPages = ({ lang, setSideBarOpen }) => {
  const location = useLocation();
  return (
    <>
      <Link
        className="pageLink"
        style={{
          ...linkStyle,
          textDecoration: location.pathname === "/" ? "underline" : "none",
          fontWeight: location.pathname === "/" ? "600" : "100",
          pointerEvents: location.pathname === "/" ? "none" : "auto",
        }}
        onClick={() => setSideBarOpen(false)}
        to={{ pathname: "/", hash: `#${lang}` }}
      >
        {lang === "EN" && <span>Home</span>}
        {lang === "BG" && <span>Едно</span>}
      </Link>
      <Link
        className="pageLink"
        style={{
          ...linkStyle,
          textDecoration:
            location.pathname === "/product" ? "underline" : "none",
          fontWeight: location.pathname === "/product" ? "600" : "100",
          pointerEvents: location.pathname === "/product" ? "none" : "auto",
        }}
        onClick={() => setSideBarOpen(false)}
        to={{ pathname: "/product", hash: `#${lang}` }}
      >
        {lang === "EN" && <span>Products</span>}
        {lang === "BG" && <span>Две</span>}
      </Link>
      <Link
        className="pageLink"
        style={{
          ...linkStyle,
          textDecoration: location.pathname === "/about" ? "underline" : "none",
          fontWeight: location.pathname === "/about" ? "600" : "100",
          pointerEvents: location.pathname === "/about" ? "none" : "auto",
        }}
        onClick={() => setSideBarOpen(false)}
        to={{ pathname: "/about", hash: `#${lang}` }}
      >
        {lang === "EN" && <span>About</span>}
        {lang === "BG" && <span>Tри</span>}
      </Link>
    </>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0px 10px",
};

export default LinkPages;
