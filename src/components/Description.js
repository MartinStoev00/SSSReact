import React from "react";

const Description = ({ lang }) => {
  return (
    <div className="description" id="description">
      <div className="description__heading heading__underline">
        Peak Digital Marketing
      </div>
      <div className="description__blocks">
        <div className="description__card">
          <i className="fas fa-ad"></i>
          <div>
            <h3>
              {lang === "BG" && <span>Платени Реклами</span>}
              {lang === "EN" && <span>Paid Search</span>}
              <i className="fas fa-ad"></i>
            </h3>
            <p>
              {lang === "BG" && (
                <span>
                  Peak digital marketing съществува, за да помага на по-малки
                  бизнеси да се съревновават с по-големи практики онлайн.
                  Разрастването на бизнес е трудно дори без да се има предвид
                  объркването и разходите, които идват с изграждането на онлайн
                  присъствието ви.
                </span>
              )}
              {lang === "EN" && (
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque est assumenda nostrum praesentium sed repellendus
                  id? Expedita perspiciatis natus beatae sit dignissimos
                  quibusdam assumenda error, vitae omnis, earum laboriosam
                  incidunt.
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="description__card">
          <i className="fas fa-ad"></i>
          <div>
            <h3>
              {lang === "BG" && <span>Платени Реклами</span>}
              {lang === "EN" && <span>Paid Search</span>}
              <i className="fas fa-ad"></i>
            </h3>
            <p>
              {lang === "BG" && (
                <span>
                  Нашата цел е да дадем на всеки бизнес експертизата, от която
                  се нуждаят, без губенето на ценни ресурси. Когато практиката
                  ви се развива и просперира ще се радваме да знаем, че имаме
                  заслуга в това.
                </span>
              )}
              {lang === "EN" && (
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque est assumenda nostrum praesentium sed repellendus
                  id? Expedita perspiciatis natus beatae sit dignissimos
                  quibusdam assumenda error, vitae omnis, earum laboriosam
                  incidunt.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
