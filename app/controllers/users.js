module.exports = function (app) {
    var User = app.models.user;

    return {
        create: function (req, res) {
            User.create(req.body.user, function (err, user) {
                res.redirect('/');
            });
        }
    };
};
