/* Ceres Brigadeiros — dados do catálogo (fonte única de verdade)
   Fonte: Instagram @ceresbrigadeiros e buscas públicas (out/2026).
   Preços e itens marcados são ilustrativos — confirme com a loja. */

export const whatsapp = "5512981210916"; // (12) 98121-0916 — link oficial do WhatsApp
export const brand = "Ceres Brigadeiros";
export const tagline = "O melhor brigadeiro do litoral";

export const categories = [
  { id: "brigadeiros", label: "Brigadeiros Gourmet", emoji: "🍫", tone: "chocolate" },
  { id: "bolos", label: "Bolos por Encomenda", emoji: "🎂", tone: "pink" },
  { id: "doces", label: "Doces & Potes", emoji: "🍮", tone: "cream" },
  { id: "kits", label: "Kits & Caixinhas", emoji: "🎁", tone: "rose" },
  { id: "cafeteria", label: "Cafeteria", emoji: "☕", tone: "cream" }
];

export const products = [
  // --- Brigadeiros ---
  { id: "br1", cat: "brigadeiros", name: "Caixinha da Felicidade", desc: "4 brigadeiros gourmets: Ninho com Nutella, clássico e sabores da casa. Perfeita para presentear.", price: 26, emoji: "🎁", tag: "Mais vendido" },
  { id: "br2", cat: "brigadeiros", name: "Brigadeiro Ninho com Nutella", desc: "O sabor queridinho da casa: creme de leite Ninho com recheio de Nutella.", price: 7, emoji: "🍫", tag: "Predileto da praia" },
  { id: "br3", cat: "brigadeiros", name: "Brigadeiro Clássico", desc: "Chocolate, leite condensado e granulado — o gosto de sempre, feito artesanalmente.", price: 6, emoji: "🍡", tag: "" },
  { id: "br4", cat: "brigadeiros", name: "Brigadeiro Belga", desc: "Cacau belga 50% com finalização em chocolate meio amargo.", price: 7.5, emoji: "🍩", tag: "" },
  { id: "br5", cat: "brigadeiros", name: "Caixa com 20 Brigadeiros Gourmet", desc: "Escolha até 4 sabores. Ideal para presentear ou servir na festa.", price: 95, emoji: "📦", tag: "" },

  // --- Bolos ---
  { id: "b1", cat: "bolos", name: "Bolo de Ninho com Nutella", desc: "Massa de baunilha, creme de Ninho e Nutella cremosa. O clássico da casa.", price: 140, emoji: "🎂", tag: "Mais vendido" },
  { id: "b2", cat: "bolos", name: "Bolo de Brigadeiro Clássico", desc: "Massa de cacau com recheio de brigadeiro artesanal e granulado.", price: 120, emoji: "🍫", tag: "" },
  { id: "b3", cat: "bolos", name: "Bolo Red Velvet", desc: "Massa aveludada de cacau com cream cheese e raspas de chocolate.", price: 150, emoji: "❤️", tag: "" },
  { id: "b4", cat: "bolos", name: "Bolo de Chocolate Belga", desc: "Massa úmida de chocolate belga com ganache intensa e flor de sal.", price: 135, emoji: "🍰", tag: "" },

  // --- Doces & Potes ---
  { id: "d1", cat: "doces", name: "Bolo no Pote Ninho com Nutella", desc: "Camadas de bolo, creme de Ninho e Nutella no potinho de 300ml.", price: 16, emoji: "🍮", tag: "Mais vendido" },
  { id: "d2", cat: "doces", name: "Brigadeiro de Colher", desc: "Porção individual do brigadeiro cremoso da casa, com cobertura à escolha.", price: 9, emoji: "🥄", tag: "" },
  { id: "d3", cat: "doces", name: "Torta de Morango no Pote", desc: "Creme belga, bolo de baunilha e morango fresco no pote.", price: 18, emoji: "🍨", tag: "" },
  { id: "d4", cat: "doces", name: "Brownie com Calda de Chocolate", desc: "Brownie úmido de chocolate meio amargo com calda quente.", price: 14, emoji: "🧁", tag: "" },

  // --- Kits & Caixinhas ---
  { id: "k1", cat: "kits", name: "Kit Festa Mini", desc: "30 doces variados + 1 bolo de 15 fatias. Ideal para até 25 convidados.", price: 190, emoji: "🎈", tag: "" },
  { id: "k2", cat: "kits", name: "Kit Festa Médio", desc: "60 doces variados + 1 bolo de 35 fatias. Ideal para até 50 convidados.", price: 330, emoji: "🎉", tag: "Mais vendido" },
  { id: "k3", cat: "kits", name: "Kit Caixinhas para Presentear", desc: "10 Caixinhas da Felicidade com laço, prontas para presentear.", price: 250, emoji: "🎀", tag: "" },
  { id: "k4", cat: "kits", name: "Kit Café da Tarde", desc: "20 doces variados + café coado para 20 pessoas.", price: 160, emoji: "☕", tag: "" },

  // --- Cafeteria ---
  { id: "c1", cat: "cafeteria", name: "Café Coado da Casa", desc: "Café coado na hora, servido na xícara ou no copo.", price: 8, emoji: "☕", tag: "" },
  { id: "c2", cat: "cafeteria", name: "Cappuccino Ceres", desc: "Espresso, leite vaporizado e cacau — com granulado por cima.", price: 15, emoji: "☕", tag: "Predileto" },
  { id: "c3", cat: "cafeteria", name: "Suco Natural de Laranja", desc: "Laranja espremida na hora, sem açúcar adicionado.", price: 14, emoji: "🍊", tag: "" },
  { id: "c4", cat: "cafeteria", name: "Chá Gelado da Casa", desc: "Chá preto gelado com limão siciliano e hortelã.", price: 12, emoji: "🧊", tag: "" }
];

