const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public/views/');
app.set(express.static('public'));

app.use('/', require('./routes.js'));

app.listen(3000, () => console.log('server running'));