const fs = require('fs');
const path = require('path');

function loadStreams() {
  const filePath = path.join(__dirname, 'streams.json');
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, 'utf-8');
  try {
    return JSON.parse(data);
  } catch (e) {
    console.error('Failed to parse streams.json:', e);
    return [];
  }
}

function createTile(stream) {
  const el = document.createElement('div');
  el.className = 'tile';
  el.textContent = stream.title || stream.url;
  return el;
}

window.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  const streams = loadStreams();
  streams.forEach(s => grid.appendChild(createTile(s)));
});
