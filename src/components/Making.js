import React from "react";
import BuiltForProfit from "../pics/Built-For-Profit.png";
import CashGenerating from "../pics/Cash-Generating.png";
import DestinedToScale from "../pics/Destined-To-Scale.png";

const Making = ({ lang }) => {
  return (
    <div className="making" id="making">
      <h1 className="making__heading heading__underline">
        {lang === "BG" && <span>Зад кулисите</span>}
        {lang === "EN" && <span>Behind The Curtains</span>}
      </h1>
      <div className="making__block">
        <div className="making__block-content">
          <h1 className="making__block-heading">
            {lang === "BG" && (
              <span>
                Ние създаваме и управляваме планове за привличане на проспекти
              </span>
            )}
            {lang === "EN" && (
              <span>We Build And Manage Cash-Generating Acquisition Plans</span>
            )}
          </h1>
          <p className="making__block-text">
            {lang === "BG" && (
              <span>
                Използвайки Фейсбук, Гугъл, Имейл, Персонализирани Лендинг
                страници и Уеб дизайн, ние създаваме изживяване за клиента,
                което е проектирано по такъв начин, че да го направи лоялен
                клиент
              </span>
            )}
            {lang === "EN" && (
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                quidem voluptatem id laudantium odit, dicta, eaque quasi odio
                eligendi enim minima. Numquam reiciendis quam, modi aspernatur
                odio enim adipisci id.
              </span>
            )}
          </p>
          <button className="making__block-btn">
            {lang === "BG" && <span>Още Услуги</span>}
            {lang === "EN" && <span>More on service</span>}
          </button>
          <button className="making__block-btn">
            {lang === "BG" && <span>Намерете Стратегия</span>}
            {lang === "EN" && <span>Get a Strategy</span>}
          </button>
        </div>
        <img
          src={BuiltForProfit}
          className="making__block-img"
          alt="buildforprofit"
        />
      </div>
      <div className="making__block">
        <div className="making__block-content">
          <h1 className="making__block-heading">
            {lang === "BG" && <span>Планът ви е направен за печалба</span>}
            {lang === "EN" && <span>Your Plan Is Built For Profit</span>}
          </h1>
          <p className="making__block-text">
            {lang === "BG" && (
              <span>
                Ние сме експерти в оптимизацията на печалбите. От алокация на
                бюджета, до следене на CPP, планът ви се ръководи по строго
                определена формула, която осигурява доходоносност на кампаниите
                ви.
              </span>
            )}
            {lang === "EN" && (
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                quidem voluptatem id laudantium odit, dicta, eaque quasi odio
                eligendi enim minima. Numquam reiciendis quam, modi aspernatur
                odio enim adipisci id.
              </span>
            )}
          </p>
          <button className="making__block-btn">
            {lang === "BG" && <span>Още Услуги</span>}
            {lang === "EN" && <span>More on service</span>}
          </button>
          <button className="making__block-btn">
            {lang === "BG" && <span>Намерете Стратегия</span>}
            {lang === "EN" && <span>Get a Strategy</span>}
          </button>
        </div>
        <img
          src={CashGenerating}
          className="making__block-img"
          alt="cashgenerating"
        />
      </div>
      <div className="making__block">
        <div className="making__block-content">
          <h1 className="making__block-heading">
            {lang === "BG" && <span>Планът ви е създаден за растеж</span>}
            {lang === "EN" && <span>Your Plan Is Destined To Scale</span>}
          </h1>
          <p className="making__block-text">
            {lang === "BG" && (
              <span>
                Няма значение дали целта са нови проспекти или онлайн продажби,
                планът ви е създаден за бърз и устойчив растеж
              </span>
            )}
            {lang === "EN" && (
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                quidem voluptatem id laudantium odit, dicta, eaque quasi odio
                eligendi enim minima. Numquam reiciendis quam, modi aspernatur
                odio enim adipisci id.
              </span>
            )}
          </p>
          <button className="making__block-btn">
            {lang === "BG" && <span>Още Услуги</span>}
            {lang === "EN" && <span>More on service</span>}
          </button>
          <button className="making__block-btn">
            {lang === "BG" && <span>Намерете Стратегия</span>}
            {lang === "EN" && <span>Get a Strategy</span>}
          </button>
        </div>
        <img
          src={DestinedToScale}
          className="making__block-img"
          alt="destinedtoscale"
        />
      </div>
    </div>
  );
};

export default Making;
