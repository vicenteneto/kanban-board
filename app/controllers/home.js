module.exports = function (app) {
    var User = app.models.user;
    var Project = app.models.project;

    return {
        index: function (req, res) {
            var hasError = req.session.hasError;
            var message = req.session.message;

            req.session.hasError = null;
            req.session.message = null;

            User.findById(req.session.user._id, function (err, user) {
                Project.find({_id: {"$in": user.projects}}, function (err, userProjects) {
                    var user = req.session.user;

                    user.projects = userProjects;

                    res.render('home/index', {user: user, hasError: hasError, message: message});
                });
            });
        }
    };
};
