module.exports = function (app) {
    return {
        index: function (req, res) {
            var hasError = req.session.hasError;
            var message = req.session.message;

            req.session.hasError = null;
            req.session.message = null;

            res.render('login/index', {hasError: hasError, message: message});
        }
    };
};
