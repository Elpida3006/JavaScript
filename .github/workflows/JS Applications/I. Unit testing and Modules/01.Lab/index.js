for (let index = 0; index < 10; index++) {
    console.log(index);

}
const mod = require('./mod')
console.log(mod.add(1, 3));

module.exports.sum = function(arr) {
    if (!Array.isArray(arr)) { return NaN }
    return arr.reduce((sumator, current) => sumator + Number(current), 0)
};