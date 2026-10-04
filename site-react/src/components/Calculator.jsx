import { useState } from "react";
import { calculator } from "../data.js";

export default function Calculator() {
  const [guests, setGuests] = useState(40);
  const [result, setResult] = useState({ brigadeiros: 240, slices: 40 });

  const round10 = (n) => Math.ceil(n / 10) * 10;

  const calc = (value) => {
    const n = Math.max(1, Math.min(1000, parseInt(value, 10) || 0));
    setGuests(n);
    setResult({
      brigadeiros: round10(n * calculator.brigadeirosPerGuest),
      slices: round10(n * calculator.slicesPerGuest)
    });
  };

  return (
    <section className="section" id="calculadora" aria-labelledby="calc-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            🎉 ♥ 🎉
          </div>
          <span className="eyebrow">Planeje sua festa</span>
          <h2 id="calc-title">Calculadora Rápida de Festas</h2>
          <p>
            Diga quantos convidados teremos e descubra na hora quanto brigadeiro e quantas
            fatias de bolo providenciar.
          </p>
        </div>

        <div className="calc reveal">
          <div className="calc__field">
            <label htmlFor="guests">Número de convidados</label>
            <div className="calc__input">
              <input
                type="number"
                id="guests"
                min="1"
                max="1000"
                value={guests}
                inputMode="numeric"
                onChange={(e) => calc(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && calc(e.target.value)}
              />
              <button type="button" className="btn btn--primary" onClick={() => calc(guests)}>
                Calcular
              </button>
            </div>
            <p className="calc__tip">
              💡 Regra da casa: <strong>6 brigadeiros</strong> e <strong>1 fatia de bolo</strong>{" "}
              por convidado.
            </p>
            <a
              className="btn btn--pink btn--sm"
              href="#cardapio"
              style={{ marginTop: 14 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver kits de festa
            </a>
          </div>

          <div className="calc__result" aria-live="polite">
            <div className="calc__box">
              <b>{result.brigadeiros}</b>
              <span>brigadeiros</span>
            </div>
            <div className="calc__box">
              <b>{result.slices}</b>
              <span>fatias de bolo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
