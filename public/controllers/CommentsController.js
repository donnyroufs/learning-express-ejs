const PageController = require('./PageController');
const CommentsModel = require('../models/CommentsModel');

class CommentsController extends PageController {
    constructor(title, model) {
        super(title, model);
    }
}

module.exports = new CommentsController('comments', CommentsModel);