module.exports = function () {
    var error = {
        notFound: function (req, res) {
            res.status(404);
            res.render('not-found');
        },
        serverError: function (error, req, res) {
            res.status(500);
            res.render('server-error', {error: error});
        }
    };

    return error;
};
