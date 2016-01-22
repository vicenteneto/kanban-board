module.exports = function (app) {
    var Project = app.models.project;
    var User = app.models.user;

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
                        user.save();

                        message = 'Project created successfully!';

                        req.session.hasError = err;
                        req.session.message = message;

                        res.redirect('/home');
                    });
                }
            });
        }
    };
};
