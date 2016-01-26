var path = require('path');

var bodyParser = require('body-parser');
var consign = require('consign');
var cookieParser = require('cookie-parser');
var express = require('express');
var methodOverride = require('method-override');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());

app.use(session({
        secret: 'kanban-board',
        resave: false,
        saveUninitialized: false
    }
));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
    console.log('method-override');
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

app.use(express.static(path.join(__dirname, 'public')));

consign({cwd: 'app'})
    .include('middleware')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app);

app.use(app.middleware.error.notFound);
app.use(app.middleware.error.serverError);

module.exports = app;
