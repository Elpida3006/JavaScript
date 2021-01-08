// function mirrorWords(string) {

//     let text = string.shift()
//     let pattern = /([@#])(?<firstword>[A-Za-z]{3,})\1{2}(?<secondword>[A-Za-z]{3,})\1/g
//     let mirrorWords = []
//     let wordPairsCount = 0

//     let match = pattern.exec(text)

//     while (match) {
//         wordPairsCount++

//         let firstWord = match.groups.firstword;
//         let secondword = match.groups.secondword;
//         // let {firstWord, secondword} = match.groups
//         let reversFirst = firstWord.split('').reverse().join('');

//         if (reversFirst === secondword) {
//             // mirrorWords.push({ firstWord: firstWord, secondword: secondword })
//             mirrorWords.push(`${firstWord} <=> ${secondword}`)

//         }


//         match = pattern.exec(text)
//     }
//     // for (const pair of mirrorWords) {
//     //     // console.log(pairs.firstWord); 
//     //     // s obekt
//     //     console.log(pairs[0]);
//     //     s masiv


//     // }
//     if (wordPairsCount < 1) {
//         console.log('No word pairs found!');
//     } else {
//         console.log(`${wordPairsCount} word pairs found!`);
//     }
//     if (mirrorWords.length < 1) {
//         console.log('No mirror words!');
//     } else {
//         console.log('The mirror words are:');
//         console.log(mirrorWords.join(', '));


//     }
// }





// mirrorWords([
//         '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
//     ])
//     //5 word pairs found!
//     // The mirror words are:
//     // Part <=> traP, leveL <=> Level, sAw <=> wAs
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
//     //2 word pairs found!
//     // No mirror words!


function mirrorWords(stringSymbols) {

    let pattern = /([@#])(?<firstword>[A-Za-z]{3,})\1{2}(?<secondword>[A-Za-z]{3,})\1/g
    let pairs = 0
    let mirrorWotds = []
    while (word = pattern.exec(stringSymbols)) {
        pairs++
        let firstWord = word.groups.firstword
        let secWord = word.groups.secondword
        if (firstWord == secWord.split('').reverse().join('')) {

            mirrorWotds.push(`${firstWord} <=> ${secWord}`)
        }
    }
    if (pairs == 0) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${pairs} word pairs found!`);
    }
    if (mirrorWotds.length == 0) {
        console.log(`No mirror words!`);
    } else {
        console.log(`The mirror words are:`);
        console.log(mirrorWotds.join(', '));
    }





}
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
])