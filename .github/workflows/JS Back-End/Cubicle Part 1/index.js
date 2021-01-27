const express = require('express');
const app = express();

const config = require('./config/config');
const routes = require('./routes');


require('./config/express')(app);
require('./routes')(app);

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));