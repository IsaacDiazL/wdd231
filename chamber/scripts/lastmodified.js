const displaylast = document.querySelector('#lastModified');
const displayyear = document.querySelector('#currentyear');
const date = new Date(document.lastModified);
const modified = new Date();

displayyear.innerHTML = `© ${date.getFullYear()}`;
displaylast.innerHTML = `${modified.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}`;