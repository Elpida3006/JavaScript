function username(stringOfArray) {

    let username = stringOfArray.shift()


    let commands = stringOfArray.shift()
    while (commands !== 'Sign up') {
        let command = commands.split(' ');

        switch (command[0]) {
            case 'Case':
                if (command[1] == 'upper') {
                    caseUpper()
                } else if (command[1] == 'lower') {
                    caseLower();
                };
                break;
            case 'Reverse':
                reverses(command[1], command[2]);
                break;
            case 'Cut':
                cut(command[1]);
                break;
            case 'Replace':
                replaces(command[1]);
                break;
            case 'Check':
                cheked(command[1]);
                break;

        }
        commands = stringOfArray.shift()

    }

    function caseUpper() {
        let newusername = ""
        let letter = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'
        for (let el of username) {
            if (letter.includes(el)) {
                el = el.toUpperCase()
                newusername += el
            } else {
                newusername += el
            }
        }
        username = newusername;
        console.log(username);
    }

    function caseLower() {
        let newusername = ""
        let letter = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'
        for (let el of username) {
            if (letter.includes(el)) {
                el = el.toLowerCase()
                newusername += el
            } else {
                newusername += el
            }
        }

        username = newusername;
        console.log(username);
    }

    function reverses(startIndex, endIndex) {
        startIndex = Number(startIndex)
        endIndex = Number(endIndex)
        if (startIndex >= 0 && endIndex < username.length && endIndex > startIndex) {
            let string = username.substring(startIndex, endIndex + 1).split('').reverse().join('')
            console.log(string);

        }

    }

    function cut(substring) {
        if (username.indexOf(substring) < 0) {
            console.log(`The word ${username} doesn't contain ${substring}.`);
        } else {
            let startIn = username.indexOf(substring);
            let endIn = startIn + substring.length
                // let word = username.substring(startIn, endIn);
            let first = username.substring(0, startIn);
            let last = username.substring(endIn);
            username = first + last;
            console.log(username);
        }
    }

    function replaces(char) {
        while (username.indexOf(char) > -1) {
            username = username.replace(char, '*');
        }

        console.log(username);
    }

    function cheked(char) {
        if (!username.includes(char)) {
            console.log(`Your username must contain ${char}.`);
        } else {
            console.log(`Valid`);
        }
    }

}
username(['Pesho', 'Case lower', 'Cut ', 'Check @', 'Sign up']);
username(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up'])