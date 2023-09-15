const express = require('express');
const routes = require('./routes');
const path = require('path')

require('../config/associations')

const app = express();
app.use(express.json());
app.use(routes);

app.set('views', path.join(__dirname, 'src/views'))

app.listen(3000);