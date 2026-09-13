# Color & UI Usage Guide

## Palette base

| Token | Hex | Uso sugerido |
|---|---|---|
| `--color-twilight` | `#26466d` | Cor principal, textos fortes, fundos, links e ações |
| `--color-moonlight` | `#e7ebd7` | Fundo claro, áreas de respiro e texto sobre fundos escuros |
| `--color-amber-sunset` | `#e0a866` | Destaques, CTAs secundários, estados de hover e acentos |
| `--color-moss` | `#baa45c` | Acentos naturais, ícones, badges e elementos de apoio |

## 1. Font color

### Principal
- **Primary text:** `--color-twilight`
- **Secondary text:** `--color-twilight` com opacidade reduzida
- **Muted text:** `--color-twilight` com opacidade reduzida
- **Texto sobre fundo Twilight:** `--color-moonlight`
- **Texto sobre fundo Amber:** `--color-twilight`
- **Texto sobre fundo Moss:** `--color-twilight`

```css
color: var(--color-twilight);
color: var(--color-moonlight);
color: var(--color-amber-sunset);
color: var(--color-moss);
```

### Hierarquia recomendada

```css
--text-primary: var(--color-twilight);
--text-secondary: #53657d;
--text-muted: #718096;
--text-on-dark: var(--color-moonlight);
--text-accent: var(--color-amber-sunset);
```

> Para textos pequenos, prefira `--color-twilight` ou `--color-moonlight` em vez dos tons Amber/Moss isolados.

---

## 2. Background

### Backgrounds principais

| Elemento | Background | Texto |
|---|---|---|
| Página | `--color-moonlight` | `--color-twilight` |
| Header | `--color-twilight` | `--color-moonlight` |
| Footer | `--color-twilight` | `--color-moonlight` |
| Card claro | `#f4f5e9` ou `--color-moonlight` | `--color-twilight` |
| Destaque | `--color-amber-sunset` | `--color-twilight` |
| Destaque secundário | `--color-moss` | `--color-twilight` |

### Combinações recomendadas

```css
.page {
  background: var(--color-moonlight);
  color: var(--color-twilight);
}

.section-dark {
  background: var(--color-twilight);
  color: var(--color-moonlight);
}

.section-accent {
  background: var(--color-amber-sunset);
  color: var(--color-twilight);
}

.section-moss {
  background: var(--color-moss);
  color: var(--color-twilight);
}
```

---

## 3. Buttons / CTA

### Primary

**Normal**
- Background: `--color-twilight`
- Text: `--color-moonlight`

**Hover**
- Background: `--color-amber-sunset`
- Text: `--color-twilight`

**Active**
- Background: `--color-moss`
- Text: `--color-twilight`

```css
.button-primary {
  background: var(--color-twilight);
  color: var(--color-moonlight);
}

.button-primary:hover {
  background: var(--color-amber-sunset);
  color: var(--color-twilight);
}

.button-primary:active {
  background: var(--color-moss);
}
```

### Secondary

**Normal**
- Background: transparent
- Border: `--color-twilight`
- Text: `--color-twilight`

**Hover**
- Background: `--color-twilight`
- Text: `--color-moonlight`

```css
.button-secondary {
  background: transparent;
  border: 1px solid var(--color-twilight);
  color: var(--color-twilight);
}

.button-secondary:hover {
  background: var(--color-twilight);
  color: var(--color-moonlight);
}
```

### Accent

**Normal**
- Background: `--color-amber-sunset`
- Text: `--color-twilight`

**Hover**
- Background: `--color-moss`
- Text: `--color-twilight`

---

## 4. Hover states

### Links

```css
.link {
  color: var(--color-twilight);
}

.link:hover {
  color: var(--color-amber-sunset);
}
```

### Cards

```css
.card {
  background: var(--color-moonlight);
  color: var(--color-twilight);
}

.card:hover {
  background: #f0f2e2;
  border-color: var(--color-amber-sunset);
}
```

### Ícones interativos

```css
.icon-button {
  color: var(--color-twilight);
}

.icon-button:hover {
  color: var(--color-amber-sunset);
}
```

### Hover em fundo escuro

```css
.dark-link {
  color: var(--color-moonlight);
}

.dark-link:hover {
  color: var(--color-amber-sunset);
}
```

---

## 5. Icons

### Ícone principal
Use `--color-twilight`.

```css
.icon {
  color: var(--color-twilight);
}
```

### Ícone de destaque
Use `--color-amber-sunset`.

```css
.icon-accent {
  color: var(--color-amber-sunset);
}
```

### Ícone decorativo / natural
Use `--color-moss`.

```css
.icon-moss {
  color: var(--color-moss);
}
```

### Ícone sobre fundo escuro

```css
.icon-on-dark {
  color: var(--color-moonlight);
}

.icon-on-dark:hover {
  color: var(--color-amber-sunset);
}
```

### Combinações por função

| Função | Cor |
|---|---|
| Navegação | Twilight |
| Menu | Twilight |
| Busca | Twilight |
| Informação | Moss |
| Destaque | Amber Sunset |
| Favorito | Amber Sunset |
| Sucesso / confirmação | Moss |
| Ícone decorativo | Moss |
| Ícone sobre fundo escuro | Moonlight |
| Hover | Amber Sunset |

