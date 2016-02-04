module.exports = function (app) {
    var User = app.models.user;
    var Project = app.models.project;

    return {
        create: function (req, res) {
            Project.create(req.body.project, function (err, project) {
                var message;

                if (err) {
                    req.session.hasError = err;
                    message = 'Error creating project!';

                    res.redirect('/home');
                } else {
                    User.findById(req.session.user._id, function (err, user) {
                        user.projects.push(project._id);
                        user.save(function () {
                            message = 'Project created successfully!';

                            req.session.hasError = err;
                            req.session.message = message;

                            res.redirect('/home');
                        });
                    });
                }
            });
        },
        read: function (req, res) {
            var _id = req.params.id;

            Project.findById(_id, function (err, project) {
                req.session.project = project;

                res.redirect('/project/detail');
            });
        },
        update: function (req, res) {
            var _id = req.params.id;

            Project.findById(_id, function (err, project) {
                project.name = req.body.project.name;

                project.save(function () {
                    res.redirect('/home');
                });
            });
        },
        delete: function (req, res) {
            User.findById(req.session.user._id, function (err, user) {
                var _id = req.params.id;

                var index = user.projects.indexOf(_id);
                if (index !== -1) {
                    user.projects.splice(index, 1);
                }

                user.save(function () {
                    Project.findById(_id, function (err, project) {
                        project.name = req.body.project.name;

                        project.save(function () {
                            res.redirect('/home');
                        });
                    });
                });
            });
        },
        addCollaborator: function (req, res) {
            User.findOne({login: req.body.user.login}, function (err, user) {
                var message;

                console.log(user);
                if (user === null) {
                    req.session.hasError = true;
                    message = 'Error adding collaborator!';
                } else {
                    message = 'Collaborator added successfully!';
                }

                req.session.message = message;

                res.redirect('/project/detail');
            });
        },
        show: function (req, res) {
            var project = req.session.project;
            var members = req.session.members;
            var hasError = req.session.hasError;
            var message = req.session.message;

            res.render('project/detail', {project: project, members: [], hasError: hasError, message: message});
        }
    };
};
