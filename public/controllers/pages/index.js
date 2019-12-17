class PageController {
    constructor(title, model) {
        this.title = title;
        this.model = model;
    }

    renderPage = (req, res) => {
        res.render(`${this.title}.ejs`, {
            controller: this,
        });
    }
}

module.exports = PageController;