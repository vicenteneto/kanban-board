module.exports = function (app) {
    var User = app.models.user;

    return {
        create: function (req, res) {
            User.create(req.body.user, function (err, user) {
                var message = 'User created successfully!';

                if (err) {
                    messagusere = 'Error creating user!';
                }

                req.session.hasError = err;
                req.session.message = message;

                res.redirect('/');
            });
        },
        update: function (req, res) {
            var _id = req.session.user._id;

            User.findById(_id, function (error, user) {
                user.name = req.body.user.name;
                user.email = req.body.user.email;
                user.login = req.body.user.login;

                user.save(function () {
                    req.session.user = user;

                    req.session.message = "User updated successfully!";
                    res.redirect('/home');
                });
            });
        }
    };
};
