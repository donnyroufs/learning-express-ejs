const PageModel = require('../models/index');

class HomeModel extends PageModel {
    constructor(title) {
        super(title);
    }
};

module.exports = new HomeModel('index');