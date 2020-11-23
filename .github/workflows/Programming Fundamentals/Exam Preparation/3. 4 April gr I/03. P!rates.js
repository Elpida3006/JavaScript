function solutpiratesion(input) {

    let sailIndex = input.indexOf('Sail');
    let endIndex = input.indexOf('End');
    let targetCities = input.slice(0, sailIndex);

    let map = {};

    for (let town of targetCities) {
        [townName, population, gold] = town.split('||');

        if (!map[townName]) {
            map[townName] = {
                population: 0,
                gold: 0,
                isVisibleOnTheMap: true
            };
        }

        map[townName].population += Number(population);
        map[townName].gold += Number(gold);
    }

    let actions = input.slice(sailIndex + 1, endIndex);

    for (let action of actions) {
        let info = action.split('=>');
        let command = info[0];
        let town = info[1];

        if (command === 'Plunder') {

            let killedPeople = Number(info[2]);
            let stealedGold = Number(info[3]);

            if (map[town]) {
                map[town].population -= killedPeople;
                map[town].gold -= stealedGold;

                console.log(`${town} plundered! ${stealedGold} gold stolen, ${killedPeople} citizens killed.`);

                if (map[town].population <= 0 || map[town].gold <= 0) {
                    map[town].isVisibleOnTheMap = false;
                    console.log(`${town} has been wiped off the map!`)
                }
            }


        } else if (command === 'Prosper') {

            let increasedGold = Number(info[2]);

            if (increasedGold >= 0) {
                map[town].gold += increasedGold;
                console.log(`${increasedGold} gold added to the city treasury. ${town} now has ${map[town].gold} gold.`);
            } else {
                console.log('Gold added cannot be a negative number!');
            }

        }
    }

    let visiblesCitiesOnTheMap = Object.keys(map)
        .filter((townName) => map[townName].isVisibleOnTheMap === true);


    if (visiblesCitiesOnTheMap.length > 0) {

        console.log(`Ahoy, Captain! There are ${visiblesCitiesOnTheMap.length} wealthy settlements to go to:`);

        let sortedCities = visiblesCitiesOnTheMap.sort((a, b) => (map[b].gold - map[a].gold) || (a.localeCompare(b)));

        for (let town of sortedCities) {
            let population = map[town].population;
            let gold = map[town].gold;
            console.log(`${town} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }

    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

}
pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])