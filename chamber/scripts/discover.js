import {places} from '../data/places.mjs';

const discovercards = document.querySelector('#discovercards');
console.log(places);


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