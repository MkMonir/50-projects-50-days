'use strict';

const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('')
    .map((lett, i) => `<span style="transition-delay:${i * 50}ms">${lett}</span>`)
    .join('');
});
