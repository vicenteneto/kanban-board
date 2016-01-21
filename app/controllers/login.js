module.exports = function (app) {
    var User = app.models.user;

    return {
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
                        req.session.message = 'Wrong login or password!';

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
