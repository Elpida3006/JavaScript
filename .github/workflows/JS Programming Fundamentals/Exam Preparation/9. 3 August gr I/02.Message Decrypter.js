function messageDEcrypter(stringOfArr) {

    let countmessage = Number(stringOfArr.shift());

    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<first>\d+)]\|\[(?<sec>\d+)]\|\[(?<thirtd>\d+)]\|$/;


    for (let i = 1; i <= countmessage; i++) {
        let exampleMessage = stringOfArr.shift();

        if (valid = pattern.exec(exampleMessage)) {
            let string1 = String.fromCharCode(valid.groups.first)
            let string2 = String.fromCharCode(valid.groups.sec)
            let string3 = String.fromCharCode(valid.groups.thirtd)
            console.log(`${valid.groups.tag}: ${string1}${string2}${string3}`);

        } else {
            console.log(`Valid message not found!`);
        }
    }

}
messageDEcrypter([
    '4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
])
messageDEcrypter([
    '3',
    'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
    '$tAGged$: [97][97][97]|',
    '$Request$: [73]|[115]|[105]|true'
])