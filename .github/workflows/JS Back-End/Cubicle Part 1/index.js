const express = require('express');
const app = express();

const config = require('./config/config');



require('./config/express')(app);
const routes = require('./routes');

app.use(routes);

app.listen(config.port, () => console.log(`Listening on port ${config.port}! Now its up to you...`));