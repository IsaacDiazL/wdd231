const cards = document.querySelector('#members');
const members = 'data/members.json';
const gridview = document.querySelector('#gridview');
const listview = document.querySelector('#listview');

async function getMembersData() {
    const reponse = await fetch(members);
    const data = await reponse.json(reponse);
    console.log(data);
    displayMembers(data.companies);
}

gridview.addEventListener('click', () => {
    cards.classList.add('gridview');
    cards.classList.remove('listview');
})

listview.addEventListener('click', () => {
    cards.classList.remove('gridview');
    cards.classList.add('listview');
})

const displayMembers = (members) => {
    cards.replaceChildren();
    members.forEach(member => {
        let card = document.createElement('section');
        let cardtop = document.createElement('div');
        let cardimg = document.createElement('div')
        let cardinfo = document.createElement('div');
        let name = document.createElement('h2');
        let sector = document.createElement('span');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let picture = document.createElement('img');

        name.textContent = member.name;
        sector.textContent = member.sector;
        address.innerHTML = '<strong>Adress: </strong>' + member.address + '<br>';
        phone.innerHTML = '<strong>Phone number: </strong>' + member.phone + '<br>';
        url.innerHTML = '<strong>Url: </strong>' + member.name + '<br>';
        picture.setAttribute('src', member.img);
        picture.setAttribute('alt', member.img);
        picture.setAttribute('width', 'auto');
        picture.setAttribute('height', 'auto');
        url.setAttribute('href', member.url);

        cards.classList.add('gridview');
        name.classList.add('nameComp');
        sector.classList.add('sectorComp');
        address.classList.add('addressComp');
        phone.classList.add('phoneComp');
        url.classList.add('urlComp');

        cardtop.appendChild(name);
        cardtop.appendChild(sector);
        cardtop.classList.add('cardtop');
        cardimg.appendChild(picture);
        cardimg.classList.add('cardimg');
        cardinfo.appendChild(address);
        cardinfo.appendChild(phone);
        cardinfo.appendChild(url);
        cardinfo.classList.add('cardinfo');
        card.appendChild(cardtop);
        card.appendChild(cardimg);
        card.appendChild(cardinfo);
        cards.appendChild(card);
    });
}

getMembersData();