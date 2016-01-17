module.exports = function (app) {
    var error = {
        // catch 404 and forward to error handler
        notFound: function (req, res, next) {
            res.status(404);
            res.render('not-found');
        },
        serverError: function (error, req, res, next) {
            res.status(500);
            res.render('server-error', {error: error});
        }
    };

    return error;
};
