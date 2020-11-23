function merliah(string) {
    let text = string.shift();
    let word = string.shift();


    while (text.length > 0 && word.length > 0) {
        let firstIndex = text.indexOf(word);
        let secIndex = text.lastIndexOf(word);

        if (firstIndex != secIndex && firstIndex >= 0 && secIndex >= 0) {
            console.log('Shaked it.');

            text = text.substring(0, firstIndex) + text.substring(firstIndex + word.length, text.length);
            secIndex = text.lastIndexOf(word);
            text = text.substring(0, secIndex) + text.substring(secIndex + word.length, text.length);
            word = word.replace(word.charAt(word.length / 2), '');

        } else {
            console.log('No shake.');

            console.log(text);
            break;
        }
    }
    if (text.length < 1 || word.length < 1) {
        console.log('No shake.');
        console.log(text);
    }


}
merliah(['astalavista baby', 'sta', ''])