const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3003,
        dbConnectionString: 'mongodb://localhost:27017/cubicle'

    },
    production: {
        port: 80,
    }
}

module.exports = config[env];