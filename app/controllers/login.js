module.exports = function (app) {
    var User = app.models.user;

    return {
        index: function (req, res) {
            var hasError = req.session.hasError;
            var message = req.session.message;

            req.session.hasError = null;
            req.session.message = null;

            res.render('login/index', {hasError: hasError, message: message});
        },
        login: function (req, res) {
            var user = req.body.user;
            var query = {login: user.login, password: user.password};

            User.findOne(query)
                .exec(function (err, user) {
                    if (user) {
                        req.session.user = user;
                        res.redirect('/home');
                    } else {
                        req.session.hasError = true;
                        req.session.message = 'Login and password do not match!';

                        res.redirect('/');
                    }
                });
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
};
