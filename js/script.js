function openMenu() {
    const body = document.body;
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    burger.addEventListener('click', function (e) {
        burger.classList.toggle('active');
        menu.classList.toggle('open');
        body.classList.toggle('lock')
        e.preventDefault();
    })
}
openMenu();