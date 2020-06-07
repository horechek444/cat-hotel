"use strict";
/* Модальное окно каталога */
if (document.querySelectorAll(".catalogue__button")) {
    let catalogButton = document.querySelectorAll(".catalogue__button");
    let modalWindow = document.querySelector(".modal");
    let modalClose = modalWindow.querySelector(".modal__close");
    let bannerButton = document.querySelector(".banner__button");
    let main = document.querySelector(".content");
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer");

    for (let i = 0; i < catalogButton.length; i++) {
        catalogButton[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            modalWindow.classList.add("show");
            main.classList.add("blure");
            header.classList.add("blure");
            footer.classList.add("blure");
        });
    }

    bannerButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalWindow.classList.add("show");
        main.classList.add("blure");
        header.classList.add("blure");
        footer.classList.add("blure");
    });

    modalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalWindow.classList.remove("show");
        main.classList.remove("blure");
        header.classList.remove("blure");
        footer.classList.remove("blure");
    });
}

/* Окно каталога с благодарностью */
if (document.querySelector(".modal__button")) {
    let thanksWindow = document.querySelector(".thanks");
    let thanksClose = thanksWindow.querySelector(".thanks__close");
    let thanksButton = thanksWindow.querySelector(".thanks__button");
    let modalButton = document.querySelector(".modal__button");
    let main = document.querySelector(".content");
    let header = document.querySelector(".header");
    let footer = document.querySelector(".footer");

    modalButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        thanksWindow.classList.add("show");
        main.classList.add("blure");
        header.classList.add("blure");
        footer.classList.add("blure");
    });

    thanksClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        thanksWindow.classList.remove("show");
        main.classList.remove("blure");
        header.classList.remove("blure");
        footer.classList.remove("blure");
    });

    thanksButton.addEventListener("click", function (evt) {
        evt.preventDefault();
        thanksWindow.classList.remove("show");
        main.classList.remove("blure");
        header.classList.remove("blure");
        footer.classList.remove("blure");
    });
}