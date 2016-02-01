module.exports = function (app) {
    var sessionManager = app.middleware.session_manager;
    var projectsController = app.controllers.projects;

    app.post('/project', sessionManager.requireLogin, projectsController.create);
    app.put('/project/:id', sessionManager.requireLogin, projectsController.update);
    app.delete('/project/:id', sessionManager.requireLogin, projectsController.delete);
};
