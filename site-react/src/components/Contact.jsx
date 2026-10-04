import { useState } from "react";
import { brand, info, wppURL } from "../data.js";

const EMPTY = { name: "", phone: "", subject: "Encomenda de bolo", message: "" };

export default function Contact({ showToast }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const set = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: false }));
  };

  const validate = () => {
    const next = {
      name: form.name.trim().length < 2,
      phone: form.phone.replace(/\D/g, "").length < 10,
      message: form.message.trim().length < 5
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return showToast("Confira os campos destacados ⚠️");

    const text = [
      `Olá, ${brand}! 👋`,
      `*Nome:* ${form.name.trim()}`,
      `*Telefone:* ${form.phone.trim()}`,
      `*Assunto:* ${form.subject}`,
      "",
      form.message.trim()
    ].join("\n");

    window.open(wppURL(text), "_blank", "noopener");
    setForm(EMPTY);
    showToast("Abrindo o WhatsApp para você 💬");
  };

  const fieldClass = (k) => `field${errors[k] ? " has-error" : ""}`;

  return (
    <section className="section section--cream" id="contato" aria-labelledby="cont-title">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="divider" aria-hidden="true">
            ✉ ♥ ✉
          </div>
          <span className="eyebrow">Fale conosco</span>
          <h2 id="cont-title">Contato &amp; Encomendas</h2>
          <p>
            Tire dúvidas sobre o cardápio, encomendas e localização — ou peça delivery pelo
            iFood. Respondemos rapidinho pelo WhatsApp.
          </p>
        </div>

        <div className="contact">
          <div className="contact__info reveal">
            <div className="info-card">
              <span className="info-card__icon" aria-hidden="true">📍</span>
              <div>
                <b>Endereço</b>
                <span>{info.address}</span>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon" aria-hidden="true">🕒</span>
              <div>
                <b>Horários</b>
                <span>{info.hours}</span>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon" aria-hidden="true">💬</span>
              <div>
                <b>WhatsApp</b>
                <span>{info.phone} — pedidos, orçamentos e dúvidas. {info.ifoodNote}.</span>
              </div>
            </div>
            <div className="info-card">
              <span className="info-card__icon" aria-hidden="true">📸</span>
              <div>
                <b>Instagram</b>
                <span>{info.instagram}</span>
              </div>
            </div>
            <div
              className="map-placeholder"
              aria-hidden="true"
              style={{
                height: 170,
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg,var(--pink),var(--cream))",
                borderRadius: "var(--radius-md)",
                fontSize: "2rem"
              }}
            >
              🗺️
            </div>
          </div>

          <form className="form reveal" onSubmit={submit} noValidate>
            <div className={fieldClass("name")}>
              <label htmlFor="cName">Nome completo</label>
              <input
                id="cName"
                type="text"
                autoComplete="name"
                placeholder="Como podemos te chamar?"
                value={form.name}
                onChange={set("name")}
              />
              <span className="field-error">Informe seu nome.</span>
            </div>

            <div className={fieldClass("phone")}>
              <label htmlFor="cPhone">Telefone / WhatsApp</label>
              <input
                id="cPhone"
                type="tel"
                autoComplete="tel"
                placeholder="(12) 99999-9999"
                value={form.phone}
                onChange={set("phone")}
              />
              <span className="field-error">Informe um telefone válido.</span>
            </div>

            <div className="field">
              <label htmlFor="cSubject">Assunto</label>
              <select id="cSubject" value={form.subject} onChange={set("subject")}>
                <option>Encomenda de bolo</option>
                <option>Kit de festa</option>
                <option>Brigadeiros e doces</option>
                <option>Evento corporativo</option>
                <option>Outro assunto</option>
              </select>
            </div>

            <div className={fieldClass("message")}>
              <label htmlFor="cMsg">Mensagem</label>
              <textarea
                id="cMsg"
                placeholder="Conte o que você precisa: data, quantidade, sabores…"
                value={form.message}
                onChange={set("message")}
              />
              <span className="field-error">Escreva sua mensagem.</span>
            </div>

            <button type="submit" className="btn btn--primary btn--block">
              Enviar pelo WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
