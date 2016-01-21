module.exports = function (app) {
    var User = app.models.user;

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
        }
    };
};
