module.exports = function () {
    return {
        index: function (req, res) {
            if (req.session.user) {
                res.redirect('/home');
            } else {
                res.redirect('/login');
            }
        }
    };
};
