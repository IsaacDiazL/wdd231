const buttonnon = document.querySelector('#nonprofit');
const buttonbronze = document.querySelector('#bronze');
const buttonsilver = document.querySelector('#silver');
const buttongold = document.querySelector('#gold');

const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox p');
const closeButton = document.querySelector('#closeButton');

const members = 'data/members.json';

async function getLevelData() {
    const response = await fetch(members);
    const data = await response.json(response);
    console.log(data.membership);
    displayLevelData(data.membership);
}

function displayLevelData(data) {
    buttonnon.addEventListener('click', () => {
        dialogBoxText.innerHTML = textFormat(data, 0);
        dialogBox.showModal();
    })
    buttonbronze.addEventListener('click', () => {
        dialogBoxText.innerHTML = textFormat(data, 1);
        dialogBox.showModal();
    })
    buttonsilver.addEventListener('click', () => {
        dialogBoxText.innerHTML = textFormat(data, 2);
        dialogBox.showModal();
    })
    buttongold.addEventListener('click', () => {
        dialogBoxText.innerHTML = textFormat(data, 3);
        dialogBox.showModal();
    })

    closeButton.addEventListener('click', () => {
        dialogBox.close();
    })
}

function textFormat(data, level) {
    return `
    <strong>level:</strong> ${data[level].badge} ${data[level].level} <br>
    <strong>Price:</strong> ${data[level].price_usd} <br>
    <strong>Billing:</strong> ${data[level].billing} <br>
    Best for ${data[level].best_for} <br>
    <strong>Benefits:</strong> <br>
        -Training: ${data[level].benefits.training} <br>
        -Events: ${data[level].benefits.events} <br>
        -Advertising: ${data[level].benefits.advertising} <br>
        -Discounts: ${data[level].benefits.discounts}
    `;
}

getLevelData();