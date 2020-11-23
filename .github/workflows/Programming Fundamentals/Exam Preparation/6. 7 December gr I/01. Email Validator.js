function emailValidator(stringArray) {

    let email = stringArray.shift()

    let commands = stringArray.shift()

    while (commands !== 'Complete') {
        let command = commands.split(' ')
        switch (command[0]) {
            case 'Make':
                if (command[1] == 'Upper') {
                    makeUpper()
                } else if (command[1] == 'Lower')
                    makeLower();
                break;
            case 'GetDomain':
                getDomein(command[1]);
                break;
            case 'GetUsername':
                getUsername(command[1]);
                break;

            case 'Replace':
                replaces(command[1]);
                break;
            case 'Encrypt':
                encrypt();
                break;
        }

        commands = stringArray.shift()
    }

    function makeUpper(commad) {
        let newEmail = ""
        let letter = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'
        for (let el of email) {
            if (letter.includes(el)) {
                el = el.toUpperCase()
                newEmail += el
            } else {
                newEmail += el
            }
        }

        email = newEmail;
        console.log(email);
    }

    function makeLower() {
        let newEmail = ""
        let letter = 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z'
        for (let el of email) {
            if (letter.includes(el)) {
                el = el.toLowerCase()
                newEmail += el
            } else {
                newEmail += el
            }
        }

        email = newEmail;
        console.log(email);
    }

    function getDomein(count) {
        count = Number(count)
        let domain = email.substring(email.length - count, email.length)
        console.log(domain);

    }

    function getUsername() {
        let endIndex = email.indexOf('@')
        if (endIndex == -1) {
            console.log(`The email ${email} doesn't contain the @ symbol.`);
        } else {

            let username = email.substring(0, endIndex);
            console.log(username);
        }
    }

    function replaces(char) {

        while (email.indexOf(char) > -1) {
            email = email.replace(char, '-')
        }
        console.log(email);


    }

    function encrypt() {
        let ascii = "";

        for (let el of email) {
            ascii += `${el.charCodeAt(0)} `
        }
        console.log(ascii);

    }




}
// emailValidator([
//     'Mike123@somemail.com',
//     'Make Upper',
//     'GetDomain 3',
//     'GetUsername',
//     'Encrypt',
//     'Complete'
// ])
// emailValidator([
//         'AnotherMail.com',
//         'Make Lower',
//         'GetUsername',
//         'Replace a',
//         'Complete',
//         ''
//     ])
emailValidator([
    'Another@Mail.com',
    'Make Lower',
    'GetUsername',
    'GetDomain 3',
    'Encrypt',
    'Complete'
])