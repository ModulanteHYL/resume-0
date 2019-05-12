window.Model = function (dataBase) {
    let tableName = dataBase.tableName;
    return {
        init: function () {
            AV.init({ appId: 'QFb3hYQd1VvBH9M9uCoGke6z-gzGzoHsz', appKey: 'EWAOUNJ7OY4wWClBgIa7b8oM' });
        },
        fetch: function () {//拉取数据库留言
            var query = new AV.Query(tableName);
            return query.find();
        },
        save: function (name, content) {//存储留言到数据库
            var Message = AV.Object.extend(tableName);
            var message = new Message();
            return message.save({
                name: name,
                content: content
            })
        }
    }
}