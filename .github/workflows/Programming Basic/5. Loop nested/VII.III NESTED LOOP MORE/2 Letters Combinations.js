function letterWord(input) {
    let character1 = input.shift();
    let charackter2 = input.shift();
    let secretCharacter = input.shift();
    
    character1 = character1.charCodeAt();
    charackter2 = charackter2.charCodeAt();
    secretCharacter = secretCharacter.charCodeAt();
    let counter = 0;
    let result = "";
    for (let i = character1; i <= charackter2; i++) {
        for (let j = character1; j <= charackter2; j++) {
            for (let k = character1; k <= charackter2; k++) {
                if (i !== secretCharacter && j !== secretCharacter && k !== secretCharacter) {
                    counter++
                    result += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `

                }

            }
        }
    }

    result += counter
    console.log(result);


}
letterWord(["a", "c", "b"]);