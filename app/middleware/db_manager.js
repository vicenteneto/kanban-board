module.exports = function () {
    return require('mongoose').connect('mongodb://localhost/kanban-board');
};
