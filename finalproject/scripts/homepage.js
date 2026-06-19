import { ourMenu } from "./getmenu.mjs";
import { displayDialog } from "./dialog.mjs";

const showourmenu = document.querySelector('#ourmenu');
const dialogbox = document.querySelector('#answers');
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');
const closebutton = document.querySelector('#closebutton');
const dialogimage = document.querySelector('#answers img');
const dialogtitle = document.querySelector('#answers h2');
const dialogtext = document.querySelector('#answers p');
const menulink = './data/menu.json';

displayDialog(question1, dialogimage, dialogtext, dialogbox, closebutton, dialogtitle);
displayDialog(question2, dialogimage, dialogtext, dialogbox, closebutton, dialogtitle);
displayDialog(question3, dialogimage, dialogtext, dialogbox, closebutton, dialogtitle);

ourMenu(menulink, showourmenu);