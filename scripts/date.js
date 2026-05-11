const displayYear = document.querySelector('#currentyear');
const date = new Date();
const dispLastMod = document.querySelector('#lastModified');
const modified = new Date(document.lastModified);

displayYear.innerHTML = `©${date.getFullYear()}`;
dispLastMod.innerHTML = modified.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });

