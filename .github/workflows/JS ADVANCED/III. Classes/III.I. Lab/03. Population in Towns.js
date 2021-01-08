function population(array) {
    let populationReg = {};
    for (const line of array) {
        let [town, population] = line.split(' <-> ');
        if (populationReg[town]) {
            populationReg[town] += Number(population);
        } else {
            populationReg[town] = Number(population);
        }
    }

    for (const kvp of Object.entries(populationReg)) {
        console.log(`${kvp[0]} : ${kvp[1]}`);
    }
}
population(['Sofia <-> 1200000',
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])