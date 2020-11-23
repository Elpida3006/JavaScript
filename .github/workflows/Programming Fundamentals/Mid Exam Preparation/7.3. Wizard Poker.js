function wizardPoker(array) {
    let card = array.shift().split(':')

    let newDek = []

    function add(cardName) {
        if (card.includes(cardName)) {
            newDek.push(cardName)
        } else {
            console.log(`Card not found.`);
        }
    }

    function insert(cardName, index) {
        index = Number(index);
        if (card.includes(cardName) && newDek[index] !== undefined) {
            newDek.splice(index, 0, cardName)
        } else {
            console.log(`Error!`);
        }
    }

    function remove(cardName) {
        if (newDek.includes(cardName)) {
            newDek.splice(newDek.indexOf(cardName), 1)
        } else {
            console.log(`Card not found.`);
        }
    }

    function swap(cardName1, cardName2) {
        let card1index = newDek.indexOf(cardName1)
        let card2index = newDek.indexOf(cardName2)

        newDek[card2index] = cardName1;
        newDek[card1index] = cardName2;
    }

    function shuffleDeck() {
        newDek.reverse()
    }




    let commands = array.shift()

    while (commands !== 'Ready') {
        let command = commands.split(' ');

        switch (command[0]) {
            case 'Add':
                add(command[1]);
                break;
            case 'Insert':
                insert(command[1], command[2])
                break;
            case 'Remove':
                remove(command[1])
                break;
            case 'Swap':
                // let card1index = newDek.indexOf(command[1])
                // let card2index = newDek.indexOf(command[2])

                // newDek[card2index] = command[1];
                // newDek[card1index] = command[2];
                swap(command[1], command[2]);
                break;
            case 'Shuffle':
                if (command[1] == 'deck') {
                    shuffleDeck()
                }
                break;
        }





        commands = array.shift()
    }
    console.log(newDek.join(' '));
}
wizardPoker([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw 0',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
])
wizardPoker([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
])
wizardPoker([
    'Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Remove Pounce',
    'Add Pounce',
    'Remove Pounce',
    'Add Wrath',
    'Ready'
])

function solve(input) {
    let cards = input.shift().split(':');
    let deck = [];
    let commands = input.shift();


    while (commands != 'Ready') {
        let [command, cardName, index] = commands.split(' ');


        if (command === 'Add') {
            if (cards.includes(cardName)) {

                deck.push(cardName);
                // console.log(deck);

            } else {
                console.log('Card not found.');
            }
        } else if (command === 'Insert') {

            let insertCardName = cardName;
            let insertIndex = Number(index);
            if (cards.includes(insertCardName)) {
                deck.splice(insertIndex, 0, insertCardName);
                // console.log(deck);

            } else if (!cards.includes(insertCardName) || insertIndex === undefined) {
                console.log('Error!');
            }
        } else if (command === 'Remove') {
            if (deck.includes(cardName)) {
                let indexCardToRemove = deck.indexOf(cardName);
                deck.splice(indexCardToRemove, 1)
            } else {
                console.log('Card not found.');

            }
        } else if (command === 'Swap') {

            let cardNameOne = cardName;
            let cardNameTwo = index;
            let indexCardNameOne = deck.indexOf(cardNameOne);
            let indexCardNameTwo = deck.indexOf(cardNameTwo);
            deck.splice(indexCardNameTwo, 1, cardNameOne);
            deck.splice(indexCardNameOne, 1, cardNameTwo);
            // console.log(deck);

        } else if (command === 'Shuffle') {
            deck.reverse();
        }
        commands = input.shift();
    }
    console.log(deck.join(' '));

}

function solve(input) {
    let cards = input.shift().split(':');
    let deck = [];
    let commands = input.shift();


    while (commands != 'Ready') {
        let [command, cardName, index] = commands.split(' ');


        if (command === 'Add') {
            if (cards.includes(cardName)) {

                deck.push(cardName);


            } else {
                console.log('Card not found.');
            }
        } else if (command === 'Insert') {

            let insertCardName = cardName;
            let insertIndex = Number(index);
            if (cards.includes(insertCardName) && deck[insertIndex] !== undefined) {
                deck.splice(insertIndex, 0, insertCardName);
                // console.log(deck);

            } else {
                console.log('Error!');
            }
        } else if (command === 'Remove') {
            if (deck.includes(cardName)) {
                let indexCardToRemove = Number(deck.indexOf(cardName));
                deck.splice(indexCardToRemove, 1)
            } else {
                console.log('Card not found.');

            }
        } else if (command === 'Swap') {

            let cardNameOne = cardName;
            let cardNameTwo = index;
            let indexCardNameOne = deck.indexOf(cardNameOne);
            let indexCardNameTwo = deck.indexOf(cardNameTwo);
            deck.splice(indexCardNameTwo, 1, cardNameOne);
            deck.splice(indexCardNameOne, 1, cardNameTwo);
            // console.log(deck);

        } else if (command === 'Shuffle') {
            deck.reverse();
        }
        commands = input.shift();
    }
    console.log(deck.join(' '));

}