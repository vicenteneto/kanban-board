module.exports = function (app) {
    var Schema = require('mongoose').Schema;

    var user = Schema({
        name: {type: String, minlength: 3, maxlength: 100, required: true},
        email: {
            type: String,
            match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            minlength: 3,
            maxlength: 50,
            lowercase: true,
            required: true,
            index: {unique: true}
        },
        login: {type: String, minlength: 3, maxlength: 10, lowercase: true, required: true, index: {unique: true}},
        password: {type: String, minlength: 3, maxlength: 10, required: true},
        projects: [{type: Schema.Types.ObjectId, ref: 'projects'}]
    });

    return app.middleware.db_manager.model('users', user);
};
