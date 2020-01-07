class PageController {
    constructor(title, model) {
        this.title = title;
        this.model = model;
    }

    getTitle() {
        return this.title;
    }
}

module.exports = PageController;