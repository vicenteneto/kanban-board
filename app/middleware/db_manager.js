module.exports = function (app) {
    return require('mongoose').connect('mongodb://localhost/kanban-board');
};
