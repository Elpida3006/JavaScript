const express = require('express');
const app = express();

const config = require('./config/config');



require('./config/express')(app);
const routes = require('./routes');

app.use(routes);

const dbConnectionPromise = require('./config/dbConnection')(config.dbConnectionString);

dbConnectionPromise.then(() => {
        console.log(`db in use`);
        app.listen(config.port, () => console.log(`Listening on port ${config.port}! Now its up to you...`));
    })
    .catch((err) => { console.log(`error connection to database`) });

// app.listen(config.port, () => console.log(`Listening on port ${config.port}! Now its up to you...`));