const User = require('../models/User')

module.exports = {
    register(userdata) {
        if (userdata.password !== userdata.repeatPassword) { return }
        return new User(userdata).save()
    }
}