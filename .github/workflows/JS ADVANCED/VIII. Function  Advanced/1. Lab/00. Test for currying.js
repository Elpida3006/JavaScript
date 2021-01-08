function getprop(prpName, obj) {
    // return obj[prpName] || null;
    return prpName || null;
}
//това е крайния резултат - връща value-то;

function getName(obj) {
    return getprop('name', obj)
}

function getUserName(arr) {
    return arr.map(getName);

}

// function curry(fn) {

// }
// const cGetPrp = curry(getprop);
// const getName = cGetPrp('name')

console.log(getUserName([{ name: 'Ivo', age: 33 }, { production: 'Test', age: 24 }]))