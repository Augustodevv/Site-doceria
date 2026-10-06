# 📸 Créditos de imagem

Todas as fotos usadas no site **site-estatico** (versão publicada) são da própria
loja ou do perfil público dela. Nenhuma imagem de terceiros é usada no HTML
publicado (a antiga foto de praia saiu do site — ver "Arquivo não usado" abaixo).

## 1. Fotos do cardápio (iFood) — `site-estatico/assets/img/produtos/`

31 fotos publicadas pela própria Ceres Brigadeiros no cardápio do iFood:

- Loja: <https://www.ifood.com.br/delivery/sao-sebastiao-sp/ceres-brigadeiros-praia-de-camburi/a0d54796-c9e0-4902-9f58-fea2f2638034>
- Origem dos arquivos: `static.ifood-static.com.br/image/upload/t_high/pratos/...`
- Uso: fotos dos produtos da própria loja, no site oficial da loja.
- Alterações: apenas redimensionamento/recompressão JPEG (nenhum corte, nenhum filtro).

## 2. Fotos do ambiente (Google Maps) — `site-estatico/assets/img/`

| Arquivo | Conteúdo |
|---|---|
| `loja-interior.jpg` | Salão e vitrine da loja (hero + seção "Sobre nós") |
| `hero-doce.jpg` | Cardápio "Bolos Inteiros" com preços (hero + galeria) |
| `hero-brigadeiros.jpg` | Fatia de torta, café e brigadeiros (galeria + cafeteria) |
| `mesa-cafe.jpg` | Café da tarde na Ceres, com cardápio na mesa (galeria) |

> ⚠️ `hero-loja.jpg` (foto de limão com café) foi **removida**: era de outro lugar.

- Origem: fotos do perfil público **Google Maps — Ceres Brigadeiros**
  (`lh3.googleusercontent.com`), feitas pela loja/por clientes.
- Alterações: redimensionamento (máx. 1600px) e recompressão JPEG (qualidade 70–76).
- **Antes de publicar definitivamente:** peça autorização à loja (ou suba as fotos
  dela você mesmo) e confirme que o Google Maps permite reuso daquelas imagens.

## 3. Identidade visual — `material-oficial/` (não publicado no site)

Logo, mockups e capa/avatar do Linktree, baixados de
<https://gabirosemberg.com.br/ceres-brigadeiros> (marca da própria loja).
`ceres-logo.png` é o arquivo a usar como favicon/og:image se você quiser
substituir o `og:image` atual.

## 4. Arquivo não usado

| Arquivo | Obra original | Autor | Licença |
|---|---|---|---|
| `site-estatico/assets/img/camburizinho.jpg` (e `site-react/public/img/`) | [Camburizinho - SP "photographer Thiago Tadeu" - panoramio.jpg](https://commons.wikimedia.org/wiki/File:Camburizinho_-_SP_%22photographer_Thiago_Tadeu%22_-_panoramio.jpg) | Thiago Tadeu Guedes | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |

Hoje **não aparece em nenhuma página** (a seção "Sobre nós" passou a usar a foto
do salão). Se voltar a usar, mantenha a atribuição no rodapé (CC BY-SA 3.0).

## Pastas de apoio (fora do site publicado)

- `fotos-google-maps/` — 16 fotos originais baixadas (biblioteca de material).
- `material-oficial/` — identidade/branding.
- `site-estatico/assets/img/` — somente o que o site publicado carrega.

---

### Versão React (`site-react/`)

A versão React **ainda não recebeu essas fotos** (continua com emoji + a foto de
praia em `public/img/camburizinho.jpg`). O Netlify publica a versão estática
(`netlify.toml` → `site-estatico`), então isso não afeta o site no ar.
