module.exports = function (app) {
    var usersController = app.controllers.users;

    app.post('/account', usersController.update);
};
