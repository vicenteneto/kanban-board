module.exports = function (app) {
    var Project = app.models.project;

    return {
        create: function (req, res) {
            Project.create(req.body.project, function (err, project) {
                var message = 'Project created successfully!';

                if (err) {
                    message = 'Error creating project!';
                }

                req.session.hasError = err;
                req.session.message = message;

                res.redirect('/home');
            });
        }
    };
};
