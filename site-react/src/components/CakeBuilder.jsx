import { useState } from "react";
import { builder, brl } from "../data.js";

const EMPTY = { tamanho: null, massa: null, recheio: [], cobertura: null, topper: null, notes: "" };

const labelOf = (key, id) => {
  const step = builder.steps.find((s) => s.key === key);
  return step?.options.find((o) => o.id === id)?.label ?? "—";
};

const totalOf = (c) =>
  builder.steps.reduce((sum, s) => {
    const pick = Array.isArray(c[s.key]) ? c[s.key] : c[s.key] ? [c[s.key]] : [];
    const stepSum = pick.reduce(
      (acc, id) => acc + (s.options.find((o) => o.id === id)?.price ?? 0),
      0
    );
    return sum + stepSum;
  }, 0);

export default function CakeBuilder({ onAdd, onOpenCart, showToast }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [choices, setChoices] = useState(EMPTY);
  const step = builder.steps[stepIdx];
  const isLast = stepIdx === builder.steps.length - 1;

  const toggle = (optId) => {
    setChoices((prev) => {
      const current = prev[step.key];
      if (Array.isArray(current)) {
        const arr = [...current];
        const at = arr.indexOf(optId);
        if (at > -1) arr.splice(at, 1);
        else {
          if (arr.length >= step.max) arr.shift();
          arr.push(optId);
        }
        return { ...prev, [step.key]: arr };
      }
      return { ...prev, [step.key]: optId };
    });
  };

  const goNext = () => {
    const current = choices[step.key];
    const empty = Array.isArray(current) ? !current.length : !current;
    if (empty) {
      showToast(Array.isArray(current) ? "Escolha pelo menos 1 recheio 😉" : `Escolha uma opção: ${step.title} 😉`);
      return;
    }
    if (!isLast) setStepIdx((i) => i + 1);
    else addCake();
  };

  const addCake = () => {
    if (!choices.tamanho) {
      showToast("Comece escolhendo o tamanho do bolo 😉");
      setStepIdx(0);
      return;
    }
    if (!choices.recheio.length) {
      showToast("Escolha pelo menos 1 recheio 😉");
      setStepIdx(builder.steps.findIndex((s) => s.key === "recheio"));
      return;
    }
    const desc = [
      `${labelOf("tamanho", choices.tamanho)} · ${labelOf("massa", choices.massa)}`,
      `Recheio: ${choices.recheio.map((id) => labelOf("recheio", id)).join(" + ")}`,
      `Cobertura: ${labelOf("cobertura", choices.cobertura)}`,
      `Topper: ${labelOf("topper", choices.topper)}`
    ].join(" · ");

    onAdd({
      key: "bolo-custom",
      id: "bolo-custom",
      name: "Bolo Personalizado (Monte seu Bolo)",
      price: totalOf(choices),
      emoji: "🎂",
      note: desc + (choices.notes ? ` · Obs: ${choices.notes}` : "")
    });

    setChoices(EMPTY);
    setStepIdx(0);
    onOpenCart();
  };

  const rows = [
    ["Tamanho", choices.tamanho ? labelOf("tamanho", choices.tamanho) : "—"],
    ["Massa", choices.massa ? labelOf("massa", choices.massa) : "—"],
    [
      "Recheio",
      choices.recheio.length
        ? choices.recheio.map((id) => labelOf("recheio", id)).join(" + ")
        : "—"
    ],
    ["Cobertura", choices.cobertura ? labelOf("cobertura", choices.cobertura) : "—"],
    ["Topper", choices.topper ? labelOf("topper", choices.topper) : "—"]
  ];

  return (
    <section className="section section--cream" id="bolo" aria-labelledby="bolo-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            🎂 ♥ 🎂
          </div>
          <span className="eyebrow">Customizador interativo</span>
          <h2 id="bolo-title">Monte seu Bolo</h2>
          <p>Escolha tamanho, massa, recheios e finalização. O valor é calculado em tempo real.</p>
        </div>

        <div className="builder reveal">
          <div className="builder__panel">
            <div className="progress" aria-hidden="true">
              {builder.steps.map((s, i) => (
                <span
                  key={s.key}
                  className={i < stepIdx ? "is-done" : i === stepIdx ? "is-current" : ""}
                />
              ))}
            </div>

            <div className="step-title">
              <h3>{step.title}</h3>
              <em>
                Etapa {stepIdx + 1} de {builder.steps.length}
              </em>
            </div>
            <p className="step-hint">{step.hint}</p>

            <div className="options" role="group" aria-label={step.title}>
              {step.options.map((o) => {
                const sel = Array.isArray(choices[step.key])
                  ? choices[step.key].includes(o.id)
                  : choices[step.key] === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    className={`option${sel ? " is-selected" : ""}`}
                    aria-pressed={sel}
                    onClick={() => toggle(o.id)}
                  >
                    <b>{o.label}</b>
                    <span>{o.detail}</span>
                    {o.price > 0 && <i>+ {brl(o.price)}</i>}
                  </button>
                );
              })}
            </div>

            {step.notes && (
              <textarea
                className="notes"
                placeholder="Observações: nome do aniversariante, data, alergias…"
                aria-label="Observações do bolo"
                value={choices.notes}
                onChange={(e) => setChoices((p) => ({ ...p, notes: e.target.value }))}
              />
            )}

            <div className="builder__nav">
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                disabled={stepIdx === 0}
                onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
              >
                ← Voltar
              </button>
              <button type="button" className="btn btn--primary btn--sm" onClick={goNext}>
                {isLast ? "Concluir ✓" : "Avançar →"}
              </button>
            </div>
          </div>

          <aside className="summary" aria-label="Resumo do bolo">
            <h3>Resumo do seu bolo</h3>
            <div className="summary__visual" aria-hidden="true">
              {choices.tamanho ? "🎂" : "🧁"}
            </div>
            <dl>
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="summary__total">
              <span>Valor estimado</span>
              <b>{brl(totalOf(choices))}</b>
            </div>
            <button type="button" className="btn btn--block" onClick={addCake}>
              Adicionar à Encomenda
            </button>
            <small>Valor estimado · confirmação pelo WhatsApp</small>
          </aside>
        </div>
      </div>
    </section>
  );
}
