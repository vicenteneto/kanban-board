module.exports = function (app) {
    var projectsController = app.controllers.projects;

    app.post('/user/:login/project', projectsController.create);
    app.get('/user/:login/projects', projectsController.list);
};
