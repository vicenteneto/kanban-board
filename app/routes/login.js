module.exports = function (app) {
    var loginController = app.controllers.login;

    app.post('/api/login', loginController.login);
    app.get('/api/logout', loginController.logout);

    app.get('/login', loginController.index);
};
