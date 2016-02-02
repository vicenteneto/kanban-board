module.exports = function (app) {
    var User = app.models.user;
    var Project = app.models.project;

    return {
        create: function (req, res) {
            User.create(req.body.user, function (err, user) {
                var message = 'User created successfully!';

                if (err) {
                    message = 'Error creating user!';
                }

                req.session.hasError = err;
                req.session.message = message;

                res.redirect('/');
            });
        },
        update: function (req, res) {
            var _id = req.session.user._id;

            User.findById(_id, function (err, user) {
                user.name = req.body.user.name;
                user.email = req.body.user.email;
                user.login = req.body.user.login;

                user.save(function () {
                    req.session.user = user;

                    req.session.message = "User updated successfully!";
                    res.redirect('/home');
                });
            });
        },
        delete: function (req, res) {
            var _id = req.session.user._id;

            User.findById(_id, function (err, user) {

                for (var i = 0; i < user.projects.length; i++) {
                    User.find({projects: user.projects[i]}, function (err, users) {
                        if (!err && users.length == 1) {
                            Project.findByIdAndRemove(user.projects[i]);
                        }
                    });
                }

                User.findByIdAndRemove(_id, function (err, user) {
                    req.session.message = "Your account has been successfully deleted!";
                    res.redirect('/api/logout');
                });
            });
        }
    };
};
