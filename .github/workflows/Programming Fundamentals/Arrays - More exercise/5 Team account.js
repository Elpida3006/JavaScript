function gameInstaller(array) {

    let account = array[0].split(' ');



    for (let i = 1; i < array.length; i++) {
        let text = array[i].split(' ');
        let command = text[0]
        let game = text[1];

        if (command === 'Install') {
            account.includes(game) ? account = account : account.push(game);
        } else if (command === 'Uninstall') {
            let index = account.indexOf(game)
            account.includes(game) ? account.splice(index, 1) : account = account;
        } else if (command === 'Update') {
            let index = account.indexOf(game)
            if (account.includes(game)) {
                account.splice(index, 1)
                account.push(game)
            }

        } else if (command === 'Expansion') {

            let expansion = game.split('-')
            let firstpartOfgame = expansion[0];

            if (account.includes(firstpartOfgame)) {

                let fullPartofGame = expansion.join(':');
                let index = account.indexOf(firstpartOfgame);
                account.splice(index + 1, 0, fullPartofGame);
            }

        } else if (command === 'Play!') {
            break;
        }



    }

    console.log(account.join(' '));





}


gameInstaller(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);