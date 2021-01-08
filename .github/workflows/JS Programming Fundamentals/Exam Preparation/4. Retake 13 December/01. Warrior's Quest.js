function warriorSQuests(arrayOfstring) {
    let warriorsCode = arrayOfstring.shift()

    let commands = arrayOfstring.shift()
    while (commands !== 'For Azeroth') {
        let command = commands.split(' ');

        switch (command[0]) {
            case 'GladiatorStance':
                gladiatorStance();
                break;
            case 'DefensiveStance':
                defensiveStance();
                break;
            case 'Dispel':
                dispel(command[1], command[2]);
                break;
            case 'Target':
                if (command[1] == 'Remove') {
                    targetR(command[2]);
                } else if (command[1] == 'Change') {
                    targetC(command[2], command[3]);
                } else {
                    console.log(`Command doesn't exist!`);
                }

                break;
            default:
                console.log(`Command doesn't exist!`);

        }
        commands = arrayOfstring.shift()
    }

    function targetC(substring, secondSubstring) {
        while (warriorsCode.indexOf(substring) > -1) {
            warriorsCode = warriorsCode.replace(substring, secondSubstring)

        }
        console.log(warriorsCode);
    }

    function targetR(substrin) {
        if (warriorsCode.indexOf(substrin) > -1) {
            let index = warriorsCode.indexOf(substrin)

            let firstPart = warriorsCode.substring(0, index)
            let secPart = warriorsCode.substring(index, index + substrin.length)
            let lastPart = warriorsCode.substring(index + substrin.length);
            warriorsCode = firstPart + lastPart;
            console.log(warriorsCode);
        } else {
            console.log(`Command doesn't exist!`);
        }
    }

    function dispel(index, letter) {
        if (warriorsCode[index] == undefined) {
            console.log('Dispel too weak.');
        } else {
            warriorsCode = warriorsCode.replace(warriorsCode[index], letter)
            console.log('Success!');

        }
    }

    function defensiveStance() {
        let code = ""
        let nondigit = ' A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'
        for (i = 0; i < warriorsCode.length; i++) {
            let el = warriorsCode[i];
            if (nondigit.includes(el)) {
                el = el.toLowerCase()
                code += el
            } else {
                code += el
            }
        }
        warriorsCode = code
        console.log(warriorsCode);
    }

    function gladiatorStance() {
        let code = ""
        let nondigit = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'
        for (i = 0; i < warriorsCode.length; i++) {
            let el = warriorsCode[i];
            if (nondigit.includes(el)) {
                el = el.toUpperCase()
                code += el
            } else {
                code += el
            }
        }
        warriorsCode = code
        console.log(warriorsCode);
    }



}
// warriorSQuests([
//     'fr1c710n',
//     'GladiatorStance',
//     'Dispel 2 I',
//     'Dispel 4 T',
//     'Dispel 6 O',
//     'Dispel 5 I',
//     'Dispel 10 I',
//     'Target Change RICTION riction',
//     'For Azeroth'
// ])
warriorSQuests([
    'DYN4MICNIC',
    'Target Remove NIC',
    'Dispel 3 A',
    'DefensiveStance',
    'Target Change d D',
    'target change D d',
    'For Azeroth'
])