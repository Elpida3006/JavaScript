const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3004,
        dbConnectionString: 'mongodb://localhost:27017/cubicle'

    },
    production: {
        port: 80,
        dbConnectionString: 'mongo "mongodb+srv://cluster0.rrksq.mongodb.net/MyBB" --username nadq'
    }
}

module.exports = config[env];