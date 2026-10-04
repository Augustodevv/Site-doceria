export default function About({ onCta }) {
  return (
    <section className="section section--pink" id="sobre" aria-labelledby="sobre-title">
      <div className="wrap about">
        <div
          className="about__media reveal"
          role="img"
          aria-label="Praia do Camburizinho, em São Sebastião/SP — casa da Ceres Brigadeiros"
        >
          <img
            src="img/camburizinho.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            width="900"
            height="675"
          />
          <div className="about__float">
            <b>+8</b>
            <span>anos em Camburi</span>
          </div>
        </div>

        <div className="about__body reveal">
          <span className="eyebrow">Sobre nós</span>
          <h2 id="sobre-title">
            Mais que confeitaria,
            <br /> parte da vida de Camburi
          </h2>
          <p>
            Tudo começou há 8 anos, quando a Ceres vendia brigadeiros na praia do Camburi.
            Hoje, a <strong>Ceres Brigadeiros e Cafeteria</strong> é ponto de encontro no
            Camburizinho: brigadeiros gourmet, bolos, doces e um café para quem quer pausar
            com o melhor do litoral norte.
          </p>
          <ul>
            <li>Brigadeiros gourmet produzidos diariamente, com ingredientes selecionados.</li>
            <li>Produção artesanal sem conservantes — sempre fresquinho.</li>
            <li>Delivery pelo WhatsApp e também pelo iFood.</li>
            <li>Aberto todos os dias: seg a qui das 10h às 20h, sex a dom das 10h às 22h.</li>
          </ul>
          <button type="button" className="btn btn--primary" onClick={onCta}>
            Monte seu bolo agora
          </button>
        </div>
      </div>
    </section>
  );
}
