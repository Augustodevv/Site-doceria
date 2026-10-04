import { useEffect, useState } from "react";

const SLIDES = [
  {
    tone: "chocolate",
    eyebrow: { script: "Bem-vindo ao", text: null },
    title: ["O melhor brigadeiro", "do litoral"],
    text: "Brigadeiros, bolos e doces artesanais feitos há mais de 8 anos em Camburi — do cafezinho da tarde à sua grande festa.",
    emojis: ["🎂", "🍫", "🍓", "🥐"],
    primary: { label: "Ver Cardápio", target: "cardapio", pink: true },
    secondary: { label: "Monte seu Bolo", target: "bolo" }
  },
  {
    tone: "pink",
    eyebrow: { script: null, text: "Feito à mão, todos os dias" },
    title: ["Da nossa cozinha", "para a sua mesa"],
    text: "Receitas da Ceres, produção diária e atendimento pelo WhatsApp — com delivery também pelo iFood.",
    emojis: ["🍩", "🍡", "🍰", "🍮"],
    primary: { label: "Ver Cardápio", target: "cardapio" },
    secondary: { label: "Calculadora de Festa", target: "calculadora" }
  },
  {
    tone: "cream",
    eyebrow: { script: null, text: "Caixinhas e kits para presentear" },
    title: ["Sua celebração", "sem preocupações"],
    text: "Caixinha da Felicidade, kits de festa e encomendas personalizadas, com preço fechado e pedido em poucos cliques.",
    emojis: ["🎈", "🎉", "🥳", "🎀"],
    primary: { label: "Ver Kits", target: "cardapio" },
    secondary: { label: "Falar no WhatsApp", wpp: true }
  }
];

const POSITIONS = [
  { top: "18%", left: "8%", delay: "0s" },
  { top: "62%", left: "14%", delay: "1.4s" },
  { top: "26%", right: "10%", delay: ".7s" },
  { top: "70%", right: "16%", delay: "2s" }
];

export default function Hero({ wppUrl }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="inicio" aria-label="Destaque">
      <div className="hero__slides">
        {SLIDES.map((s, i) => (
          <div
            key={s.tone}
            className={`hero__slide${i === idx ? " is-active" : ""}`}
            data-tone={s.tone}
            aria-hidden={i !== idx}
          >
            <div className="hero__emojis" aria-hidden="true">
              {s.emojis.map((e, k) => (
                <span key={k} style={POSITIONS[k]}>
                  {e}
                </span>
              ))}
            </div>

            <div className="hero__content">
              {s.eyebrow.script && <p className="script" style={{ color: "var(--pink)" }}>{s.eyebrow.script}</p>}
              {s.eyebrow.text && <p className="eyebrow" style={{ justifyContent: "center" }}>{s.eyebrow.text}</p>}
              <h1>
                {s.title[0]}
                <br />
                {s.title[1]}
              </h1>
              <p>{s.text}</p>
              <div className="hero__cta">
                <button
                  type="button"
                  className={`btn ${s.primary.pink ? "" : "btn--primary"}`}
                  style={s.primary.pink ? { background: "var(--pink-soft)", color: "var(--chocolate)" } : undefined}
                  onClick={() => go(s.primary.target)}
                >
                  {s.primary.label}
                </button>

                {s.secondary.wpp ? (
                  <a className="btn btn--ghost" href={wppUrl} target="_blank" rel="noopener">
                    {s.secondary.label}
                  </a>
                ) : (
                  <button type="button" className="btn btn--ghost" onClick={() => go(s.secondary.target)}>
                    {s.secondary.label}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero__dots" role="tablist" aria-label="Selecionar destaque">
        {SLIDES.map((s, i) => (
          <button
            key={s.tone}
            type="button"
            role="tab"
            aria-label={`Destaque ${i + 1}`}
            aria-selected={i === idx}
            className={i === idx ? "is-active" : ""}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </section>
  );
}
