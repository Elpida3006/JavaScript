function contactList(array) {


    let nameList = array.shift().split(' ')




    function add(contact, index) {
        let neededIndex = Number(index)
        if (!nameList.includes(contact)) {
            nameList.push(contact)
        } else {
            if (nameList[neededIndex] !== undefined) {
                nameList.splice(neededIndex, 0, contact)
            }
        }
    }

    function remove(index) {
        let neededIndex = Number(index)
        if (nameList[neededIndex] !== undefined) {
            nameList.splice(neededIndex, 1)
        }
    }

    function exported(startIndex, count) {
        let finishedIndex = Number(startIndex) + Number(count);
        //!!!!!!!!!!!!!!!
        let exportetList = []
            // if (nameList[count] == undefined) {
            //     exportetList = nameList.slice(startIndex);
            // } else {
            //     exportetList = nameList.slice(startIndex, finishedIndex)
            // }
        exportetList = nameList.slice(startIndex, finishedIndex)
        console.log(exportetList.join(' '));


    }

    function printNormal() {
        console.log(`Contacts: ${nameList.join(' ')}`);
        return;
    }

    function printReversed() {
        console.log(`Contacts: ${nameList.reverse().join(' ')}`);
        return;
    }

    let commands = array.length;
    for (let i = 1; i <= commands; i++) {
        let command = array.shift().split(' ');

        switch (command[0]) {
            case 'Add':

                add(command[1], command[2]);
                break;
            case 'Remove':
                remove(command[1]);
                break;
            case 'Export':
                exported(command[1], command[2]);
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
// contactList([
//     'Alisson Bellamy Candace Tristan',
//     'Remove 3',
//     'Add Bellamy 2',
//     'Print Normal'
// ])
contactList([
    'Zayn Katy Ariana Avril Nick Mikolas',
    'Remove 3',
    'Add Jacob 0',
    'Export 0 3',
    'Export 3 8',
    'Print Reversed'
])