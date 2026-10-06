# 🍫 Ceres Brigadeiros — Site da Brigadeiria

Site da **Ceres Brigadeiros** (Camburizinho, São Sebastião/SP), implementado a partir do
**PRD `prd_espaco_gourmet.md`** em duas versões funcionais.

```
site-estatico/   → HTML + CSS + JavaScript puro (abre em qualquer lugar, sem build)
site-react/      → React 18 + Vite (SPA com componentes)
```

## 🏖️ Da onde vieram os dados da loja

Pesquisa pública (out/2026) — Instagram [`@ceresbrigadeiros`](https://www.instagram.com/ceresbrigadeiros/):

| Dado | Valor |
|---|---|
| Endereço | Praia do Camburizinho, 744 — Camburizinho, São Sebastião/SP (CEP 11619-393) |
| Horários | Seg a Qui: 10h–20h · Sex a Dom: 10h–22h |
| WhatsApp | (12) 98121-0916 → `5512981210916` |
| Delivery | WhatsApp e iFood (link na bio do Instagram) |
| História | Fundada há ~8 anos por Ceres, iniciou vendendo brigadeiros na praia do Camburi |

> ✅ **Cardápio com preços reais** (out/2026): bolos inteiros do cardápio do salão,
> unidades/fatias do iFood oficial e depoimentos reais do Google Maps (4,9★ · 1.362
> avaliações). Kits e cafeteria usam valores da casa — confirme no WhatsApp antes
> de publicar. Fontes e autorizações pendentes: ver [`CREDITS.md`](CREDITS.md).

## 🚀 Como rodar

### 1. Versão estática (sem dependências)

```powershell
# opção A: servidor local
node server.js            # → http://localhost:8317/site-estatico/

# opção B: simplesmente abrir o arquivo
# duplo clique em site-estatico/index.html
```

### 2. Versão React

```powershell
cd site-react
npm install
npm run dev                # → http://localhost:5173
npm run build              # gera o dist/ para produção
```

## ⚙️ Configuração obrigatória

Endereço, horários, telefone, Instagram e WhatsApp estão em `info`/`whatsapp` em:

| Versão | Arquivo |
|---|---|
| Estática | `site-estatico/assets/js/data.js` |
| React | `site-react/src/data.js` |

## ✅ O que foi implementado (x PRD)

| Seção do PRD | Status |
|---|---|
| 1.3 Objetivos (CTA WhatsApp, checkout simplificado) | ✅ |
| 2. Persona / necessidades (fotos, personalização, prazos, WhatsApp) | ✅ |
| 3.1 Paleta de cores (Chocolate, Rosa Confeitaria, Rosa Suave, Creme) | ✅ |
| 3.2 Tipografia Playfair Display + Montserrat + cursiva (Dancing Script) | ✅ |
| 3.3 Glassmorphism no header, microinterações, espaçamento, divisorias decorativas | ✅ |
| 4.1-A Header com logo, menu, badge do carrinho e CTA "Fazer Encomenda" | ✅ |
| 4.1-B Home: hero em carrossel fade, categorias, seção institucional, calculadora, galeria Instagram, rodapé | ✅ |
| 4.1-C Cardápio com filtros por categoria sem reload | ✅ |
| 4.1-D Customizador "Monte seu Bolo" em 5 etapas com resumo flutuante e valor em tempo real | ✅ |
| 4.1-E Checkout simplificado → mensagem formatada no WhatsApp | ✅ |
| 5. Performance, mobile-first (dock inferior), acessibilidade (alt/labels/contraste/reduced-motion), SEO local, HTTPS/LGPD | ✅ |
| 6. Arquitetura de informação | ✅ |
| 7. KPIs (conversão WhatsApp, permanência, bounce) | ✅ |

## 🧩 Funcionalidades interativas

- **Carrossel do hero** — fade automático a cada 6 s, com dots acessíveis
- **Filtros do cardápio** — Todos / Brigadeiros / Bolos / Doces & Potes / Kits & Caixinhas / Cafeteria
- **Monte seu Bolo** — tamanho → massa → até 2 recheios → cobertura → topper/observações, com barra de progresso, preço dinâmico e validação por etapa
- **Carrinho (encomenda)** — drawer lateral, quantidades, remoção, badge de contador
- **Checkout via WhatsApp** — nome, telefone, data/horário, retirada ou entrega (campo condicional de endereço), mensagem formatada com `*negrito*`
- **Calculadora de festas** — 6 brigadeiros + 1 fatia de bolo por convidado, arredondado em dezenas
- **Formulário de contato** — validação campo a campo → abre o WhatsApp
- **Mobile-first** — menu hambúrguer + dock inferior estilo app
- **Animações** — reveal on scroll, hover nos cards, `prefers-reduced-motion` respeitado

## 📝 Observações

- O site foi rebrandeado de "Espaço Gourmet" para **Ceres Brigadeiros** com os dados
  públicos reais da loja; o PRD original (`prd_espaco_gourmet.md`) foi mantido como
  documento de referência.
- A cor do PRD `#F3DEDS` é um hex inválido — foi corrigida para **`#F3DEDA`** (Creme Rosado).
- **Imagens**: o site usa **fotos reais da loja** — as do cardápio vêm do **iFood oficial**
  (`assets/img/produtos/`, 19 dos 21 produtos) e as de ambiente (hero, galeria e *Sobre nós*)
  do **perfil Google Maps** da Ceres (`assets/img/`). Os 2 itens sem foto oficial (suco e chá)
  mantêm o emoji do design system como fallback. Origem, licença e checklist de autorização
  antes de publicar: [`CREDITS.md`](CREDITS.md).
  A versão React (`site-react/`) **ainda não recebeu** essas fotos — o Netlify publica a
  estática (`netlify.toml`), então isso não afeta o site no ar.
- Nenhum dado do cliente é armazenado — o pedido é só formatado e enviado ao WhatsApp
  pelo próprio navegador (conforme item de LGPD do PRD).
