import React, { useState } from "react";
import BG from "../../pics/flag-BG.png";
import EN from "../../pics/flag-EN.png";

const LangChange = ({ area, lang, setLang, closeSidebar }) => {
  const [order, setOrder] = useState([lang, lang === "EN" ? "BG" : "EN"]);
  const [dropdownActive, setDropdownActive] = useState(false);
  const ImageLang = ({ first }) => {
    const langOne = lang === "BG" ? BG : EN;
    const langTwo = lang === "BG" ? EN : BG;
    return (
      <>
        <div
          style={{ display: "inline", margin: "30px" }}
          onClick={() => {
            if (!first) {
              setLang(order[1]);
              setOrder([order[1], order[0]]);
              setDropdownActive(!dropdownActive);
              window.location.hash = `#${order[1]}`;
              if (area === "sidenav") {
                closeSidebar();
              }
            } else {
              setDropdownActive(!dropdownActive);
            }
          }}
        >
          <img
            src={first ? langOne : langTwo}
            alt={`${lang}`}
            style={{ opacity: first ? 1 : 0.65 }}
          />
          {first && (
            <i
              className="fa fa-chevron-down"
              style={{
                transition: "0.3s",
                transform: dropdownActive ? "rotate(180deg)" : "rotate(0deg)",
                fontSize: "12px",
                margin: "-5px 5px 0px",
              }}
            ></i>
          )}
        </div>
      </>
    );
  };

  return (
    <div
      style={{
        display: "inline",
        cursor: "pointer",
      }}
    >
      <div className={`${area}__lang`}>
        <div className={`${area}__lang__btn`}>
          <ImageLang first={true} />
        </div>
        <div
          className={`${area}__lang__dropdown`}
          style={{ display: dropdownActive ? "block" : "none" }}
        >
          <ImageLang first={false} />
        </div>
      </div>
    </div>
  );
};

export default LangChange;
