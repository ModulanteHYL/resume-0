!function () {
    var view = document.querySelector('.top-nav-bar-wrap');

    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvents();
        },
        bindEvents: function () {
            window.onscroll = () => {
                var topBar = this.view.querySelector('.top-nav-bar');
                if (window.scrollY > 0) {
                    topBar.classList.add('bg');
                } else {
                    topBar.classList.remove('bg');
                }
            }
        }
    }
    controller.init(view);
}.call();