module.exports = function (app) {
    var User = app.models.user;

    return {
        index: function (req, res) {
            res.render('login/index');
        },
        login: function (req, res) {
            var user = req.body.user;
            var query = {login: user.login, password: user.password};

            User.findOne(query)
                .select('login password')
                .exec(function (error, user) {
                    if (user) {
                        req.session.user = user;
                        res.redirect('/home');
                    } else {
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