---

## 6. Borders

```css
--border-default: rgba(38, 70, 109, 0.2);
--border-strong: var(--color-twilight);
--border-accent: var(--color-amber-sunset);
--border-moss: var(--color-moss);
```

Uso:

- Cards: `--border-default`
- Inputs: `--border-default`
- Elementos ativos: `--border-strong`
- Hover: `--border-accent`
- Badges decorativos: `--border-moss`

---

## 7. Inputs

### Default

```css
.input {
  background: var(--color-moonlight);
  border: 1px solid rgba(38, 70, 109, 0.25);
  color: var(--color-twilight);
}
```

### Focus

```css
.input:focus {
  border-color: var(--color-amber-sunset);
  outline: 2px solid rgba(224, 168, 102, 0.25);
}
```

### Placeholder

```css
.input::placeholder {
  color: rgba(38, 70, 109, 0.55);
}
```

---

## 8. Badges / Tags

### Twilight

```css
.badge-primary {
  background: var(--color-twilight);
  color: var(--color-moonlight);
}
```

### Amber

```css
.badge-accent {
  background: var(--color-amber-sunset);
  color: var(--color-twilight);
}
```

### Moss

```css
.badge-moss {
  background: var(--color-moss);
  color: var(--color-twilight);
}
```

### Soft

```css
.badge-soft {
  background: rgba(186, 164, 92, 0.18);
  color: var(--color-twilight);
}
```

---

## 9. Cards

### Card claro

- Background: `--color-moonlight`
- Text: `--color-twilight`
- Border: Twilight com baixa opacidade
- Hover: Amber Sunset

### Card escuro

- Background: `--color-twilight`
- Text: `--color-moonlight`
- Accent: `--color-amber-sunset`

### Card destaque

- Background: `--color-amber-sunset`
- Text: `--color-twilight`
- Accent: `--color-moss`

---

## 10. Dividers

```css
.divider {
  background: rgba(38, 70, 109, 0.15);
}

.divider-accent {
  background: var(--color-amber-sunset);
}
```

---

## 11. Links e navegação

```css
.nav-link {
  color: var(--color-twilight);
}

.nav-link:hover {
  color: var(--color-amber-sunset);
}

.nav-link.is-active {
  color: var(--color-moss);
}
```

Em header escuro:

```css
.nav-link-dark {
  color: var(--color-moonlight);
}

.nav-link-dark:hover {
  color: var(--color-amber-sunset);
}

.nav-link-dark.is-active {
  color: var(--color-moss);
}
```

---

## 12. Estados

| Estado | Background | Text/Icon | Border |
|---|---|---|---|
| Default | Moonlight | Twilight | Twilight 20% |
| Hover | Amber Sunset | Twilight | Amber |
| Active | Moss | Twilight | Moss |
| Focus | Moonlight | Twilight | Amber |
| Dark | Twilight | Moonlight | Moonlight |
| Accent | Amber Sunset | Twilight | Amber |
| Soft accent | Moss 15–20% | Twilight | Moss |

---

## 13. CSS Variables

```css
:root {
  --color-twilight: #26466d;
  --color-moonlight: #e7ebd7;
  --color-amber-sunset: #e0a866;
  --color-moss: #baa45c;

  /* Text */
  --text-primary: var(--color-twilight);
  --text-on-dark: var(--color-moonlight);
  --text-accent: var(--color-amber-sunset);

  /* Background */
  --bg-primary: var(--color-moonlight);
  --bg-dark: var(--color-twilight);
  --bg-accent: var(--color-amber-sunset);
  --bg-secondary-accent: var(--color-moss);

  /* Border */
  --border-default: rgba(38, 70, 109, 0.2);
  --border-strong: var(--color-twilight);
  --border-accent: var(--color-amber-sunset);

  /* Interactive */
  --interactive-default: var(--color-twilight);
  --interactive-hover: var(--color-amber-sunset);
  --interactive-active: var(--color-moss);
}
```

---

## 14. Regra visual geral

A hierarquia recomendada é:

**Twilight → estrutura e contraste**

**Moonlight → base e respiro**

**Amber Sunset → atenção e interação**

**Moss → detalhe, estado e elemento natural**

Evite usar Amber Sunset e Moss como cor principal para grandes blocos de texto. Elas funcionam melhor como acentos, ícones, bordas, badges, indicadores e estados interativos.

## 15. Combinações principais

### Combinação A — Clássica
`Moonlight + Twilight`

Uso: página, blog, documentação, conteúdo editorial.

### Combinação B — CTA
`Twilight + Moonlight + Amber Sunset`

Uso: botões, links, hero e conversões.

### Combinação C — Natural
`Moonlight + Twilight + Moss`

Uso: cards, categorias, tags e elementos decorativos.

### Combinação D — Destaque
`Amber Sunset + Twilight + Moss`

Uso: banners, chamadas especiais e elementos de destaque.

### Combinação E — Dark
`Twilight + Moonlight + Amber Sunset`

Uso: header, footer, hero escuro e seções de impacto.
