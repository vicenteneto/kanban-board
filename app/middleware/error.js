module.exports = function () {
    return {
        notFound: function (req, res) {
            res.status(404);
            res.render('not-found');
        },
        serverError: function (err, req, res) {
            res.status(500);
            res.render('server-error', {error: err});
        }
    };
};
