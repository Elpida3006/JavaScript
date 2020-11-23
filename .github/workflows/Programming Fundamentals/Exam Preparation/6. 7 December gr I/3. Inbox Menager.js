function inboxMenager(stringOfArray) {


    let user = {};

    let countUser = 0;

    function added(name) {
        if (!user[name]) {
            user[name] = []
            countUser++
        } else {
            console.log(`${name} is already registered`);
        }

    }

    function deletet(name) {

        if (user[name]) {

            delete user[name];
            countUser--
        } else {
            console.log(`${name} not found!`);

        }
    }

    function sent(name, email) {
        if (user[name]) {
            user[name].push(email)
        }
    }


    // 2. Execute commands
    let commands = stringOfArray.shift()

    while (commands !== 'Statistics') {
        let command = commands.split('->')

        switch (command[0]) {
            case 'Add':
                added(command[1]);
                break;
            case 'Delete':
                deletet(command[1]);
                break;
            case 'Send':
                sent(command[1], command[2]);
                break;

        }

        commands = stringOfArray.shift();

    }

    // 3.sorting

    let userEntries = Object.entries(user).sort((a, b) => {
        if (b[1].length != a[1].length) {
            return b[1].length - a[1].length
        } else {
            return a[0].localeCompare(b[0])
        }


    });


    // 4.Print result
    if (countUser < 0) {
        countUser = 0
    }
    console.log(`Users count: ${countUser}`);
    //60/100
    // for (const kvp of userEntries) {
    //     console.log(`${kvp[0]}`);
    //     console.log(` - ${kvp[1].join(' \n- ')}`);
    // }
    for (const kvp of userEntries) {
        console.log(`${kvp[0]}`);
        for (const message of kvp[1]) {
            console.log(` - ${message}`);
        }

    }







}
// inboxMenager([
//         'Add->Mike',
//         'Add->George',
//         'Send->George->Hello World',
//         'Send->George->Some random test mail',
//         'Send->Mike->Hello, do you want to meet up tomorrow?',
//         'Send->George->It would be a pleasure',
//         'Send->Mike->Another random test mail',
//         'Statistics'
//     ])
// inboxMenager([
//         'Add->Mike',
//         'Add->George',
//         'Send->George->Hello World',
//         'Send->George->Your loan is overdue',
//         'Add->Mike',
//         'Send->Mike->Hello, do you want to meet up tomorrow?',
//         'Delete->Peter',
//         "Send->George->I'm busy",
//         'Send->Mike->Another random test mail',
//         'Delete->George',
//         'Statistics'
//     ])
inboxMenager([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
])