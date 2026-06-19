import { displayButton } from "./navigation.mjs";

const hanbutton = document.querySelector('#hanbutton');
const navbar = document.querySelector('#navbar');
const displaylast = document.querySelector('#lastModified');
const displayyear = document.querySelector('#currentyear');

const date = new Date(document.lastModified);
const modified = new Date();

displayyear.innerHTML = `© ${date.getFullYear()}`;
displaylast.innerHTML = `${modified.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}`;

displayButton(hanbutton, navbar);
ourMenu(menulink, showourmenu);