function wordsUppercase(smallletter) {
    let letter = smallletter.match(/\w+/g).join(", ").toUpperCase()
    console.log(letter)
}
// function wordsUppercase(smallletter) {
//     let pattern = /\w+/g.exec(smallletter)
//         // while (pattern) {
//     smallletter = smallletter.toUpperCase().split('').join(', ')
//     console.log(smallletter)
//         // }


// }
wordsUppercase('Hi, how are you?')