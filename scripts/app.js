const copyright = document.querySelector('#copyright');
const lastModified = document.querySelector('#lastModified');

const currentYear = new Date().getFullYear();
copyright.textContent = '©️ ${currentYear}';

let olastModif = new Date(document.lastModified);
lastModified.textContent = '${olastModif}'