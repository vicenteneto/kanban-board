module.exports = function (app) {
    return {
        index: function (req, res) {
            res.render('home/index', {title: 'Home'});
        }
    };
};
