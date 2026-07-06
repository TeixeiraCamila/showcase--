# SK Builders — Real Estate Landing Page

Landing page premium para **SK Builders**, agência de real estate especializada em appraisal, vendas, compras e investimentos internacionais.

## Stack

- HTML5 semântico + ARIA labels + skip link
- CSS3 custom properties + Outfit/Clash Display (Google Fonts)
- JavaScript puro (IntersectionObserver, slider com autoplay, contador animado, menu mobile)

## Seções

| Seção | Destaque |
|---|---|
| **Header** | Logo + nav estilo pill + CTA "Get Started" |
| **Introduction** | Hero com gradiente no h1, stamp giratório, imagem posicionada |
| **About** | Flex 2-col: ícone decorativo + texto + achievements counter |
| **Project** | Slider horizontal 5 imagens com autoplay 8s, setas SVG |
| **Quality** | Interior design callout: título, descrição, CTA + imagem |
| **End Banner** | Heading gradiente + imagem ilustrativa |
| **Footer** | Logo + descrição + social icons + footer nav |

## Identidade Visual

- **Paleta**: `#1d4734` (primary forest), `#849fa8` (secondary steel), `#caa9a3` (tertiary rose), `#e09b6b` (amber accent)
- **Tipografia**: Outfit (corpo, 400–700), Clash Display (headings, 500–700)
- **Botões**: Pill `border-radius: 111px`, amber fill, hover escurece
- **Background**: black com seções em forest green
- **Gradientes**: Headings usam `background-clip: text` com fade white→transparent

## Animações

- Scroll reveals via IntersectionObserver: fade-up, fade-in, slide-left/right, scale
- Typing effect em `.title--entry`
- Contador progressivo nos achievements (10+ awards, 20+ years, 598+ rented)
- Stamp giratório contínuo no hero
- Slider com transição cubic-bezier e autoplay restart ao interagir
- `prefers-reduced-motion: reduce` respeitado

## Responsivo

- Breakpoints: 900px (tablet) e 600px (mobile)
- Mobile: hamburger menu com overlay + slide-in panel
- Header: esconde nav e login, mostra menu-toggle
- Seções reorganizam para coluna única
