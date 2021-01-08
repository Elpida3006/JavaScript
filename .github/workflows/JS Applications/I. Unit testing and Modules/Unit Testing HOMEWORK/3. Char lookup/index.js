module.exports = {
    lookupChar(string, number) {
        (typeof(string) !== 'string' || !Number.isInteger(number)) ? undefined
            : (string.length <= number || number < 0) ? "Incorrect index" :
            string.charAt(number);
    }
}