const PageController = require('./PageController');

class HomeController extends PageController {
    constructor(title, model) {
        super(title, model);
    }
}

module.exports = new HomeController('index', []);