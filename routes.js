const express = require('express');
const router = express.Router();

const homeController = require('./public/controllers/HomeController')
const CommentsController = require('./public/controllers/CommentsController')
const ErrorController = require('./public/controllers/ErrorController')
const { renderPage } = require('./public/controllers/index');


router.get('/', homeController.renderPage);
router.get('/comments', CommentsController.renderPage);
router.get('/about', renderPage('about'));
router.get('*', ErrorController.renderPage);

module.exports = router;