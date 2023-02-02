function addClass(){
    var  burger = document.getElementById("burger");
    burger.classList.toggle("header__burger_active")
    var  menu = document.getElementById("menu");
    menu.classList.toggle("menu__block_active")
}
function myFunction(){
    var  popup = document.getElementById("popup");
    popup.classList.toggle("popup")
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    centeredSlides: true,

    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },

    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,

        },
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,

        },
        // when window width is >= 480px
        640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

