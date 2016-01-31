module.exports = function () {

    return {
        requireLogin: function (req, res, next) {
            if (!req.session.user) {
                res.redirect('/login');
            } else {
                next();
            }
        }
    }
};
