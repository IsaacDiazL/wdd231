import { displayButton } from "./navigation.mjs";
import { ourMenu } from "./getmenu.mjs";
import { displayDialog } from "./dialog.mjs";

const hanbutton = document.querySelector('#hanbutton');
const navbar = document.querySelector('#navbar');
const displaylast = document.querySelector('#lastModified');
const displayyear = document.querySelector('#currentyear');
const showourmenu = document.querySelector('#ourmenu');
const dialogbox = document.querySelector('#answers');
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');
const closebutton = document.querySelector('#closebutton');
const dialogimage = document.querySelector('#answers img');
const dialogtitle = document.querySelector('#answers h2');
const dialogtext = document.querySelector('#answers p');
const menulink = 'data/menu.json';
const date = new Date(document.lastModified);
const modified = new Date();

displayyear.innerHTML = `© ${date.getFullYear()}`;
displaylast.innerHTML = `${modified.toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}`;

// question1.addEventListener('click', () => {
//     dialogimage.src = './images/mole_poblano.webp';
//     dialogimage.alt = 'Mole Poblano';
//     dialogtext.textContent = 'Yes! Traditional recipes call for dark, Mexican artisan chocolate. Far from making the dish sweet, the chocolate is used as a secret weapon to perfectly balance the heat and smoky flavors of the dried chili peppers, giving the sauce its signature velvet texture and complex depth.';
//     dialogbox.showModal();
// })
// closebutton.addEventListener('click', () => {
//     dialogbox.close();
// })
console.log(`Value: ${question2.id}`);
displayDialog(question1, dialogimage, dialogtext, dialogbox, closebutton, dialogtitle);
displayDialog(question2, dialogimage, dialogtext, dialogbox, closebutton, dialogtitle);
displayDialog(question3, dialogimage, dialogtext, dialogbox, closebutton, dialogtitle);

displayButton(hanbutton, navbar);
ourMenu(menulink, showourmenu);