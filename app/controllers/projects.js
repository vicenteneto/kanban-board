module.exports = function (app) {
    var User = app.models.user;
    var Project = app.models.project;

    return {
        create: function (req, res) {
            Project.create(req.body.project, function (err, project) {
                User.findById(req.session.user._id, function (err, user) {
                    user.projects.push(project._id);

                    user.save(function (err) {
                        var message = 'Project created successfully!';

                        if (err) {
                            message = 'Error creating project!';
                        }

                        req.session.hasError = err;
                        req.session.message = message;

                        res.redirect('/home');
                    });
                });
            });
        },
        list: function (req, res) {

        }
    };
};