/* --- Customizador "Monte seu Bolo" --- */
export const builder = {
  steps: [
    {
      key: "tamanho",
      title: "Tamanho / Rendimento",
      hint: "Escolha quantas fatias o seu bolo terá.",
      options: [
        { id: "t15", label: "15 fatias", detail: "≈ 15 cm", price: 90 },
        { id: "t25", label: "25 fatias", detail: "≈ 20 cm", price: 130 },
        { id: "t35", label: "35 fatias", detail: "≈ 25 cm", price: 170 },
        { id: "t50", label: "50 fatias", detail: "≈ 30 cm", price: 220 }
      ]
    },
    {
      key: "massa",
      title: "Massa",
      hint: "A base que dá o sabor ao seu bolo.",
      options: [
        { id: "m1", label: "Baunilha", detail: "Massa baeta de baunilha", price: 0 },
        { id: "m2", label: "Cacau 50%", detail: "Chocolate meio amargo", price: 0 },
        { id: "m3", label: "Red Velvet", detail: "Aveludada e intensa", price: 15 },
        { id: "m4", label: "Chocolate Belga", detail: "Cacau belga premium", price: 10 }
      ]
    },
    {
      key: "recheio",
      title: "Recheio (até 2 opções)",
      hint: "Selecione até dois recheios.",
      max: 2,
      options: [
        { id: "r1", label: "Ninho com Nutella", detail: "O predileto da casa", price: 10 },
        { id: "r2", label: "Brigadeiro Clássico", detail: "Chocolate artesanal", price: 8 },
        { id: "r3", label: "Doce de Leite", detail: "Cremoso e levemente salgado", price: 5 },
        { id: "r4", label: "Belga com Granulado", detail: "Cacau 50% e granulado crocante", price: 12 }
      ]
    },
    {
      key: "cobertura",
      title: "Cobertura & Finalização",
      hint: "O acabamento do seu bolo.",
      options: [
        { id: "c1", label: "Chantininho", detail: "Chantilly estabilizado", price: 0 },
        { id: "c2", label: "Ganache", detail: "Chocolate derretido", price: 15 },
        { id: "c3", label: "Granulado Gourmet", detail: "Belga crocante", price: 8 }
      ]
    },
    {
      key: "topper",
      title: "Topper / Observações",
      hint: "Personalização final do seu bolo.",
      options: [
        { id: "p1", label: "Sem topper", detail: "Apenas finalização", price: 0 },
        { id: "p2", label: "Topper personalizado", detail: "Com nome ou data", price: 20 }
      ],
      notes: true
    }
  ]
};

/* --- Calculadora rápida de festas --- */
export const calculator = {
  brigadeirosPerGuest: 6,
  slicesPerGuest: 1,
  tip: "Regra da casa: 6 brigadeiros por convidado e 1 fatia de bolo para cada um."
};

export const testimonials = [
  { name: "Mariana Alves", role: "Férias na praia do Camburi", text: "A Caixinha da Felicidade foi o sucesso do aniversário da minha filha. Ninho com Nutella arrasou e o atendimento pelo WhatsApp foi rapidíssimo.", stars: 5 },
  { name: "Ricardo Menezes", role: "Confraternização do escritório", text: "Fechamos o Kit Festa Médio para 50 pessoas. Tudo fresquinho, embalado com capricho e no horário combinado.", stars: 5 },
  { name: "Juliana Prado", role: "Chá de bebê em Camburi", text: "Usei o Monte seu Bolo e fiquei encantada com o resultado. O topper personalizado ficou lindo nas fotos.", stars: 5 },
  { name: "Carlos Ferreira", role: "Fim de tarde na praia", text: "Paro todo fim de tarde para tomar um café e um brigadeiro clássico. Virou tradição nas nossas férias no litoral norte.", stars: 4 }
];

export const gallery = [
  { emoji: "🎁", label: "Caixinha da Felicidade", tone: "chocolate" },
  { emoji: "🍫", label: "Brigadeiros gourmet", tone: "pink" },
  { emoji: "🎂", label: "Bolo de Ninho com Nutella", tone: "cream" },
  { emoji: "🍡", label: "Brigadeiros clássicos", tone: "rose" },
  { emoji: "🍮", label: "Bolo no pote", tone: "pink" },
  { emoji: "☕", label: "Cafeteria da Ceres", tone: "cream" },
  { emoji: "🍰", label: "Fatias de bolo", tone: "chocolate" },
  { emoji: "🎀", label: "Caixinhas para presentear", tone: "rose" }
];

export const info = {
  address: "Praia do Camburizinho, 744 — Camburizinho, São Sebastião/SP",
  cep: "CEP 11619-393",
  hours: "Seg a Qui: 10h–20h · Sex a Dom: 10h–22h",
  phone: "(12) 98121-0916",
  instagram: "@ceresbrigadeiros",
  instagramUrl: "https://www.instagram.com/ceresbrigadeiros/",
  ifoodNote: "Delivery pelo WhatsApp e pelo iFood (link na bio do Instagram)",
  since: "8 anos em Camburi"
};

export const brl = (v) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const wppURL = (text) =>
  `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;
