const catalogButton = document.querySelectorAll(".catalogue__button");
const modalWindow = document.querySelector(".modal");
const modalClose = modalWindow.querySelector(".modal__close");
const bannerButton = document.querySelector(".banner__button");
const thanksWindow = document.querySelector(".thanks");
const thanksClose = thanksWindow.querySelector(".thanks__close");
const thanksButton = thanksWindow.querySelector(".thanks__button");
const modalButton = document.querySelector(".modal__button");

/* Модальное окно каталога */
let modalToggle = function(event) {
    modalWindow.classList.toggle("modal_show");
}

bannerButton.addEventListener("click", modalToggle);
modalClose.addEventListener("click", modalToggle);

for (let i = 0; i < catalogButton.length; i++) {
    catalogButton[i].addEventListener("click", modalToggle);
}

/* Окно каталога с благодарностью */
let thanksToggle = function(event) {
    thanksWindow.classList.toggle("thanks_show");
}

modalButton.addEventListener("click", thanksToggle);
thanksClose.addEventListener("click", thanksToggle);
thanksButton.addEventListener("click", thanksToggle);