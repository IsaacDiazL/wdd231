import { getMenu } from "./getmenu.mjs";
const cards = document.querySelector('#menusection');
const menulink = 'data/menu.json';
const b1 = document.querySelector('#allbutton');
const b2 = document.querySelector('#appbutton');
const b3 = document.querySelector('#maibutton');
const b4 = document.querySelector('#desbutton');
const b5 = document.querySelector('#dributton');
const title = document.querySelector('#menutitle');

getMenu(menulink, cards, b1, b2, b3, b4, b5, title);

