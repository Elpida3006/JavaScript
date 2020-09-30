function reversedString(element) {



    let reversedWord = ""
    for (let i = element.length - 1; i >= 0; i--) {

        let reversedElement = element[i]
        reversedWord += `${reversedElement}`;
    }
    console.log(reversedWord);
}

reversedString("Hello");