module.exports = function (app) {
    var Schema = require('mongoose').Schema;

    var project = Schema({
        name: {type: String, minlength: 3, maxlength: 100, required: true}
    });

    return app.middleware.db_manager.model('projects', project);
};
