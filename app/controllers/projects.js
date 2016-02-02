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
        show: function (req, res) {
            res.render('project/detail');
        }
    };
};
