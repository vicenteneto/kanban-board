module.exports = function (app) {
    var sessionManager = app.middleware.session_manager;
    var usersController = app.controllers.users;

    app.put('/account', sessionManager.requireLogin, usersController.update);
    app.delete('/account', sessionManager.requireLogin, usersController.delete);
};
