const PageController = require('./index');
const HomeModel = require('../../models/HomeModel');

class HomeController extends PageController {
    constructor(title, model) {
        super(title, model);
    }

    getTitle() {
        const title = this.model.onGetTitle();
        return title;
    }
}

module.exports = new HomeController('index', HomeModel);