function nikuldenMeals(stringOfArray) {


    let meals = {};

    let countUnlike = 0;

    function like(guestName, meal1) {
        if (!meals[guestName]) {
            meals[guestName] = []
            meals[guestName].push(meal1)
        }
        if (!meals[guestName].includes(meal1)) {
            meals[guestName].push(meal1)
        }
    }

    function unlike(guestName, meal1) {

        if (meals[guestName]) {
            if (meals[guestName].includes(meal1)) {
                //ремове меал1
                meals[guestName].splice(meals[guestName].indexOf(meal1), 1);
                countUnlike++
                console.log(`${guestName} doesn't like the ${meal1}.`);
            } else {
                console.log(`${guestName} doesn't have the ${meal1} in his/her collection.`);
            }
        } else {
            console.log(`${guestName} is not at the party.`);

        }
    }



    // 2. Execute commands
    let commands = stringOfArray.shift()

    while (commands !== 'Stop') {
        let command = commands.split('-')

        switch (command[0]) {
            case 'Like':
                like(command[1], command[2]);
                break;
            case 'Unlike':
                unlike(command[1], command[2]);
                break;

        }

        commands = stringOfArray.shift();

    }

    // 3.sorting

    let mealsEntries = Object.entries(meals).sort((a, b) => {
        if (b[1].length != a[1].length) {
            return b[1].length - a[1].length
        } else {
            return a[0].localeCompare(b[0])
        }


    });


    // 4.Print result

    for (const kvp of mealsEntries) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${countUnlike}`);






}
nikuldenMeals([
    'Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
])
nikuldenMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
])
nikuldenMeals([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
])