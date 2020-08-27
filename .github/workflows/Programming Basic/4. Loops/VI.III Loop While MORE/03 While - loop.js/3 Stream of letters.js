// function sekretWord(input) {
//     let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let word = input.shift();

//     let ceilText = "";
//     let finalWord = "";
//     let wayC = 0;
//     let wayO = 0;
//     let wayN = 0;

//     isEnd = false;

//     while (word != undefined || word == "End") {
//         if (word == "End") {
//             isEnd = true;
//             break;
//         }
//         if (!letters.includes(word)) {

//             word = input.shift();
//             continue;
//         }
//         else if (word == "c" || word == "o" || word == "n") {

//             switch (word) {
//                 case "c": wayC++; break;
//                 case "o": wayO++; break;
//                 case "n": wayN++; break;
//             }
//             if (wayC == 2 || wayO == 2 || wayN == 2) {

//                 if (wayC == 2) { wayC = 1; }
//                 if (wayO == 2) { wayO = 1; }
//                 if (wayN == 2) { wayN = 1; }
//             }
//             else if (wayC == 1 && wayO == 1 && wayN == 1) {
//                 ceilText += " ";
//                 finalWord = ceilText;
//                 wayC = 0;
//                 wayO = 0;
//                 wayN = 0;
//                 word = input.shift();
//                 continue;
//             }
//             else {
//                 word = input.shift();
//                 continue;
//             }
//         }
//         ceilText += word;
//         word = input.shift();

//     }
//     if (isEnd) {
//         console.log(finalWord);
//     }
//     else {
//         console.log(ceilText);
//     }

// }




// sekretWord(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
// sekretWord(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "A", "D", "End"]);
// sekretWord([
//     'o', 'S', '%', 'o',
//     'l', '^', 'v', 'e',
//     'c', 'n', '&', 'm',
//     'e', 'c', 'o', 'n',
//     'End'
// ]);

function streamOfLetters(input) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = input.shift();
 
    let c = false;
    let o = false;
    let n = false;
   let word = "";
    
    let finalWord = "";
 
    while (symbols !== "End") {
       
 
        if (letters.includes(symbols)) {
            if (!(c && o && n)) {
                if (symbols === "c" && !(c)) {
                    c = true;
                } else if (symbols === "c") {
                    word += symbols;
                } else if (symbols === "o" && !(o)) {
                    o = true;
                } else if (symbols === "o") {
                    word += symbols;
                } else if (symbols === "n" && !(n)) {
                    n = true;
                } else if (symbols === "n") {
                    word += symbols;
                } else {
                    word += symbols;
                }                          
            }          
        }
        if (c && o && n) {
            word += " ";
            finalWord += word;
            word = "";
            c = false;
            o = false;
            n = false;
        }
 
        symbols = input.shift();
        word += "";  
    }
    console.log(`${finalWord}`);
   
}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "A", "D", "End"]);
streamOfLetters([
    'o', 'S', '%', 'o', 'l', '^', 'v', 'e', 'c', 'n', '&', 'm', 'e', 'c', 'o', 'n', 'End']);






