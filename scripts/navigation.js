const hanButton = document.querySelector('#hanButton');
const navBar = document.querySelector('.navBar');

hanButton.addEventListener('click', () => {
    hanButton.classList.toggle('show');
    navBar.classList.toggle('show');
})