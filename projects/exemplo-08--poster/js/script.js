const W = 500;
const H = 350;
const PAD = 16;
const IMG_W = 0.6;

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
  };
}

function saveData() {
  localStorage.setItem('posterData', JSON.stringify(getData()));
  localStorage.setItem('posterImage', image || '');
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
  } catch (e) {}
}

function updatePosterImage() {
  if (image) {
    posterImage.innerHTML = `<img src="${image}" alt="Poster">`;
  } else {
    posterImage.innerHTML = '<span class="poster__placeholder">Adicione uma imagem</span>';
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
  canvas.width = W;
  canvas.height = H;
  
  ctx.fillStyle = '#ECE9E4';
  ctx.fillRect(0, 0, W, H);
  
  const img = new Image();
  img.onload = () => {
    const imgAreaW = W * IMG_W;
    const infoAreaW = W - imgAreaW;
    
    const imgRatio = img.width / img.height;
    let drawW = imgAreaW - PAD * 2;
    let drawH = drawW / imgRatio;
    
    const imgY = PAD + (H - PAD * 2 - drawH) / 2;
    
    ctx.drawImage(img, PAD, imgY, drawW, drawH);
    
    ctx.fillStyle = '#000';
    ctx.font = '900 22px Impact, Arial Black, sans-serif';
    ctx.textBaseline = 'top';
    
    const d = getData();
    let y = PAD + 8;
    
    const title = d.title.toUpperCase();
      const titleW = infoAreaW - PAD - 50;
    const words = title.split(' ');
    let line = '';
    
    for (const word of words) {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > titleW && line) {
        ctx.fillText(line.trim(), imgAreaW, y);
        y += 24;
        line = word + ' ';
      } else {
        line = test;
      }
    }
    ctx.fillText(line.trim(), imgAreaW, y);
    
    if (d.year) {
      ctx.font = '300 16px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(d.year, W - PAD, PAD + 8);
      ctx.textAlign = 'left';
    }
    
    y += 30;
    ctx.font = 'italic 10px Arial';
    ctx.fillStyle = '#888';
    
    const addInfo = (label, value) => {
      if (value) {
        ctx.fillText(label, imgAreaW, y);
        y += 14;
        ctx.fillStyle = '#000';
        ctx.font = '600 10px Arial';
        ctx.fillText(value.toUpperCase(), imgAreaW, y);
        y += 18;
        ctx.fillStyle = '#888';
        ctx.font = 'italic 10px Arial';
      }
    };
    
    addInfo('native title', d.nativeTitle);
    addInfo('genre', d.genre);
    addInfo('directed by', d.directedBy);
    addInfo('written by', d.writtenBy);
    if (d.starring.length) addInfo('starring', d.starring.join(', '));
    
    const link = document.createElement('a');
    const name = d.title.replace(/\s+/g, '-').toLowerCase().substring(0, 20);
    link.download = `poster-${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    
    toast('Download iniciado');
  };
  
  img.onerror = () => toast('Erro ao carregar imagem');
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
  updatePosterImage();
  posterDetails.innerHTML = '';
  previewTitle.textContent = '';
  previewYear.textContent = '';
  downloadBtn.classList.add('u-hidden');
  localStorage.removeItem('posterData');
  localStorage.removeItem('posterImage');
});

form.addEventListener('input', () => {
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
