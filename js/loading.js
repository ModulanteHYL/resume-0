!function () {
    var view = document.querySelector('.wait-wrapper');

    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEvent();
        },
        bindEvent: function () {
            window.onload = () => {
                localStorage.clear();
                setTimeout(() => {
                    this.view.classList.remove('active');
                    document.body.style.overflowY='auto';
                }, 1000);
                if (window.scrollY > 0) {
                    setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 0);
                }
            }

        }
    }
    controller.init(view);
}.call();
