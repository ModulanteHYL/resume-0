!function () {
    var view = View('div.wait-wrapper');

    var controller = Controller({
        bindEvents: function () {
            window.onload = () => {
                localStorage.clear();
                setTimeout(() => {
                    this.view.classList.remove('active');
                    document.body.style.overflowY = 'auto';
                }, 1000);
                if (window.scrollY > 0) {
                    setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 0);
                }
            }

        }
    })
    controller.init(view);
}.call();
