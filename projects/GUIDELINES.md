# ShowCase - Guidelines de Desenvolvimento

> Padrões e boas práticas para todos os projetos do portfólio.

---

## Estrutura de Arquivos

```
projects/
├── exemplo-01/
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── assets/
│   └── README.md
└── [outros projetos...]
```

### Obrigatório por Projeto

- `README.md` - Documentação completa
- `index.html` - Página principal
- Estrutura de pastas padronizada

---

## Tecnologias Permitidas

### Front-end (Sem Dependencies)
- HTML5 semântico
- CSS3 (Tailwind, CSS Modules, ou Vanilla)
- JavaScript (Vanilla ou TypeScript)

### Bibliotecas CDN (Quando Necessário)
- GSAP (animações)
- html2canvas (exportar imagens)
- Google Fonts

### Build (Opcional)
- TypeScript only para projeto exemplo-11

---

## Padrões de Código

### HTML
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título da Página</title>
  <meta name="description" content="Descrição meta">
</head>
<body>
  <!-- Conteúdo semântico -->
</body>
</html>
```

### CSS
```css
/* Variáveis CSS */
:root {
  --primary-color: #000000;
  --text-color: #333333;
}

/* Mobile-first */
.elemento {
  width: 100%;
  padding: 1rem;
}

@media (min-width: 768px) {
  .elemento {
    width: 50%;
  }
}
```

### JavaScript
```javascript
// Use IIFE ou módulos
(function() {
  'use strict';
  
  // Código aqui
})();
```

---

## SEO Essentials

Toda página deve ter:

- [ ] Meta title
- [ ] Meta description
- [ ] Meta viewport
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] JSON-LD Schema (quando aplicável)

---

## Acessibilidade (WCAG AA)

- [ ] Contraste mínimo 4.5:1
- [ ] focus states visíveis
- [ ] aria-labels em botões
- [ ] skip-to-content link
- [ ] semantic HTML
- [ ] keyboard navigation

---

## Performance

- [ ] Imagens otimizadas (WebP)
- [ ] Lazy loading
- [ ] Minificar CSS/JS (produção)
- [ ] Font-display: swap
- [ ] Preconnect para CDNs

---

## Responsividade

Breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## README.md Estrutura

Todo projeto deve ter:

```markdown
# Nome do Projeto

> Descrição breve

## Descrição
[Descrição detalhada]

## Características
- Feature 1
- Feature 2

## Como Usar
[Instruções]

## Tecnologias
- HTML5
- CSS3
- JavaScript

## Deploy
[Instruções]

---

**Data:** Mês Ano
**Status:** ✅ Completo
```

---

## Commits

Padrão de commits:

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
perf: melhoria de performance
```

---

## Checklist Pré-Deploy

- [ ] Testar em Chrome, Firefox, Safari, Edge
- [ ] Validar responsividade mobile
- [ ] Verificar Lighthouse (80+)
- [ ] Validar HTML W3C
- [ ] Testar acessibilidade
- [ ] Otimizar imagens
- [ ] Minificar assets
- [ ] Verificar meta tags

**Última atualização:** Abril 2026