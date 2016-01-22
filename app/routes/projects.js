module.exports = function (app) {
    var authenticator = app.middleware.authenticator;
    var projectsController = app.controllers.projects;

    app.post('/project', authenticator.authenticate, projectsController.create);
};
