const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const saltRounds = config.saltRounds;

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        maxlength: 60,
        minlength: 3
    }
});
userSchema.methods.comparePasswords = function(providedPassword) {
    //callback ili Promise, zashoto e asinhronna operaciqta
    return new Promise((resolve, reject) => {
        bcrypt.compare(providedPassword, this.password, function(err, result) {
            if (err) { reject(err); return; }
            resolve(result);
            // result vryshta true /false
        });
    });
};

userSchema.pre('save', function(done) {

    const User = this;

    if (!User.isModified('password')) {
        done();
        return;
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) { done(err); return; }
        //tuk e s callback
        bcrypt.hash(User.password, salt, (err, hash) => {
            if (err) { done(err); return; }
            User.password = hash;
            //ako potrebitelq e nov, ili e smenil parolata, da ni q heshira
            done();
        });
    });
    console.log(User.password);
});
module.exports = mongoose.model('User', userSchema);