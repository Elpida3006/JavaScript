function messageTranslator(stringOfArr) {

    let commandsCount = Number(stringOfArr.shift())
    let numbers = []
    for (let command = 1; command <= commandsCount; command++) {
        let message = stringOfArr.shift();

        let pattern = /!(?<comm>[A-Z][a-z]{2,})!:\[(?<num>[A-Za-z]{8,})\]/;

        if (valid = pattern.exec(message)) {
            let text = valid.groups.num
            for (let char of text) {
                numbers.push(char.charCodeAt())
            }
            console.log(`${valid.groups.comm}: ${numbers.join(' ')}`);


        } else {
            console.log(`The message is invalid`);
        }



    }



}
messageTranslator(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])
messageTranslator([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
])
messageTranslator([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
])