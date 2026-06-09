import {places} from '../data/places.mjs';

const discovercards = document.querySelector('#discovercards');

const now = Date.now();
console.log(now);
console.log(places);

const lastVisit = localStorage.getItem('lastVisit');

const timeText = document.querySelector('#visitText');

let visitText = '';

function getPlaces(places) {
    discovercards.replaceChildren();

    places.forEach(place => {
        const section = document.createElement('section');
        const image = document.createElement('img');
        const figure = document.createElement('figure');
        const name = document.createElement('h2');
        const address = document.createElement('address');
        const description = document.createElement('p');
        const button = document.createElement('button');

        section.classList.add('discoverSection');
        image.src = `images/${place.image}`;
        image.alt = place.name;
        image.title = place.name;
        image.style.width = '100%';
        image.loading = 'lazy';
        image.classList.add('discoverImg');

        name.textContent = place.name;

        address.textContent = place.address;

        description.textContent = place.description;

        button.textContent = 'Learn More';
        
        figure.appendChild(image);

        section.appendChild(figure);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(description);
        section.appendChild(button);

        discovercards.appendChild(section);
    });
}

getPlaces(places);

if (!lastVisit) {
    visitText = 'Welcome! Let us know if you have any questions.';
}
else {
    const pastTime = now - parseInt(lastVisit, 10);
    const msPerDay = 24 * 60 * 60 * 1000;

    if (pastTime < msPerDay) {
        visitText = 'Back so soon! Awesome!';
    }
    else {
        const days = Math.floor(pastTime / msPerDay);

        if (days === 1) {
            visitText = 'You last visited 1 day ago.';
        }
        else {
            visitText = `You last visited ${dias} days ago.`;
        }
    }
}

if (timeText) {
    timeText.textContent = visitText;
}

localStorage.setItem('lastVisit', now.toString());