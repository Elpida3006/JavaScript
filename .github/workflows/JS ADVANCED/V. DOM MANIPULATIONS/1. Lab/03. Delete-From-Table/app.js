function deleteByEmail() {
    // 1. Select, 
    const emailTids = Array.from(document.querySelectorAll('#customers td:last-child'))
        // .map(td => td.textContent)

    const emailInput = document.querySelector('input[name = "email"]')
    const result = document.getElementById("result")

    //**in while, do not forget to clear array */
    // result.textContent = '', in this case do not have to clear this

    // 2. Get  value
    const emailInputValue = emailInput.value

    //3. Have you email/label - think in label
    if (!emailInputValue) { return; }
    //4. Have you exactly email and replace (textContent == innerText, innerHtml get all - row from  html-a)

    const td = emailTids.find(function(td) { return td.textContent == emailInputValue })
    emailInput.value = ''

    if (!td) {
        result.textContent = 'Not found.';
        return;
    }
    td.parentElement.remove();
    result.textContent = 'Deleted.'
}
// eve @gmail.com