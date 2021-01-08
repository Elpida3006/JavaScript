function sumTown(array) {
    let townPopulation = {};
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            if (townPopulation[array[i - 1]]) {
                townPopulation[array[i - 1]] += Number(array[i]);
            } else {
                townPopulation[array[i - 1]] = Number(array[i]);
            }
        }
    }
    return JSON.stringify(townPopulation);
}

console.log(sumTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));