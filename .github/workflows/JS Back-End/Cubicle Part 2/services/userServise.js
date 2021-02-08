const User = require('../models/User')


function postRegister(userdata) {
    console.log(userdata);
    if (userdata.password !== userdata.repeatPassword) { return }
    return User.create(userdata);
}

function postLogin(userdata) {

}
module.exports = {
    postRegister,
    postLogin
}