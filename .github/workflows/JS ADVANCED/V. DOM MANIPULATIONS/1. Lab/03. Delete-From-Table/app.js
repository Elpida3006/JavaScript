function deleteByEmail() {
    // 1. Select, dostupvame
    const emailTids = Array.from(document.querySelectorAll('#customers td:last-child'))
        // .map(td => td.textContent)

    const emailInput = document.querySelector('input[name = "email"]')
    const result = document.getElementById("result")

    //**kato v while, da ne zabravqme da si zachistvame spisyka sled kato sme go vzeli */
    // result.textContent = '', v sluchaq ne trqbwa da zachistvame tova

    // 2. Vziamme stoinostta
    const emailInputValue = emailInput.value

    //3. proverqvame dali ima  email/label - neshto v praznoto pole za proverka
    if (!emailInputValue) { return; }
    //4. Proverqvame za tochen email i novozamenqme stoinostta(textContent == innerText, innerHtml vzima vsichko - celiq red ot html-a, koeto rqdko se iska)

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