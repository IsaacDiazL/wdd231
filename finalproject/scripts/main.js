import { displayButton } from "./navigation.mjs";
import { ourMenu } from "./getmenu.mjs";

const hanbutton = document.querySelector('#hanbutton');
const navbar = document.querySelector('#navbar');
const displaylast = document.querySelector('#lastModified');
const displayyear = document.querySelector('#currentyear');
const showourmenu = document.querySelector('#ourmenu');
const menulink = 'data/menu.json';
const date = new Date(document.lastModified);
const modified = new Date();

displayyear.innerHTML = `© ${date.getFullYear()}`;
displaylast.innerHTML = `${modified.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}`;

showourmenu.textContent = 'hello world';
displayButton(hanbutton, navbar);
ourMenu(menulink, showourmenu);