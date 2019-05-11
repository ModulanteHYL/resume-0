!function () {
    var view = document.querySelector('.portfolio');
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function () {
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {el: '.swiper-pagination',},
                navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},
            })
        }
    }
    controller.init(view);
}.call();