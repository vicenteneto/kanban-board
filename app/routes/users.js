module.exports = function (app) {
    var usersController = app.controllers.users;

    app.post('/api/user', usersController.create);
};
