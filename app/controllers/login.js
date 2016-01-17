module.exports = function (app) {
    return {
        index: function (req, res) {
            res.render('login/index');
        },
        login: function (req, res) {
            var login = req.body.user.login;
            var password = req.body.user.password;

            if (login && password) {
                var user = req.body.user;

                req.session.user = user;

                res.redirect('/home');
            } else {
                res.redirect('/');
            }
        },
        logout: function(req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
};
