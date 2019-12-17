const PageController = require('./index');
const HomeModel = require('../../models/HomeModel');

class HomeController extends PageController {
    constructor(title, model) {
        super(title, model);
    }

    getTitle() {
        this.model.onGetTitle();
    }
}

module.exports = new HomeController('index', HomeModel);