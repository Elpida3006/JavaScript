function messageEncrypter(stringOfArr) {

    let countmessage = Number(stringOfArr.shift());

    let pattern = /([*@])(?<tag>[A-Z][a-z]{2,})\1: \[(?<first>[A-Za-z]+)\]\|\[(?<sec>[A-Za-z]+)\]\|\[(?<thirtd>[A-Za-z]+)\]\|$/;


    for (let i = 1; i <= countmessage; i++) {
        let exampleMessage = stringOfArr.shift();

        if (valid = pattern.exec(exampleMessage)) {
            let ascii1 = (valid.groups.first).charCodeAt()
            let ascii2 = (valid.groups.sec).charCodeAt()
            let ascii3 = (valid.groups.thirtd).charCodeAt()
            console.log(`${valid.groups.tag}: ${ascii1} ${ascii2} ${ascii3}`);

        } else {
            console.log(`Valid message not found!`);
        }
    }

}
messageEncrypter([
    '3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
])
messageEncrypter([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
])