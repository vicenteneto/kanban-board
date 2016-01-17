module.exports = function (app) {
    var loginController = {
        index: function (req, res) {
            res.render('login/index');
        }
    };

    return loginController;
};