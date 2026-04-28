# Poster Maker - Documentação

## Visão Geral

Projeto simples para criar posters verticais com imagem e informações personalizadas.

## Como Usar

1. Abra o arquivo `index.html` no navegador
2. Preencha os campos:
   - **Imagem**: Selecione uma imagem (jpg, png, etc)
   - **Título**: Título principal do poster
   - **Ano**: Ano de lançamento
   - **Nomes**: Nomes separados por vírgula
   - **Gênero**: Gênero do filme/evento
   - **Dirigido por**: Nome do diretor
3. Clique em **Preview** para atualizar
4. Clique em **Download** para salvar o poster como imagem PNG

## html2canvas

Biblioteca JavaScript que captura elementos DOM e converte em imagem.

### CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
```

### Uso Básico

```javascript
html2canvas(elemento).then(canvas => {
    // canvas é o elemento <canvas> gerado
    const imagem = canvas.toDataURL('image/png');
});
```

### Download da Imagem

```javascript
html2canvas(elemento).then(canvas => {
    const link = document.createElement('a');
    link.download = 'poster.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
```

### Opções Comuns

| Opção | Descrição | Padrão |
|-------|-----------|--------|
| `backgroundColor` | Cor de fundo | #ffffff |
| `scale` | Escala da imagem (1-3) | 1 |
| `width` | Largura específica | automático |
| `height` | Altura específica | automático |
| `useCORS` | Permite imagens cross-origin | false |

### Exemplo com Opções

```javascript
html2canvas(elemento, {
    backgroundColor: '#000000',
    scale: 2,
    useCORS: true
}).then(canvas => {
    const link = document.createElement('a');
    link.download = 'poster.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
```

## Tecnologias

- HTML5
- Tailwind CSS (CDN)
- JavaScript Vanilla
- html2canvas (CDN)
