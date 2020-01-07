exports.renderPage = (title, controller) => {
    return (req, res) => {
        res.render(`${title}.ejs`, {
            title,
            controller
        });
    }
};
