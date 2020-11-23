function theFinalQuest(array) {
    let collectionWord = array.shift().split(' ');

    function deletet(index) {
        let surchIndex = index + 1
        if (collectionWord[surchIndex] !== undefined) {
            collectionWord.splice(surchIndex, 1);
        }
    }

    function swap(word1, word2) {
        if (collectionWord.includes(word1) && collectionWord.includes(word2)) {
            let index1 = collectionWord.indexOf(word1)
            let index2 = collectionWord.indexOf(word2)
            collectionWord.splice(index1, 1, word2)
            collectionWord.splice(index2, 1, word1);

        }
    }

    function put(word, index) {
        let surchIndex = index - 1;
        if (collectionWord[surchIndex - 1] !== undefined) {
            collectionWord.splice(surchIndex, 0, word);
        }
    }

    function sort() {
        collectionWord.sort((a, b) => b.localeCompare(a));

    }

    function replace(word1, word2) {
        if (collectionWord.includes(word2)) {
            collectionWord.splice(collectionWord.indexOf(word2), 1, word1)
        }

    }


    let commands = array.shift();

    while (commands !== "Stop") {
        let command = commands.split(' ');

        switch (command[0]) {

            case 'Delete':
                deletet(+command[1]);
                break;
            case 'Swap':
                swap(command[1], command[2]);
                break;
            case 'Put':
                put(command[1], +command[2]);
                break;
            case 'Sort':
                sort();
            case 'Replace':
                replace(command[1], command[2]);
                break;

        }
        commands = array.shift();

    }
    console.log(collectionWord.join(' '));


}
theFinalQuest([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop'
]);
theFinalQuest([
    'This the my quest! final',
    'Put is 2',
    'Swap final quest!',
    'Delete 2',
    'Stop'
]);