module.exports = function (app) {
    var usersController = app.controllers.users;

    app.post('/user', usersController.create);
};
