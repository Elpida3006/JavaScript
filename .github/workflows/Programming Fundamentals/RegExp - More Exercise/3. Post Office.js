function postOffice(stringCode) {

    let [firstPart, secondPart, thirdPart] = stringCode[0].split('|')
    let firstModel = (/([#$%*&])[A-Z]+\1/g).exec(firstPart)
    let simpleModel = (/[A-Z]+/g).exec(firstModel)

    let array = []
    for (let everyChar of simpleModel[0]) {
        let ascii = everyChar.charCodeAt()

        let asciiInPart2 = new RegExp(`(?<asciiCode>${ascii}):(?<len>\\d{2})`, `g`).exec(secondPart)

        let lengthThirdtPartWord = Number(asciiInPart2[2]) + String.fromCharCode(asciiInPart2[1]).length
        array.push(lengthThirdtPartWord);
    }
    // console.log(simpleModel[0]);

    let map = {
        word: simpleModel[0],
        leng: array
    }
    let wordsIn3 = thirdPart.split(' ');
    for (let i = 0; i < map.word.length; i++) {
        let char = map.word[i]
        let num = Number(map.leng[i])

        for (let i = 0; i < wordsIn3.length; i++) {
            let word = wordsIn3[i]
            let symbol = wordsIn3[i][0]

            if (symbol === char && word.length === num) {
                console.log(word);
            }
        }

    }

}
postOffice([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
])