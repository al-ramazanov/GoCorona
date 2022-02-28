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
document.addEventListener('click', documentActions);
function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.blue__btn')) {
        const modal = document.querySelector('.modal');
        modal.classList.add('show');
        const modalClose = document.querySelector('.modal__close');
        modalClose.addEventListener('click', function () {
            if (modal.classList.contains('show')) {
                modal.classList.remove('show')
            }

        });
        document.addEventListener('click', function (event) {
            if (modal == event.target) {
                modal.classList.remove('show')
            }
        })
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show')
            }
        })

    }

}