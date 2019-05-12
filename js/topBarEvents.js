!function () {
    var view = View('div.top-nav-bar-wrap');

    var controller = Controller({
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
    })
    controller.init(view);
}.call();