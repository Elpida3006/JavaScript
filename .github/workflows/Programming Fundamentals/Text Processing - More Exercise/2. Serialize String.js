function serializeString(input) {

    let string = input.shift()
    let object = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (object[char]) {

            object[char] += `/${i}`
        } else {
            object[char] = `${i}`;
        }

    }

    Object.entries(object).forEach(kvp => {
        console.log(`${kvp[0]}:${kvp[1]}`);
    });



}
serializeString(['avjavamsdmcalsdm'])