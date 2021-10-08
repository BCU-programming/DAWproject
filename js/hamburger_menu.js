
const menuTrigger = document.querySelector('.menu_trigger');
menuTrigger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
});

