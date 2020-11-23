function passwordPesho(stringOfArr) {

    let countPassword = Number(stringOfArr.shift());

    let pattern = /^(?<symbols>.{1,})>(?<numbers>\d{3})\|(?<lowercase>[a-z]{3})\|(?<uppercase>[A-Z]{3})\|(?<sym>[^<>]{3})<\1$/;


    for (let i = 1; i <= countPassword; i++) {
        let examplePass = stringOfArr.shift();

        if (valid = pattern.exec(examplePass)) {
            console.log(`Password: ${valid.groups.numbers}${valid.groups.lowercase}${valid.groups.uppercase}${valid.groups.sym}`);

        } else {
            console.log(`Try another password!`);
        }
    }

}

passwordPesho([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
])
passwordPesho([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
])