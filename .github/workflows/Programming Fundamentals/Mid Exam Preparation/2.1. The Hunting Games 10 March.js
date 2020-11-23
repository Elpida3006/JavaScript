function huntingGames(data) {

    let days = Number(data.shift());
    let count_players = Number(data.shift());
    let group_energy = Number(data.shift());
    let water_day_for_person = Number(data.shift());
    let food_day_person = Number(data.shift());

    let all_water = (days * count_players * water_day_for_person)
    let food = (days * count_players * food_day_person);


    let isReady = true;


    for (let i = 1; i <= days; i++) {

        let energy_lost = Number(data.shift());

        group_energy -= (energy_lost);

        if (group_energy <= 0) {
            isReady = false;
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${all_water.toFixed(2)} water.`);
            return;
        }
        if (i % 2 === 0) {
            group_energy *= 1.05;
            all_water *= 0.7

        }
        if (i % 3 === 0) {
            food -= food / count_players;
            group_energy *= 1.1;
        }

    }

    if (isReady) {
        console.log(`You are ready for the quest. You will be left with - ${group_energy.toFixed(2)} energy!`);
    }

}
// huntingGames([12,
//     6,
//     4430,
//     9.8,
//     5.5,
//     620.3,
//     840.2,
//     960.1,
//     220,
//     340,
//     674,
//     365,
//     345.5,
//     212,
//     412.12,
//     258,
//     496
// ])
huntingGames([10,
    7,
    5035.5,
    11.3,
    7.2,
    942.3,
    500.57,
    520.68,
    540.87,
    505.99,
    630.3,
    784.20,
    321.21,
    456.8,
    330,
]);

function huntingGames(data) {

    let days = Number(data.shift());
    let count_players = Number(data.shift());

    let group_energy = Number(data.shift());

    let water_day_for_person = Number(data.shift());
    let all_water = (count_players * water_day_for_person * days)
    let food_day_person = Number(data.shift());
    let food = (food_day_person * count_players * days);

    let isReady = true;

    for (let i = 1; i <= days; i++) {

        let energy_lost = Number(data.shift());
        group_energy -= energy_lost;

        if (group_energy <= 0) {
            isReady = false;
            console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${all_water.toFixed(2)} water.`);
            return;
        }
        if (i % 2 == 0) {
            all_water *= 0.70
            group_energy *= 1.05;
        }
        if (i % 3 == 0) {
            food -= food / count_players;
            group_energy *= 1.10;
        }

    }

    if (isReady) {
        console.log(`You are ready for the quest. You will be left with - ${group_energy.toFixed(2)} energy!`);
    }

}