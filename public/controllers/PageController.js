class PageController {
    constructor(title, model) {
        this.title = title;
        this.model = model;
    }

    getTitle() {
        return this.title;
    }

    renderPage = (req, res) => {
        res.render(`${this.title}.ejs`, {
            controller: this,
        });
    }
}

module.exports = PageController;