const express = require('express');
const router = express.Router();

const homeController = require('./public/controllers/HomeController')
const CommentsController = require('./public/controllers/CommentsController')
const ErrorController = require('./public/controllers/ErrorController')

router.get('/', homeController.renderPage);
router.get('/comments', CommentsController.renderPage);
router.get('*', ErrorController.renderPage);

module.exports = router;