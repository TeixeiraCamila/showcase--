# Poster Maker

Aplicação desktop para criar posters customizados (800×400) com imagem e informações de filmes/eventos.

## Funcionalidades

- Upload de imagem local ou busca via OMDB API
- Preview em tempo real dos dados do poster
- Download como PNG (1600×800, scale 2x)

## Como Usar

1. Abra `index.html` no navegador (apenas desktop ≥1024px)
2. Preencha os campos ou busque um filme pela OMDB API
3. Clique em **Preview** para atualizar o poster
4. Clique em **Download** para salvar como PNG

## Estrutura

```
css/style.css    — estilos do layout, formulário e poster
js/config.js     — chave da API OMDB
js/script.js     — lógica de preview, busca e download
```

## Tecnologias

- HTML5 + Tailwind CSS (CDN)
- JavaScript Vanilla
- html2canvas (CDN) — captura do poster para PNG
- OMDB API — busca de filmes
