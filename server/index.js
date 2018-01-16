const express = require('express');
const bodyParser = require('body-parser');
const { logger } = require('./util')

const app = express();

// Middleware
app.use(logger);
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

let port = process.env.port || 3000;
app.listen(port, () => console.log(`Now listening on ${port}`));