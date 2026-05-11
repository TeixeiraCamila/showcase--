# Infinite Slider - Oscar Winners

Galeria de filmes vencedores do Oscar com scroll infinito.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- GSAP (animações)

## Navegação

- Scroll do mouse/trackpad
- Swipe touch
- Teclas ↑↓ e PageUp/PageDown

## Dados

Os filmes são controlados pelo arquivo `data/slides.json`. Para adicionar/remover filmes, edite este arquivo.

```json
{
  "title": "Título da página",
  "description": "Descrição",
  "slides": [
    {
      "title": "Nome do Filme",
      "image": "./assets/images/filme.jpg",
      "alt": "Descrição da imagem",
      "tomatometer": 5,
      "observation": "Observação",
      "text": ["Parágrafo 1", "Parágrafo 2"]
    }
  ]
}
```