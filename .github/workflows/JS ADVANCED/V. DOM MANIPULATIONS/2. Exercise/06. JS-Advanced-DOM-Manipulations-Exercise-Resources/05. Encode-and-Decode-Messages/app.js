function encodeAndDecodeMessages() {
    const encodeButton = document.getElementsByTagName("button")[0]
    const decodeButton = document.getElementsByTagName("button")[1]
    const textAreaEncode = document.getElementsByTagName("textarea")[0]
    const textAreaDecode = document.getElementsByTagName("textarea")[1]

    encodeButton.addEventListener("click", function() {
        let tempResult = ''
        for (var i = 0; i < textAreaEncode.value.length; i++) {
            tempResult += String.fromCharCode(textAreaEncode.value
                .charAt(i).charCodeAt() + 1);
        }
        textAreaEncode.value = '';
        textAreaDecode.value = tempResult;

    });

    decodeButton.addEventListener("click", function() {
        let tempResult = ''
        for (var i = 0; i < textAreaDecode.value.length; i++) {
            tempResult += String.fromCharCode(textAreaDecode.value
                .charAt(i).charCodeAt() - 1);
        }
        textAreaDecode.value = tempResult;
    });

}