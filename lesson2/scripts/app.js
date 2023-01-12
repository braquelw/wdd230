const copyright = document.querySelector('#copyright');
const lastModified = document.querySelector('#lastModified');

const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;

let lastModif = new Date(document.lastModified);
let month = lastModif.getMonth()+1;
let day = lastModif.getDate();
let year = lastModif.getFullYear();
let hours = lastModif.getHours();
let mins = lastModif.getMinutes();
let secs = lastModif.getSeconds();
lastModified.textContent = `${month}/${day}/${year} ${hours}:${mins}:${secs}`