!function () {
    var view = View('.portfolio');
    var controller = Controller({
        bindEvents: function () {
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                pagination: {el: '.swiper-pagination',},
                navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},
            })
        }
    })
    controller.init(view);
}.call();