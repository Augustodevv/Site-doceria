/* ============================================================
   Ceres Brigadeiros — interações
   ============================================================ */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const D = window.EG_DATA;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------------- WhatsApp ---------------- */
  const wppURL = (text) => `https://wa.me/${D.whatsapp}?text=${encodeURIComponent(text)}`;
  const applyWppLinks = (text) => {
    const url = wppURL(text);
    $$("[data-wpp-link]").forEach((el) => el.setAttribute("href", url));
  };
  applyWppLinks(`Olá, ${D.brand}! Vim pelo site e gostaria de fazer uma encomenda. 🍫`);

  /* ---------------- Informações da loja ---------------- */
  $("#infoAddress").textContent = D.info.address;
  $("#infoHours").textContent = D.info.hours;
  $("#infoInsta").textContent = D.info.instagram;
  $("#footerAddress").textContent = D.info.address;
  $("#footerHours").textContent = D.info.hours;
  $("#insta-title").textContent = `Siga ${D.info.instagram}`;
  $("#year").textContent = new Date().getFullYear();

  /* ---------------- Toast ---------------- */
  let toastTimer;
  const toast = (msg) => {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 2600);
  };

  /* ---------------- Header sticky + nav ativa ---------------- */
  const header = $("#header");
  addEventListener("scroll", () => header.classList.toggle("is-stuck", scrollY > 8), { passive: true });

  /* ---------------- Menu mobile ---------------- */
  const nav = $("#nav");
  const burger = $("#burger");
  const toggleNav = (open) => {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.textContent = open ? "✕" : "☰";
  };
  burger.addEventListener("click", () => toggleNav(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.tagName === "A") toggleNav(false); });

  /* ---------------- Hero carrossel (fade) ---------------- */
  const slides = $$(".hero__slide");
  const dotsWrap = $("#heroDots");
  let heroIdx = 0, heroTimer;

  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-label", `Destaque ${i + 1}`);
    b.addEventListener("click", () => { goHero(i); restartHero(); });
    dotsWrap.appendChild(b);
  });
  const dots = $$("button", dotsWrap);

  function goHero(i) {
    heroIdx = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === heroIdx));
    dots.forEach((d, k) => d.classList.toggle("is-active", k === heroIdx));
  }
  function restartHero() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => goHero(heroIdx + 1), 6000);
  }
  goHero(0);
  restartHero();

  /* ---------------- Categorias ---------------- */
  $("#catTrack").innerHTML = D.categories.map((c) => {
    const n = D.products.filter((p) => p.cat === c.id).length;
    return `
      <a class="cat-card" data-tone="${c.tone}" href="#cardapio" data-filter="${c.id}">
        <div class="cat-card__icon" aria-hidden="true">${c.emoji}</div>
        <h3>${esc(c.label)}</h3>
        <span>${n} itens no cardápio</span>
      </a>`;
  }).join("");

  /* ---------------- Cardápio: filtros + cards ---------------- */
  const tabsEl = $("#tabs");
  const cats = [{ id: "todos", label: "Todos" }].concat(D.categories.map((c) => ({ id: c.id, label: c.label })));
  tabsEl.innerHTML = cats
    .map((c, i) => `<button class="tab${i === 0 ? " is-active" : ""}" role="tab" data-filter="${c.id}" aria-selected="${i === 0}">${esc(c.label)}</button>`)
    .join("");

  const toneByCat = { brigadeiros: "chocolate", bolos: "pink", doces: "", kits: "rose", cafeteria: "cream" };
  $("#products").innerHTML = D.products.map((p) => `
    <article class="card" data-cat="${p.cat}">
      <div class="card__media" data-tone="${toneByCat[p.cat]}" role="img" aria-label="${esc(p.name)} — ${esc(p.desc)}">
        <span aria-hidden="true">${p.emoji}</span>
        ${p.tag ? `<span class="card__tag">${esc(p.tag)}</span>` : ""}
      </div>
      <div class="card__body">
        <h3>${esc(p.name)}</h3>
        <p class="card__desc">${esc(p.desc)}</p>
        <div class="card__foot">
          <span class="price">${brl(p.price)}</span>
          <button class="btn btn--primary btn--sm" data-add="${p.id}">Adicionar</button>
        </div>
      </div>
    </article>`).join("");

  function applyFilter(id) {
    $$(".tab", tabsEl).forEach((t) => {
      const on = t.dataset.filter === id;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", String(on));
    });
    $$("#products .card").forEach((card) => {
      card.classList.toggle("is-hidden", id !== "todos" && card.dataset.cat !== id);
    });
  }
  tabsEl.addEventListener("click", (e) => {
    const t = e.target.closest("[data-filter]");
    if (t) applyFilter(t.dataset.filter);
  });
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[data-filter]');
    if (link) applyFilter(link.dataset.filter);
  });

  /* ---------------- Depoimentos ---------------- */
  $("#testimonials").innerHTML = D.testimonials.map((t) => `
    <blockquote class="quote">
      <div class="quote__stars" aria-label="${t.stars} de 5 estrelas">${"★".repeat(t.stars)}${"☆".repeat(5 - t.stars)}</div>
      <p>${esc(t.text)}</p>
      <footer>
        <span class="quote__avatar" aria-hidden="true">${esc(t.name.charAt(0))}</span>
        <span class="quote__who"><b>${esc(t.name)}</b><span>${esc(t.role)}</span></span>
      </footer>
    </blockquote>`).join("");

  /* ---------------- Galeria ---------------- */
  $("#gallery").innerHTML = D.gallery.map((g) => `
    <a class="gallery-item" data-tone="${g.tone}" href="#instagram" aria-label="${esc(g.label)}">
      <span aria-hidden="true">${g.emoji}</span>
    </a>`).join("");

  /* ============================================================
     CARRINHO (encomenda)
     ============================================================ */
  const cart = [];
  const overlay = $("#overlay");
  const drawer = $("#drawer");
  const checkout = $("#checkout");

  const openDrawer = (on) => {
    drawer.classList.toggle("is-open", on);
    drawer.setAttribute("aria-hidden", String(!on));
    overlay.hidden = false;
    overlay.classList.toggle("is-open", on || checkout.classList.contains("is-open"));
    if (on) $("#drawerClose").focus();
  };
  const openCheckout = (on) => {
    if (on && !cart.length) return toast("Sua encomenda está vazia 🙂");
    checkout.classList.toggle("is-open", on);
    checkout.setAttribute("aria-hidden", String(!on));
    overlay.hidden = false;
    overlay.classList.toggle("is-open", on || drawer.classList.contains("is-open"));
    if (on) {
      renderCheckoutSummary();
      $("#coName").focus();
    }
  };
  const closeAll = () => { openDrawer(false); openCheckout(false); overlay.classList.remove("is-open"); };

  $("#cartBtn").addEventListener("click", () => openDrawer(true));
  $("#dockCart").addEventListener("click", () => openDrawer(true));
  $("#drawerClose").addEventListener("click", closeAll);
  $("#checkoutClose").addEventListener("click", closeAll);
  overlay.addEventListener("click", closeAll);
  addEventListener("keydown", (e) => { if (e.key === "Escape") { closeAll(); toggleNav(false); } });

  function cartCount() { return cart.reduce((n, i) => n + i.qty, 0); }
  function cartTotal() { return cart.reduce((n, i) => n + i.price * i.qty, 0); }

  function renderCart() {
    const count = cartCount();
    $$("[data-cart-count]").forEach((b) => {
      b.textContent = count;
      b.classList.toggle("is-empty", count === 0);
    });
    $("#cartTotal").textContent = brl(cartTotal());

    $("#cartItems").innerHTML = cart.length
      ? cart.map((i, idx) => `
        <div class="cart-item">
          <span class="cart-item__thumb" aria-hidden="true">${i.emoji}</span>
          <div>
            <b>${esc(i.name)}</b>
            ${i.note ? `<small>${esc(i.note)}</small>` : ""}
            <div class="cart-item__qty">
              <button type="button" data-dec="${idx}" aria-label="Diminuir quantidade de ${esc(i.name)}">−</button>
              <span>${i.qty}</span>
              <button type="button" data-inc="${idx}" aria-label="Aumentar quantidade de ${esc(i.name)}">+</button>
            </div>
          </div>
          <div style="text-align:right">
            <span class="cart-item__price">${brl(i.price * i.qty)}</span>
            <button class="cart-item__remove" data-rm="${idx}">remover</button>
          </div>
        </div>`).join("")
      : `<div class="drawer__empty"><span aria-hidden="true">🧁</span>Sua encomenda está vazia.<br />Explore o cardápio ou monte seu bolo!</div>`;

    $("#checkoutBtn").disabled = cart.length === 0;
  }

  function addToCart(item) {
    const key = item.key || item.id;
    const found = cart.find((i) => (i.key || i.id) === key);
    if (found) found.qty += item.qty || 1;
    else cart.push({ ...item, qty: item.qty || 1 });
    renderCart();
    toast(`${item.name} adicionado à encomenda ✓`);
  }

  $("#cartItems").addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset.inc) cart[+t.dataset.inc].qty++;
    else if (t.dataset.dec) {
      const i = +t.dataset.dec;
      cart[i].qty--;
      if (cart[i].qty <= 0) cart.splice(i, 1);
    } else if (t.dataset.rm) cart.splice(+t.dataset.rm, 1);
    else return;
    renderCart();
  });

  $("#products").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const p = D.products.find((x) => x.id === btn.dataset.add);
    addToCart({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, note: p.desc });
  });

  $("#checkoutBtn").addEventListener("click", () => openCheckout(true));

  /* ---------------- Checkout → WhatsApp ---------------- */
  function renderCheckoutSummary() {
    $("#coSummary").innerHTML =
      cart.map((i) => `<div><span>${i.qty}× ${esc(i.name)}</span><b>${brl(i.price * i.qty)}</b></div>`).join("") +
      `<div style="border-top:1px dashed var(--line);margin-top:6px;padding-top:8px"><span>Total estimado</span><b>${brl(cartTotal())}</b></div>`;
  }

  const validators = {
    coName: (v) => v.trim().length >= 2,
    coPhone: (v) => v.replace(/\D/g, "").length >= 10,
    coDate: (v) => !!v,
    coTime: (v) => !!v,
    cName: (v) => v.trim().length >= 2,
    cPhone: (v) => v.replace(/\D/g, "").length >= 10,
    cMsg: (v) => v.trim().length >= 5
  };
  function validateField(id) {
    const el = document.getElementById(id);
    if (!el) return true;
    const ok = validators[id] ? validators[id](el.value) : true;
    el.closest(".field").classList.toggle("has-error", !ok);
    return ok;
  }
  Object.keys(validators).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("blur", () => validateField(id));
  });

  $("#coMethod").addEventListener("change", (e) => {
    const isDelivery = e.target.value.startsWith("Entrega");
    $("#addressField").hidden = !isDelivery;
    if (isDelivery) $("#coAddress").required = true;
    else { $("#coAddress").required = false; $("#addressField").classList.remove("has-error"); }
  });

  $("#checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const ids = ["coName", "coPhone", "coDate", "coTime"];
    if ($("#coMethod").value.startsWith("Entrega")) ids.push("coAddress");
    const valid = ids.map(validateField).every(Boolean);
    if (!valid) return toast("Confira os campos destacados ⚠️");

    const dt = new Date(`${$("#coDate").value}T${$("#coTime").value || "00:00"}`);
    const when = isNaN(dt) ? $("#coDate").value : dt.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" });

    const lines = [
      `*Novo pedido — ${D.brand}* 🍫`,
      "",
      ...cart.map((i) => `• ${i.qty}x ${i.name}${i.note ? ` (${i.note})` : ""} — ${brl(i.price * i.qty)}`),
      "",
      `*Total estimado:* ${brl(cartTotal())}`,
      "",
      `*Cliente:* ${$("#coName").value.trim()}`,
      `*Telefone:* ${$("#coPhone").value.trim()}`,
      `*Data/horário:* ${when}`,
      `*Modalidade:* ${$("#coMethod").value}`,
      $("#coMethod").value.startsWith("Entrega") ? `*Endereço:* ${$("#coAddress").value.trim()}` : "",
      "",
      "Aguardo confirmação, obrigado!"
    ].filter(Boolean);

    openCheckout(false);
    openDrawer(false);
    window.open(wppURL(lines.join("\n")), "_blank", "noopener");
    toast("Pedido formatado! Só enviar no WhatsApp 💬");
  });

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = ["cName", "cPhone", "cMsg"].map(validateField).every(Boolean);
    if (!valid) return toast("Confira os campos destacados ⚠️");
    const text = [
      `Olá, ${D.brand}! 👋`,
      `*Nome:* ${$("#cName").value.trim()}`,
      `*Telefone:* ${$("#cPhone").value.trim()}`,
      `*Assunto:* ${$("#cSubject").value}`,
      "",
      $("#cMsg").value.trim()
    ].join("\n");
    window.open(wppURL(text), "_blank", "noopener");
    e.target.reset();
    toast("Abrindo o WhatsApp para você 💬");
  });

  /* ============================================================
     CUSTOMIZADOR "MONTE SEU BOLO"
     ============================================================ */
  const steps = D.builder.steps;
  let stepIdx = 0;
  const choices = { tamanho: null, massa: null, recheio: [], cobertura: null, topper: null, notes: "" };

  const optionsEl = $("#options");
  const progressEl = $("#progress");
  progressEl.innerHTML = steps.map(() => "<span></span>").join("");
  const bars = $$("span", progressEl);

  function currentPrice() {
    let total = 0;
    steps.forEach((s) => {
      const pick = choices[s.key];
      const pickArr = Array.isArray(pick) ? pick : pick ? [pick] : [];
      pickArr.forEach((id) => {
        const opt = s.options.find((o) => o.id === id);
        if (opt) total += opt.price;
      });
    });
    return total;
  }

  function renderStep() {
    const s = steps[stepIdx];
    $("#stepName").textContent = s.title;
    $("#stepCounter").textContent = `Etapa ${stepIdx + 1} de ${steps.length}`;
    $("#stepHint").textContent = s.hint;

    optionsEl.innerHTML = s.options.map((o) => {
      const sel = Array.isArray(choices[s.key]) ? choices[s.key].includes(o.id) : choices[s.key] === o.id;
      return `
        <button type="button" class="option${sel ? " is-selected" : ""}" data-opt="${o.id}" aria-pressed="${sel}">
          <b>${esc(o.label)}</b>
          <span>${esc(o.detail)}</span>
          ${o.price ? `<i>+ ${brl(o.price)}</i>` : ""}
        </button>`;
    }).join("");

    const notes = $("#notes");
    notes.hidden = !s.notes;

    bars.forEach((b, i) => {
      b.classList.toggle("is-done", i < stepIdx);
      b.classList.toggle("is-current", i === stepIdx);
    });

    $("#prevStep").disabled = stepIdx === 0;
    $("#nextStep").textContent = stepIdx === steps.length - 1 ? "Concluir ✓" : "Avançar →";
    renderSummary();
  }

  optionsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-opt]");
    if (!btn) return;
    const s = steps[stepIdx];
    const id = btn.dataset.opt;

    if (Array.isArray(choices[s.key])) {
      const arr = choices[s.key];
      const at = arr.indexOf(id);
      if (at > -1) arr.splice(at, 1);
      else {
        if (arr.length >= s.max) arr.shift();
        arr.push(id);
      }
    } else {
      choices[s.key] = id;
    }
    renderStep();
  });

  $("#notes").addEventListener("input", (e) => (choices.notes = e.target.value));

  $("#nextStep").addEventListener("click", () => {
    const s = steps[stepIdx];
    if (!Array.isArray(choices[s.key]) && !choices[s.key]) return toast(`Escolha uma opção: ${s.title} 😉`);
    if (Array.isArray(choices[s.key]) && !choices[s.key].length) return toast(`Escolha pelo menos 1 recheio 😉`);

    if (stepIdx < steps.length - 1) {
      stepIdx++;
      renderStep();
    } else {
      addToCake();
    }
  });
  $("#prevStep").addEventListener("click", () => { if (stepIdx > 0) { stepIdx--; renderStep(); } });
  $("#addCake").addEventListener("click", addToCake);

  function labelOf(key, id) {
    const s = steps.find((x) => x.key === key);
    const o = s && s.options.find((x) => x.id === id);
    return o ? o.label : "—";
  }

  function renderSummary() {
    const rows = [
      ["Tamanho", choices.tamanho ? labelOf("tamanho", choices.tamanho) : "—"],
      ["Massa", choices.massa ? labelOf("massa", choices.massa) : "—"],
      ["Recheio", choices.recheio.length ? choices.recheio.map((id) => labelOf("recheio", id)).join(" + ") : "—"],
      ["Cobertura", choices.cobertura ? labelOf("cobertura", choices.cobertura) : "—"],
      ["Topper", choices.topper ? labelOf("topper", choices.topper) : "—"]
    ];
    $("#summaryList").innerHTML = rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("");
    $("#summaryPrice").textContent = brl(currentPrice());
    const size = choices.tamanho ? labelOf("tamanho", choices.tamanho) : "";
    $("#summaryEmoji").textContent = size ? `🎂` : "🧁";
    $("#summaryEmoji").setAttribute("aria-label", size ? `Bolo de ${size}` : "Bolo ainda não escolhido");
  }

  function addToCake() {
    if (!choices.tamanho) {
      toast("Comece escolhendo o tamanho do bolo 😉");
      stepIdx = 0;
      renderStep();
      return;
    }
    if (!choices.recheio.length) {
      toast("Escolha pelo menos 1 recheio 😉");
      stepIdx = steps.findIndex((s) => s.key === "recheio");
      renderStep();
      return;
    }
    const price = currentPrice();
    const desc = [
      `${labelOf("tamanho", choices.tamanho)} · ${labelOf("massa", choices.massa)}`,
      `Recheio: ${choices.recheio.map((id) => labelOf("recheio", id)).join(" + ")}`,
      `Cobertura: ${labelOf("cobertura", choices.cobertura)}`,
      `Topper: ${labelOf("topper", choices.topper)}`
    ].join(" · ");

    addToCart({
      key: "bolo-custom",
      id: "bolo-custom",
      name: "Bolo Personalizado (Monte seu Bolo)",
      price,
      emoji: "🎂",
      note: desc + (choices.notes ? ` · Obs: ${choices.notes}` : "")
    });

    stepIdx = 0;
    choices.tamanho = choices.massa = choices.cobertura = choices.topper = null;
    choices.recheio = [];
    choices.notes = "";
    $("#notes").value = "";
    renderStep();
    openDrawer(true);
  }

  /* ============================================================
     CALCULADORA DE FESTAS
     ============================================================ */
  function calcParty() {
    const guests = Math.max(1, Math.min(1000, parseInt($("#guests").value, 10) || 0));
    $("#guests").value = guests;
    const round10 = (n) => Math.ceil(n / 10) * 10;
    $("#sweets").textContent = round10(guests * D.calculator.brigadeirosPerGuest);
    $("#savory").textContent = round10(guests * D.calculator.slicesPerGuest);
    [$("#boxSweets"), $("#boxSavory")].forEach((b) => {
      b.classList.add("is-pop");
      setTimeout(() => b.classList.remove("is-pop"), 320);
    });
  }
  $("#calcBtn").addEventListener("click", calcParty);
  $("#guests").addEventListener("input", calcParty);
  $("#guests").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); calcParty(); } });
  calcParty();

  /* ============================================================
     SCROLL: reveal + nav ativa
     ============================================================ */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const revealIO = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); revealIO.unobserve(en.target); } }),
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealIO.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const sections = $$("main section[id]");
  const navLinks = $$('.nav a[href^="#"], .dock a[href^="#"]');
  const activeIO = new IntersectionObserver(
    (entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${en.target.id}`));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => activeIO.observe(s));

  /* ---------------- Estado inicial ---------------- */
  renderCart();
  renderStep();
})();
