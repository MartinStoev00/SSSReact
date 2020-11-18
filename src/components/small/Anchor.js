import React from "react";
import { Link } from "react-scroll";

const Anchor = ({ setSideBarOpen, lang, className }) => {
  return (
    <div className={className}>
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
  );
};

export default Anchor;
