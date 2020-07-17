const catalogButtons = Array.from(document.querySelectorAll('.assortment__button'));
const modalWindow = document.querySelector('.modal');
const modalClose = modalWindow.querySelector('.modal__close');
const bannerButton = document.querySelector('.banner__button');
const thanksWindow = document.querySelector('.thanks');
const thanksClose = thanksWindow.querySelector('.thanks__close');
const thanksButton = thanksWindow.querySelector('.thanks__button');
const modalButton = document.querySelector('.modal__button');
const filterWindow = document.querySelector('.filter');
const filterShow = document.querySelector('.rooms-list__filter-show');
const filterClose = filterWindow.querySelector('.filter__close');

/* Модальное окно каталога */
let modalToggle = function() {
    modalWindow.classList.toggle('modal_show');
}

bannerButton.addEventListener("click", modalToggle);
modalClose.addEventListener("click", modalToggle);
thanksClose.addEventListener("click", modalToggle);
thanksButton.addEventListener("click", modalToggle);

catalogButtons.forEach((catalogButton) => {
    catalogButton.addEventListener("click", modalToggle);
});

/* Окно каталога с благодарностью */
let thanksToggle = function() {
    thanksWindow.classList.toggle("thanks_show");
}

modalButton.addEventListener("click", thanksToggle);
thanksClose.addEventListener("click", thanksToggle);
thanksButton.addEventListener("click", thanksToggle);
modalClose.addEventListener("click", thanksToggle);

/* Окно каталога с фильтрами */
let filtreToggle = function() {
    filterWindow.classList.toggle('filter_show');
}

filterShow.addEventListener("click", filtreToggle);
filterClose.addEventListener("click", filtreToggle);