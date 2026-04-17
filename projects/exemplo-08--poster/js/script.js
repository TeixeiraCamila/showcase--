const W = 981;
const PAD = 95;

let image = null;
let toastTimer = null;

const $ = id => document.getElementById(id);

const form = $('form');
const inputs = {
  title: $('title'),
  year: $('year'),
  genre: $('genre'),
  nativeTitle: $('nativeTitle'),
  directedBy: $('directedBy'),
  writtenBy: $('writtenBy'),
  starring1: $('starring1'),
  starring2: $('starring2'),
  imageUrl: $('imageUrl'),
};
const poster = $('poster');
const posterImage = $('posterImage');
const posterDetails = $('posterDetails');
const previewTitle = $('previewTitle');
const previewYear = $('previewYear');
const downloadBtn = $('downloadBtn');
const imageUpload = $('imageUpload');
const canvas = $('canvas');

function toast(msg) {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

function getData() {
  return {
    title: inputs.title.value.trim(),
    year: inputs.year.value.trim(),
    genre: inputs.genre.value.trim(),
    nativeTitle: inputs.nativeTitle.value.trim(),
    directedBy: inputs.directedBy.value.trim(),
    writtenBy: inputs.writtenBy.value.trim(),
    starring: [
      inputs.starring1.value.trim(),
      inputs.starring2.value.trim(),
    ].filter(Boolean),
    imageUrl: inputs.imageUrl.value.trim(),
  };
}

function saveData() {
  localStorage.setItem('posterData', JSON.stringify(getData()));
  localStorage.setItem('posterImage', image || '');
  localStorage.setItem('posterImageUrl', inputs.imageUrl.value.trim());
}

function loadData() {
  try {
    const data = JSON.parse(localStorage.getItem('posterData'));
    if (data) {
      Object.keys(data).forEach(key => {
        if (inputs[key]) inputs[key].value = data[key] || '';
        if (key === 'starring' && Array.isArray(data[key])) {
          inputs.starring1.value = data[key][0] || '';
          inputs.starring2.value = data[key][1] || '';
        }
      });
    }
    const savedImg = localStorage.getItem('posterImage');
    if (savedImg) {
      image = savedImg;
      updatePosterImage();
    }
    const savedUrl = localStorage.getItem('posterImageUrl');
    if (savedUrl) {
      inputs.imageUrl.value = savedUrl;
    }
  } catch (e) {}
}

const posterImageEl = posterImage;
function updatePosterImage() {
  if (image) {
    posterImageEl.innerHTML = `<img src="${image}" alt="Poster">`;
  } else {
    posterImageEl.innerHTML = '<span class="poster__placeholder">Adicione uma imagem</span>';
  }
}

function updatePreview() {
  const d = getData();
  
  previewTitle.textContent = d.title.toUpperCase();
  previewYear.textContent = d.year;
  
  let html = '';
  const add = (label, value) => {
    if (value) {
      html += `<div class="poster__detail"><span class="poster__detail-label">${label}</span><br><span class="poster__detail-value">${value.toUpperCase()}</span></div>`;
    }
  };
  
  add('native title', d.nativeTitle);
  add('genre', d.genre);
  add('directed by', d.directedBy);
  add('written by', d.writtenBy);
  if (d.starring.length) add('starring', d.starring.join(', '));
  
  posterDetails.innerHTML = html;
  
  if (d.title && image) {
    downloadBtn.classList.remove('u-hidden');
  } else {
    downloadBtn.classList.add('u-hidden');
  }
}

function download() {
  if (!image || !inputs.title.value.trim()) {
    toast('Adicione título e imagem');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  const W = 981;
  const PAD = 95;
  const imgAreaW = 819;
  const minImgH = 1229;
  
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const imgRatio = img.width / img.height;
    let drawW = imgAreaW;
    let drawH = drawW / imgRatio;
    
    if (drawH > minImgH) {
      drawH = minImgH;
      drawW = drawH * imgRatio;
    }
    
    let finalImgH = minImgH;
    let finalDrawY = PAD;
    
    if (drawH < minImgH) {
      finalDrawY = PAD + (minImgH - drawH) / 2;
    } else {
      finalImgH = drawH;
    }
    
    const imgBottom = finalDrawY + finalImgH;
    
    const infoX = PAD;
    const infoY = imgBottom + 48;
    const titleSize = 96;
    const dataSize = 60;
    const lineHeight = dataSize + 14;
    const infoLineHeight = dataSize + 16;
    
    ctx.fillStyle = '#1e1e1e';
    ctx.font = '700 ' + titleSize + 'px Inter, Arial, sans-serif';
    ctx.textBaseline = 'top';
    
    const d = getData();
    const title = d.title.toUpperCase();
    const titleW = 819;
    const words = title.split(' ');
    let line = '';
    let y = infoY;
    
    for (const word of words) {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > titleW && line) {
        ctx.fillText(line.trim(), infoX, y);
        y += titleSize + 4;
        line = word + ' ';
      } else {
        line = test;
      }
    }
    ctx.fillText(line.trim(), infoX, y);
    
    y += titleSize + 20;
    
    if (d.year) {
      ctx.font = '700 ' + dataSize + 'px Inter, Arial, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(d.year, infoX + 819, y);
      ctx.textAlign = 'left';
    }
    
    ctx.font = 'italic 400 ' + dataSize + 'px Inter, Arial, sans-serif';
    ctx.fillStyle = '#888';
    
    const addInfo = (label, value, bold) => {
      if (value) {
        ctx.fillText(label, infoX, y);
        y += infoLineHeight;
        ctx.fillStyle = '#1e1e1e';
        ctx.font = (bold ? '700' : '400') + ' ' + dataSize + 'px Inter, Arial, sans-serif';
        ctx.fillText(value.toUpperCase(), infoX, y);
        y += lineHeight;
        ctx.fillStyle = '#888';
        ctx.font = 'italic 400 ' + dataSize + 'px Inter, Arial, sans-serif';
      }
    };
    
    addInfo('native title', d.nativeTitle, false);
    addInfo('genre', d.genre, true);
    addInfo('directed by', d.directedBy, false);
    addInfo('written by', d.writtenBy, true);
    if (d.starring.length) addInfo('starring', d.starring.join(', '), false);
    
    const contentH = y + PAD;
    canvas.width = W;
    canvas.height = contentH;
    
    ctx.fillStyle = '#d9d9d9';
    ctx.fillRect(0, 0, W, contentH);
    
    const drawX2 = PAD + (imgAreaW - drawW) / 2;
    ctx.drawImage(img, drawX2, finalDrawY, drawW, drawH);
    
    ctx.fillStyle = '#1e1e1e';
    ctx.font = '700 ' + titleSize + 'px Inter, Arial, sans-serif';
    ctx.textBaseline = 'top';
    
    line = '';
    y = infoY;
    
    for (const word of words) {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > titleW && line) {
        ctx.fillText(line.trim(), infoX, y);
        y += titleSize + 4;
        line = word + ' ';
      } else {
        line = test;
      }
    }
    ctx.fillText(line.trim(), infoX, y);
    
    y += titleSize + 20;
    
    if (d.year) {
      ctx.font = '700 ' + dataSize + 'px Inter, Arial, sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(d.year, infoX + 819, y);
      ctx.textAlign = 'left';
    }
    
    y += lineHeight;
    
    ctx.font = 'italic 400 ' + dataSize + 'px Inter, Arial, sans-serif';
    ctx.fillStyle = '#888';
    
    const addInfo2 = (label, value, bold) => {
      if (value) {
        ctx.fillText(label, infoX, y);
        y += infoLineHeight;
        ctx.fillStyle = '#1e1e1e';
        ctx.font = (bold ? '700' : '400') + ' ' + dataSize + 'px Inter, Arial, sans-serif';
        ctx.fillText(value.toUpperCase(), infoX, y);
        y += lineHeight;
        ctx.fillStyle = '#888';
        ctx.font = 'italic 400 ' + dataSize + 'px Inter, Arial, sans-serif';
      }
    };
    
    addInfo2('native title', d.nativeTitle, false);
    addInfo2('genre', d.genre, true);
    addInfo2('directed by', d.directedBy, false);
    addInfo2('written by', d.writtenBy, true);
    if (d.starring.length) addInfo2('starring', d.starring.join(', '), false);
    
    const link = document.createElement('a');
    const name = d.title.replace(/\s+/g, '-').toLowerCase().substring(0, 20);
    link.download = `poster-${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    toast('Download iniciado');
  };
  
  img.onerror = () => toast('Erro ao carregar imagem');
  img.crossOrigin = 'anonymous';
  img.src = image;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!image) {
    toast('Selecione uma imagem');
    return;
  }
  updatePreview();
  saveData();
  toast('Pôster gerado');
});

form.addEventListener('reset', () => {
  image = null;
  inputs.imageUrl.value = '';
  updatePosterImage();
  posterDetails.innerHTML = '';
  previewTitle.textContent = '';
  previewYear.textContent = '';
  downloadBtn.classList.add('u-hidden');
  localStorage.removeItem('posterData');
  localStorage.removeItem('posterImage');
  localStorage.removeItem('posterImageUrl');
});

form.addEventListener('input', () => {
  const url = inputs.imageUrl.value.trim();
  if (url) {
    image = url;
    updatePosterImage();
  }
  updatePreview();
  saveData();
});

imageUpload.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = ev => {
    image = ev.target.result;
    updatePosterImage();
    updatePreview();
    saveData();
  };
  reader.readAsDataURL(file);
});

downloadBtn.addEventListener('click', download);

loadData();
updatePreview();
