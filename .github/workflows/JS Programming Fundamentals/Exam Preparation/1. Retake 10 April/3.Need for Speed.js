function needforSpeed(string) {
    // 1. inputs
    let carsCount = Number(string.shift())
    let cars = {};
    //podrevdame kolite s infoto im w obekta cars

    for (let i = 0; i < carsCount; i++) {
        let [carModel, milage, fuel] = string.shift().split('|')

        milage = Number(milage);
        fuel = Number(fuel)

        cars[carModel] = {
            milage: milage,
            fuel: fuel
        };

    }

    function drive(carModel, distanse, fuels) {

        distanse = Number(distanse)
        fuels = Number(fuels)

        if (cars[carModel].fuel > fuels) {
            cars[carModel].milage += distanse
            cars[carModel].fuel -= fuels
            console.log(`${carModel} driven for ${distanse} kilometers. ${fuels} liters of fuel consumed.`);

            if (cars[carModel].milage >= 100000) {
                delete cars[carModel]
                console.log(`Time to sell the ${carModel}!`);
            }
        } else {
            console.log('Not enough fuel to make that ride');
        }

    }

    function refuels(carModel, fuel) {

        fuel = Number(fuel)
        let oldFuel = cars[carModel].fuel;

        if (oldFuel + fuel >= 75) {
            cars[carModel].fuel = 75
            console.log(`${carModel} refueled with ${75 - oldFuel} liters`);
        } else {
            cars[carModel].fuel += fuel
            console.log(`${carModel} refueled with ${fuel} liters`);
        }

    }


    function revert(carModel, kilometers) {

        kilometers = Number(kilometers)
        if (cars[carModel].milage - kilometers < 10000) {
            cars[carModel].milage = 10000
        } else {
            cars[carModel].milage -= kilometers
            console.log(`${carModel} mileage decreased by ${kilometers} kilometers`);
        }

    }
    // 2. Execute commands
    let commands = string.shift()

    while (commands !== 'Stop') {
        let command = commands.split(' : ')

        switch (command[0]) {
            case 'Drive':
                drive(command[1], command[2], command[3]);
                break;
            case 'Refuel':
                refuels(command[1], command[2]);
                break;

            case 'Revert':
                revert(command[1], command[2]);
                break;

        }


        commands = string.shift()

    }

    // 3.sorting
    // right!!! niki
    // let carEntries = Object.entries(cars).sort((a, b) => {

    //     if (a[1].milage != b[1].milage) {
    //         return b[1].milage - a[1].milage;
    //     } else {
    //         return a[0].localeCompare(b[0]);
    //     }
    // });

    let carEntries = Object.entries(cars).sort((a, b) => {

        if (a[1].milage == b[1].milage) {
            return a[0].localeCompare(b[0]);
        } else {

            return b[1].milage - a[1].milage;
        }

    });
    // 4.Print result
    for (const kvp of carEntries) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].milage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }


}

needforSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop',
    'Revert : Audi A6 : 30000'
])

// function needforSpeed(input) {
//     // 1. inputs
//     let cars = {};

//     let carsCount = Number(input.shift());
//     for (let i = 0; i < carsCount; i++) {
//         let [name, mileage, fuel] = input.shift().split('|');
//         mileage = Number(mileage);
//         fuel = Number(fuel);

//         cars[name] = { mileage, fuel };
//     }

//     // 2. Execute commands
//     let commandLine = input.shift();
//     while (commandLine !== 'Stop') {
//         let [command, carName, firstArument, secondArgument] = commandLine.split(' : ')

//         switch (command) {
//             case 'Drive':
//                 {
//                     let distance = Number(firstArument);
//                     let fuel = Number(secondArgument);
//                     if (cars[carName].fuel >= fuel) {
//                         cars[carName].mileage += distance;
//                         cars[carName].fuel -= fuel;
//                         console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

//                         if (cars[carName].mileage >= 100000) {
//                             delete cars[carName];
//                             console.log(`Time to sell the ${carName}!`);
//                         }
//                     } else {
//                         console.log('Not enough fuel to make that ride');
//                     }
//                     break;
//                 }
//             case 'Refuel':
//                 {
//                     let fuel = Number(firstArument);
//                     let oldFuel = cars[carName].fuel;

//                     if (oldFuel + fuel > 75) {
//                         cars[carName].fuel = 75;
//                         console.log(`${carName} refueled with ${75 - oldFuel} liters`);
//                     } else {
//                         cars[carName].fuel += fuel;
//                         console.log(`${carName} refueled with ${fuel} liters`);
//                     }

//                     break;
//                 }
//             case 'Revert':
//                 {
//                     let kilometers = Number(firstArument);
//                     if (cars[carName].mileage - kilometers < 10000) {
//                         cars[carName].mileage = 10000;
//                     } else {
//                         cars[carName].mileage -= kilometers;
//                         console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
//                     }
//                     break;
//                 }
//         }


//         commandLine = input.shift()
//     }

//     // 3. Sorting
//     let carEntries = Object.entries(cars);

//     let sortedCarEntries = carEntries.sort((a, b) => {
//         if (b[1].mileage == a[1].mileage) {
//             return a[0].localeCompare(b[0]);
//         } else {
//             return b[1].mileage - a[1].mileage;
//         }
//     });

//     // 4. Prit results
//     for (const kvp of sortedCarEntries) {
//         console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
//     }
// }


function solve(input) {
    const nPlants = Number(input.shift());
    const plants = {};

    for (let i = 0; i < nPlants; i++) {
        const data = input.shift().split('<->');
        plants[data[0]] = { rarity: Number(data[1]), rating: [] };
    }

    function rate(plant, rating) {
        plants[plant].rating.push(rating);
    };

    function update(plant, newRarity) {
        plants[plant].rarity = newRarity;
    };

    function reset(plant) {
        plants[plant].rating = []
    };

    let data = input.shift();
    while (data != 'Exhibition') {
        let [command, plantNameRating] = data.split(': ');
        let [plant, rating] = plantNameRating.split(' - ');
        if (Object.keys(plants).includes(plant)) {
            if (command === 'Rate') {
                rate(plant, Number(rating));
            } else if (command === 'Update') {
                update(plant, Number(rating));
            } else if (command === 'Reset') {
                reset(plant);
            }
        } else {
            console.log('error');
        }

        data = input.shift();
    }

    for (let el in plants) {
        const length = plants[el].rating.length;
        plants[el].rating = plants[el].rating.reduce((acc, curVal) => {
            return acc + curVal;
        }, 0);
        if (plants[el].rating > 0) {
            plants[el].rating /= length
        }

    }

    const arrayOfPlants = Object.entries(plants);

    arrayOfPlants.sort((a, b) => b[1].rating - a[1].rating);
    arrayOfPlants.sort((a, b) => b[1].rarity - a[1].rarity);

    console.log('Plants for the exhibition:');
    for (let array of arrayOfPlants) {
        console.log(`- ${array[0]}; Rarity: ${array[1].rarity}; Rating: ${array[1].rating.toFixed(2)}`)
    }
};