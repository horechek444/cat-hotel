"use strict";
/* Модальное окно каталога */
if (document.querySelectorAll(".catalogue__button")) {
    let catalogButton = document.querySelectorAll(".catalogue__button");
    let modalWindow = document.querySelector(".modal");
    let modalClose = modalWindow.querySelector(".modal__close");
    let modalButton = modalWindow.querySelector(".modal__button");
    let root = document.querySelector(".root");

    for (let i = 0; i < catalogButton.length; i++) {
        catalogButton[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            modalWindow.classList.add("modal__show");
        });
    }

    modalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalWindow.classList.remove("modal__show");
    });

    modalButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalWindow.classList.remove("modal__show");
    });
}


// if (document.querySelector(".modal__button")) {
//     let thanksClose = document.querySelector(".thanks");
//     let thanksClose = thanksWindow.querySelector(".thanks__close");
//     let modalButton = modalWindow.querySelector(".modal__button");

//     modalButton.addEventListener("click", function (evt) {
//         evt.preventDefault();
//         modalWindow.classList.add("modal__show");
//     });

//     thanksClose.addEventListener("click", function (evt) {
//         evt.preventDefault();
//         thanksClose.classList.remove("modal__show");
//     });
// }