module.exports = function (app) {
    var sessionManager = app.middleware.session_manager;
    var projectsController = app.controllers.projects;

    app.post('/api/project', sessionManager.requireLogin, projectsController.create);
    app.get('/api/project/:id', sessionManager.requireLogin, projectsController.read);
    app.put('/api/project/:id', sessionManager.requireLogin, projectsController.update);
    app.delete('/api/project/:id', sessionManager.requireLogin, projectsController.delete);
    app.post('/api/project/user', sessionManager.requireLogin, projectsController.addCollaborator);

    app.get('/project/detail', sessionManager.requireLogin, projectsController.show);
};
