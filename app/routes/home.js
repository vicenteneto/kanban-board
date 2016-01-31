module.exports = function (app) {
    var sessionManager = app.middleware.session_manager;
    var homeController = app.controllers.home;

    app.get('/home', sessionManager.requireLogin, homeController.index);
};
