function emojiDetectopr(stringOfArr) {

    let pattern = /(::|\*\*)(?<emojisymbol>[A-Z][a-z]{2,})\1/g;
    let digitCool = /\d+/g
    let cool = ''
    while (coolTreshold = digitCool.exec(stringOfArr)) {
        cool += `${(coolTreshold)}`
    }
    let sum = 1
    for (let i = 0; i < cool.length; i++) {
        let el = Number(cool[i])
        sum *= el
    }
    console.log(`Cool threshold: ${sum}`);
    let coolnes = ''
    let validEmoji = 0
    let exampleMessage = stringOfArr.shift();

    while (emoji = pattern.exec(exampleMessage)) {
        validEmoji++
        coolnes += `${emoji[0]} `

    }

    console.log(`${validEmoji} emojis found in the text. The cool ones are:`);

    let coolEmoji = []
    for (let emo of coolnes.split(' ')) {
        let sumAscii = 0;
        for (let i = 2; i < emo.length - 2; i++) {
            sumAscii += emo[i].charCodeAt(0)
        }
        if (sumAscii >= sum) {

            coolEmoji.push(emo)
        }
    }

    console.log(`${coolEmoji.join('\n')}`);
}

emojiDetectopr([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])



//miro
// function emojiDetectopr(input) {

//     let text = input[0];
//     let coolThreshold = calculateThreshold(text.match(/[0-9]/g));
//     let coolEmojies = [];
//     let notCoolEmojiCounter = 0;

//     let matches = Array.from(text.matchAll(/(?<start>::|\*\*)(?<emoji>[A-Z][a-z]{2,})(\k<start>)/g));

//     for (let match of matches) {

//         let emoji = match.groups.emoji;
//         let coolnes = calculateCoolnes(emoji);
//         if (coolnes >= coolThreshold) {
//             coolEmojies.push(match[0]);
//         } else {
//             notCoolEmojiCounter++;
//         }

//     }


//     let totalEmojies = (coolEmojies.length + notCoolEmojiCounter);
//     console.log(`Cool threshold: ${coolThreshold}`);

//     if (totalEmojies > 0) {
//         console.log(`${totalEmojies} emojis found in the text. The cool ones are:`);
//     }

//     console.log(coolEmojies.join('\n'));

//     function calculateThreshold(arr) {
//         let result = 1;

//         for (let digit of arr) {
//             result *= Number(digit);
//         }

//         return result;
//     }

//     function calculateCoolnes(emoji) {

//         let result = 0;

//         for (let letter of emoji.split('')) {
//             result += letter.charCodeAt(0);
//         }

//         return result;
//     }

// }

//Aleksandar
// Programming Fundamentals Final Exam - 04 April 2020 Group 1/02. Emoji Detector.js
// emojiDetector = inputArray => {

//     const isColl = emojiStr => {
//         let sumAscii = 0
//         for (let i = 2; i < emojiStr.length - 2; i++) {
//             sumAscii += emojiStr[i].charCodeAt(0)
//         }
//         if (sumAscii > coolThresholdProduct)
//             return true
//     }

//     let coolThresholdProduct = 1
//     let digitPattern = /\d/g
//     let digit = inputArray[0].match(digitPattern)

//     for (const i of digit)
//         coolThresholdProduct *= i

//     console.log(`Cool threshold: ${coolThresholdProduct}`)

//     let emojiPattern = /(::|\*\*)[A-Z][a-z]{2,}\1/g
//     let emojis = inputArray[0].match(emojiPattern)

//     console.log(`${emojis.length} emojis found in the text. The cool ones are:`)

//     for (const i of emojis) {
//         if (isColl(i))
//             console.log(i)
//     }
// }
// emojiDetectopr([
//     'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
// ])