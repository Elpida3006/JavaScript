function froggy(array) {

    let nameList = array.shift().split(' ')

    function join(name) {
        nameList.push(name)
    }

    function jump(name, index) {
        let neededIndex = Number(index)
        if (nameList[neededIndex] !== undefined) {
            nameList.splice(neededIndex, 0, name)
        }
    }

    function dive(index) {
        let neededIndex = Number(index)
        if (nameList[neededIndex] !== undefined) {
            nameList.splice(neededIndex, 1)

        }
    }

    function first(count) {
        let endIndex = Number(count)
        let froggyFisrt = nameList.slice(0, endIndex);
        console.log(froggyFisrt.join(' '));
    }

    function last(count) {
        let startIndex = nameList.length - Number(count);

        let froggyLast = nameList.slice(startIndex)
        console.log(froggyLast.join(' '));
    }

    function printNormal() {
        console.log(`Frogs: ${nameList.join(' ')}`);
        return;
    }

    function printReversed() {
        console.log(`Frogs: ${nameList.reverse().join(' ')}`);
        return;
    }

    let commands = array.length;
    for (let i = 1; i <= commands; i++) {
        let command = array.shift().split(' ');

        switch (command[0]) {
            case 'Join':
                join(command[1]);
                break;
            case 'Jump':

                jump(command[1], command[2]);
                break;
            case 'Dive':
                dive(command[1]);
                break;
            case 'First':
                first(command[1]);
                break;
            case 'Last':
                last(command[1]);
                break;
            case 'Print':
                if (command[1] == 'Normal') {
                    printNormal()
                } else if (command[1] == 'Reversed') {
                    printReversed();
                };
                break;
        }
    }

}

// froggy([
//     'Blake Muggy Kishko',
//     'Join Kvachko',
//     'Dive 0',
//     'First 10',
//     'Print Reversed'
// ]);
froggy([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
])