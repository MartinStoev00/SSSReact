import React from "react";

const Boosting = ({ lang }) => {
  return (
    <div className="boosting" id="boosting">
      <h1 className="boosting__heading heading__underline">
        {lang === "BG" && <span>Услуги</span>}
        {lang === "EN" && <span>Services</span>}
      </h1>
      <div className="boosting__block">
        <div className="boosting__cart">
          <i className="fa fa-search"></i>
          <div>
            <h3>
              {lang === "BG" && <span>Платени Реклами</span>}
              {lang === "EN" && <span>Paid Search</span>}
              <i className="fa fa-search"></i>
            </h3>
            <p>
              {lang === "BG" && (
                <span>
                  Оптимизация на търсачки SEO оптимизация, класиката в
                  дигиталния маркетинг, доказан и ефикасен начин, с който да сте
                  една крачка пред конкуренцията
                </span>
              )}
              {lang === "EN" && (
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis sint cupiditate ipsum commodi eum eveniet iure eius,
                  ab et hic natus itaque! Provident velit possimus repudiandae
                  impedit porro dolor hic.
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="boosting__cart">
          <i className="fa fa-ad"></i>
          <div>
            <h3>
              {lang === "BG" && <span>Фейсбук / Гугъл реклами</span>}
              {lang === "EN" && <span>Facebook / Google ads</span>}
              <i className="fa fa-ad"></i>
            </h3>
            <p>
              {lang === "BG" && (
                <span>
                  Peak digital marketing предлага изграждане на маркетинг
                  стратегия , която да бъде изпълнена на платформите на Фейсбук
                  и Гугъл, като това включва платени реклами, игри за събиране
                  на имейли, постове за набиране на популярност и лайкове на
                  фейсбук страницата ви, имейл маркетинг, както и много други.
                </span>
              )}
              {lang === "EN" && (
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Totam, a? Nisi eveniet veritatis sunt voluptatum neque illo,
                  deleniti, exercitationem quos obcaecati voluptatibus ab, nihil
                  sed velit delectus repellat non provident?Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Possimus debitis
                  similique quaerat. Harum repellat esse, recusandae id saepe
                  iure at voluptate! Atque facilis porro iusto libero in saepe
                  eveniet cumque!
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="boosting__cart">
          <div className="fa fa-globe"></div>
          <div>
            <h3>
              {lang === "BG" && <span>Уеб дизайн Услугите</span>}
              {lang === "EN" && <span>Web Design Services</span>}
              <div className="fa fa-globe"></div>
            </h3>
            <p>
              {lang === "BG" && (
                <span>
                  Уеб дизайн Услугите на Peak digital marketing за създаване на
                  персонализиран уебсайт се изпълняват от опитни професионалисти
                  за малка част от цената, която взимат повечето компании. Можем
                  да си позволим да таксуваме по – малко, защото задаваме
                  правилните въпроси от самото начало, което ни позволява да си
                  свършим работата в пъти по – бързо. Всичките уебсайтове,
                  направени от нас са оптимизирани както за мобилни устройства,
                  така и за настолни компютри, лесни са за редактиране и са
                  построени на хостинг платформа на достъпни цени. Получавате
                  пълна собственост на сайта и на хостинг платформата, за да
                  можете да правите промени когато поискате.
                </span>
              )}
              {lang === "EN" && (
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                  natus, repellendus expedita fugit illum molestiae sint in
                  dolorem doloremque soluta ipsum magnam culpa similique libero
                  ab sapiente, possimus quibusdam quam?Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Reiciendis et nostrum
                  cumque adipisci ullam molestiae distinctio sint a molestias,
                  corrupti similique suscipit nobis odio. Officiis excepturi
                  magni suscipit voluptate sit.
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boosting;
