module.exports = function (app) {
    var authenticator = app.middleware.authenticator;
    var homeController = app.controllers.home;

    app.get('/home', authenticator.authenticate, homeController.index);
};
