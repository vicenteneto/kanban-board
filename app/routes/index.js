module.exports = function (app) {
    var indexController = app.controllers.index;

    app.get('/', indexController.index);
};
