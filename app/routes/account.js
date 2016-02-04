module.exports = function (app) {
    var sessionManager = app.middleware.session_manager;
    var usersController = app.controllers.users;

    app.put('/api/account', sessionManager.requireLogin, usersController.update);
    app.delete('/api/account', sessionManager.requireLogin, usersController.delete);
};
