function auto(array) {
    let cars = new Map();
    for (const line of array) {
        let [brand, model, produced] = line.split(' | ');
        if (!cars.has(brand)) {
            cars.set(brand, []);
        }
        let currentCars = cars.get(brand);
        let isCheck = true;
        for (const car of currentCars) {
            if (car.model === model) {
                car.produced += Number(produced);
                isCheck = false;
            }
        }
        if (isCheck) {
            currentCars.push({ model, produced: Number(produced) });
        }
        cars.set(brand, currentCars);
    }
    for (const [brand, carProduced] of cars) {
        // console.log(brand);
        for (const car of carProduced) {
            console.log(`###${car.model} -> ${car.produced}`);
        }
    }
}
auto(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10'
]);