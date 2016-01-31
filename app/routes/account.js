module.exports = function (app) {
    var sessionManager = app.middleware.session_manager;
    var usersController = app.controllers.users;

    app.post('/account', sessionManager.requireLogin, usersController.update);
};
