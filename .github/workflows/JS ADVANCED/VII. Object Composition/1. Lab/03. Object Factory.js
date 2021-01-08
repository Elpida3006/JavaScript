solve = (input) => {
    let propList = JSON.parse(input);

    let result = propList.reduce((acc, x) => ({...acc, ...x }), {});
    // let result = propList.reduce((a, x) => Object.assign({}, a, x), {});

    return result;
}

function objectFactory(input) {
    input = JSON.parse(input);
    let newOBj = {};

    for (let prop of input) {
        for (const [key, value] of Object.entries(prop)) {
            newOBj[key] = value;
        }
    }
    return newOBj;
}