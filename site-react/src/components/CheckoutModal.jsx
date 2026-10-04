import { useEffect, useState } from "react";
import { brand, brl, wppURL } from "../data.js";

const EMPTY = { name: "", phone: "", date: "", time: "", method: "Retirada na loja", address: "" };

export default function CheckoutModal({ open, cart, total, onClose, onDone, showToast }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!open) {
      setErrors({});
    }
  }, [open]);

  const set = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: false }));
  };

  const isDelivery = form.method.startsWith("Entrega");

  const validate = () => {
    const next = {
      name: form.name.trim().length < 2,
      phone: form.phone.replace(/\D/g, "").length < 10,
      date: !form.date,
      time: !form.time,
      address: isDelivery && form.address.trim().length < 5
    };
    setErrors(next);
    return !Object.values(next).some(Boolean);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return showToast("Confira os campos destacados ⚠️");

    const dt = new Date(`${form.date}T${form.time || "00:00"}`);
    const when = isNaN(dt)
      ? form.date
      : dt.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

    const lines = [
      `*Novo pedido — ${brand}* 🍫`,
      "",
      ...cart.map(
        (i) => `• ${i.qty}x ${i.name}${i.note ? ` (${i.note})` : ""} — ${brl(i.price * i.qty)}`
      ),
      "",
      `*Total estimado:* ${brl(total)}`,
      "",
      `*Cliente:* ${form.name.trim()}`,
      `*Telefone:* ${form.phone.trim()}`,
      `*Data/horário:* ${when}`,
      `*Modalidade:* ${form.method}`,
      isDelivery ? `*Endereço:* ${form.address.trim()}` : "",
      "",
      "Aguardo confirmação, obrigado!"
    ].filter(Boolean);

    window.open(wppURL(lines.join("\n")), "_blank", "noopener");
    setForm(EMPTY);
    onDone();
  };

  const fieldClass = (k) => `field${errors[k] ? " has-error" : ""}`;

  return (
    <>
      <div className={`overlay${open ? " is-open" : ""}`} onClick={(e) => e.target === e.currentTarget && onClose()} />
      <div
        className={`modal${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="coTitle"
        aria-hidden={!open}
      >
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          ✕
        </button>
        <div className="modal__head">
          <h3 id="coTitle">Finalizar encomenda</h3>
          <p>Preencha os dados e enviamos tudo formatado para o nosso WhatsApp.</p>
        </div>

        <div className="modal__body">
          <div className="modal__summary">
            {cart.map((i) => (
              <div key={i.key || i.id}>
                <span>
                  {i.qty}× {i.name}
                </span>
                <b>{brl(i.price * i.qty)}</b>
              </div>
            ))}
            <div style={{ borderTop: "1px dashed var(--line)", marginTop: 6, paddingTop: 8 }}>
              <span>Total estimado</span>
              <b>{brl(total)}</b>
            </div>
          </div>

          <form onSubmit={submit} noValidate>
            <div className={fieldClass("name")}>
              <label htmlFor="coName">Nome completo</label>
              <input
                id="coName"
                type="text"
                autoComplete="name"
                placeholder="Seu nome"
                value={form.name}
                onChange={set("name")}
              />
              <span className="field-error">Informe seu nome.</span>
            </div>

            <div className="row">
              <div className={fieldClass("phone")}>
                <label htmlFor="coPhone">Telefone / WhatsApp</label>
                <input
                  id="coPhone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(11) 99999-9999"
                  value={form.phone}
                  onChange={set("phone")}
                />
                <span className="field-error">Telefone obrigatório.</span>
              </div>
              <div className={fieldClass("date")}>
                <label htmlFor="coDate">Data desejada</label>
                <input id="coDate" type="date" value={form.date} onChange={set("date")} />
                <span className="field-error">Escolha a data.</span>
              </div>
            </div>

            <div className="row">
              <div className={fieldClass("time")}>
                <label htmlFor="coTime">Horário</label>
                <input id="coTime" type="time" value={form.time} onChange={set("time")} />
                <span className="field-error">Escolha o horário.</span>
              </div>
              <div className="field">
                <label htmlFor="coMethod">Retirada ou entrega</label>
                <select id="coMethod" value={form.method} onChange={set("method")}>
                  <option>Retirada na loja</option>
                  <option>Entrega (informar endereço)</option>
                </select>
              </div>
            </div>

            {isDelivery && (
              <div className={fieldClass("address")}>
                <label htmlFor="coAddress">Endereço de entrega</label>
                <input
                  id="coAddress"
                  type="text"
                  placeholder="Rua, número, bairro"
                  value={form.address}
                  onChange={set("address")}
                />
                <span className="field-error">Informe o endereço da entrega.</span>
              </div>
            )}

            <button type="submit" className="btn btn--primary btn--block">
              Enviar Pedido no WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
