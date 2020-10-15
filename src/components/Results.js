import React from "react";
import David1 from "../pics/david1.webp";
import Shannon1 from "../pics/shannon1.webp";
import JingBo from "../pics/jingbo1.webp";

const Results = ({ lang }) => {
  return (
    <div className="results" id="results">
      <h1 className="results__heading  heading__underline">
        {lang === "EN" && <span>The Results</span>}
        {lang === "BG" && <span>Нещо</span>}
      </h1>
      <div className="results__text">
        {lang === "EN" && (
          <span>
            Hear directly from our clients about their experience with our
            company and the results they’ve gotten from our campaigns.
          </span>
        )}
        {lang === "BG" && <span>Нещо</span>}
      </div>
      <div className="results__block">
        <div className="results__card">
          <img src={David1} alt="david" />
          <p>
            <b>
              {lang === "EN" && <span>David Lefkovits</span>}
              {lang === "BG" && <span>Нещо</span>}
            </b>
          </p>
          <p>
            {lang === "EN" && <span>Chairman – Niche Digital Brands</span>}
            {lang === "BG" && <span>Нещо</span>}
          </p>
          <p style={{ margin: "15px 0 15px" }}>
            {lang === "EN" && <span>We hit a home run with LYFE</span>}
            {lang === "BG" && <span>Нещо</span>}
          </p>
          <p style={{ textAlign: "center" }}>
            {lang === "EN" && (
              <span>
                Certainly, after having worked with multiple digital marketing
                and social media agencies, we have finally landed on a winner
                and hit a home run with Lyfe Marketing. As a result, their
                social media strategies helped drive qualified traffic to our
                website, reduce conversion cost, and increase revenue per
                visitor.
              </span>
            )}
            {lang === "BG" && <span>Нещо</span>}
          </p>
        </div>
        <div className="results__card">
          <img src={Shannon1} alt="shannon" />
          <p>
            <b>
              {lang === "EN" && <span>Shannon Failla</span>}
              {lang === "BG" && <span>Нещо</span>}
            </b>
          </p>
          <p style={{ textAlign: "center" }}>
            {lang === "EN" && (
              <span>Director at Cardinal Group Management</span>
            )}
            {lang === "BG" && <span>Нещо</span>}
          </p>
          <p style={{ margin: "15px 0 15px" }}>
            {lang === "EN" && <span>They communicate very well</span>}
            {lang === "BG" && <span>Нещо</span>}
          </p>
          <p style={{ textAlign: "center" }}>
            {lang === "EN" && (
              <span>
                So, I have worked with the LYFE team for a few years now in
                multiple markets across the country. They do an amazing job and
                know exactly how to interact with our demographic. In
                conclusion, they communicate very well and have yet to turn down
                a request. I highly recommend their team for any of your social
                media needs.
              </span>
            )}
            {lang === "BG" && <span>Нещо</span>}
          </p>
        </div>
        <div className="results__card">
          <img src={JingBo} alt="JingBo" />
          <p>
            <b>
              {lang === "EN" && <span>Jingbo Shan</span>}
              {lang === "BG" && <span>Нещо</span>}
            </b>
          </p>
          <p>
            {lang === "EN" && <span>Co-Owner at H-Massage</span>}
            {lang === "BG" && <span>Нещо</span>}
          </p>
          <p style={{ margin: "15px 0 15px" }}>
            {lang === "EN" && <span>Increased our customer base</span>}
            {lang === "BG" && <span>Нещо</span>}
          </p>
          <p style={{ textAlign: "center" }}>
            {lang === "EN" && (
              <span>
                During the last 3 years, LYFE Marketing has remained very
                professional and helpful. We have Facebook, Instagram, Twitter
                and SEO services with them. We have increased our customer base
                and they are loyal. In short, their team really cares about
                their customers and willing to help all the time.
              </span>
            )}
            {lang === "BG" && <span>Нещо</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
