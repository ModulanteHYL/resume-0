window.Controller = function (options) {/*初始化view和model并最后执行bindEvents函数*/
    var init = options.init;            /*因为是在这个函数调用了绑定事件，所以一定要有bindEvents属性*/
    var object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model;
            if(init){
                init.call(this);
            }
            this.bindEvents();
        }
    }
    for (let key in options) {
        if (key !== 'init') {
            object[key] = options[key];
        }
    }
    return object;
}