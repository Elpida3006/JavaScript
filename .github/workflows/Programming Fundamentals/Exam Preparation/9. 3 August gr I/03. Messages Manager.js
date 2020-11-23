function messegesManager(stringOfArray) {
    let capacity = Number(stringOfArray.shift())
    let users = {}
    let countUsers = 0;

    function added(userName, sent, received) {
        sent = Number(sent)
        received = Number(received)
        if (!users[userName]) {
            users[userName] = { sent: sent, received: received }
            countUsers++
        }
    }

    function messages(sender, receiver) {
        if (users[sender] && users[receiver]) {
            users[sender].sent += 1
            if (users[sender].sent + users[sender].received >= capacity) {
                delete users[sender];
                countUsers--
                console.log(`${sender} reached the capacity!`)
            }
            users[receiver].received += 1;
            if (users[receiver].sent + users[receiver].received >= capacity) {
                delete users[receiver];
                countUsers--
                console.log(`${receiver} reached the capacity!`)
            }
        }
    }

    function empty(userName) {
        if (userName == 'All') {
            users = {}
            countUsers = 0;
            return;
        }
        if (users[userName]) {
            delete users[userName];
            countUsers--
        }
    }

    let commands = stringOfArray.shift()
    while (commands !== 'Statistics') {
        let command = commands.split('=')

        switch (command[0]) {
            case 'Add':
                added(command[1], command[2], command[3]);
                break;
            case 'Message':
                messages(command[1], command[2], command[3]);
                break;
            case 'Empty':
                empty(command[1]);
                break;

        }
        commands = stringOfArray.shift()
    }
    console.log(`Users count: ${countUsers}`);
    let sorted = Object.entries(users).sort((a, b) => {
        if (a[1].received !== b[1].received) {
            return b[1].received - a[1].received
        } else {
            return a[0].localeCompare(b[0])
        }
    });

    for (let kvp of sorted) {
        let sum = Number(kvp[1].received) + Number(kvp[1].sent)
        console.log(`${kvp[0]} - ${sum}`);
    }

}
messegesManager([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
])
messegesManager([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
])
messegesManager([
    '12',
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
])