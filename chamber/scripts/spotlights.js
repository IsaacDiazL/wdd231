const cards = document.querySelector('.spotlights');
const members = 'data/members.json';

async function getMembersData() {
    const reponse = await fetch(members);
    const data = await reponse.json(reponse);
    displayMembers(data.companies);
}

const displayMembers = (members) => {
    const indexlist = [];
    let i = 0;
    const max = members.length;
    let index = Math.floor(Math.random() * max);

    while (indexlist.length <= 2) {
        let index = Math.floor(Math.random() * max);
        let member = members[index];
        let number = member.mebership.replace(/\D/g, "");
        if (number > 1) {
            if (!indexlist.includes(index)) {
                indexlist.push(index);
                let card = document.createElement('section');
                let cardtop = document.createElement('div');
                let cardimg = document.createElement('div')
                let cardinfo = document.createElement('div');
                let name = document.createElement('h2');
                let membership = document.createElement('span');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let url = document.createElement('a');
                let picture = document.createElement('img');

                name.textContent = member.name;
                membership.innerHTML = '<strong>Membership: </strong>' + member.mebership + '<br>';
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
                membership.classList.add('sectorComp');
                address.classList.add('addressComp');
                phone.classList.add('phoneComp');
                url.classList.add('urlComp');

                cardtop.appendChild(name);
                cardtop.appendChild(membership);
                cardimg.appendChild(picture);
                cardimg.classList.add('cardimg');
                cardinfo.appendChild(address);
                cardinfo.appendChild(phone);
                cardinfo.appendChild(url);
                cardinfo.appendChild(membership);
                cardinfo.classList.add('cardinfo');
                card.appendChild(cardtop);
                card.appendChild(cardimg);
                card.appendChild(cardinfo);
                cards.appendChild(card);
            }
        }
    }
}

getMembersData();