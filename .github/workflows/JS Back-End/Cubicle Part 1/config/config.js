const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3002
    },
    production: {
        port: 80,
    }
}

module.exports = config[env];