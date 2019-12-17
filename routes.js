const express = require('express');
const router = express.Router();

const homeController = require('./public/controllers/pages/HomeController')

router.get('/', homeController.renderPage);

module.exports = router;