function toJSON(array) {
    array.shift();
    register = [];
    for (const line of array) {
        let [town, latitude, longitude] = line.split('|').map(x => x.trim()).filter(x => x !== '');
        latitude = Number(latitude);
        longitude = Number(longitude);
        register.push({ Town: town, Latitude: Number(latitude.toFixed(2)), Longitude: Number(longitude.toFixed(2)) });
    }
    return JSON.stringify(register);
}

console.log(toJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));