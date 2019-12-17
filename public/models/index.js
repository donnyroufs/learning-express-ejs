class PageModel {
    constructor(title) {
        this.title = title;
        this.state = [];
    }

    onGetTitle() {
        return this.title;
    }
}

module.exports = PageModel;