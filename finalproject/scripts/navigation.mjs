export function displayButton(button, navbar) {
    button.addEventListener('click', () => {
        button.classList.toggle('show');
        navbar.classList.toggle('show');
    })
};