!function () {
    var view = document.querySelector('div.message');
    var model={
        init:function(){
            AV.init({ appId: 'QFb3hYQd1VvBH9M9uCoGke6z-gzGzoHsz', appKey: 'EWAOUNJ7OY4wWClBgIa7b8oM' });
        },
        fetch:function(){//拉取数据库留言
            var query = new AV.Query('Message');
            return query.find();
        },
        save:function(name,content){//存储留言到数据库
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({
                name: name,
                content: content
            })
        }
    }
    var controller = {
        view: null,
        model:null,
        messageList: null,
        messageForm: null,
        init: function (view, model) {
            this.view = view;
            this.model=model;
            this.messageList = view.querySelector('ol.messageList');
            this.messageForm = view.querySelector('form');
            this.model.init();
            this.loadMessags();
            this.bindEvent();
        },
        loadMessags: function () {
            this.model.fetch().then((message) => {
                let array = message.map((item) => item.attributes);
                array.forEach((item) => {
                    let li = document.createElement("li");
                    li.innerText = `${item.name}:${item.content}`;
                    this.messageList.appendChild(li);
                })
            }, function (error) {
                console.log('error');
            });
        },
        saveMessage: function () {
            var name = this.messageForm.querySelector('input[name=name]').value;
            var content = this.messageForm.querySelector('input[name=content]').value;
            this.model.save(name,content).then((object) => {
                let li = document.createElement("li");               
                li.innerText = `${object.attributes.name}:${object.attributes.content}`;
                this.messageList.appendChild(li);
                this.messageForm.querySelector('input[name=content]').value = '';
            }, function () {
                console.log('提交失败，请重试');
            })
        },
        bindEvent: function () {
            this.messageForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.saveMessage();
            });
        }
    }
    controller.init(view,model);
}.call();
