function solution() {

    let inputGift = document.querySelector('body > div > section > div > input')
    let buttonAddGift = document.querySelector('body > div > section > div > button')

    let listGiftUl = document.querySelectorAll('section').item(1).querySelector('ul')
    let sendGiftUl = document.querySelectorAll('section').item(2).querySelector('ul')
    let discardedGiftUl = document.querySelectorAll('section').item(3).querySelector('ul')


    buttonAddGift.addEventListener('click', (e) => {
        e.preventDefault();

        let nameGift = inputGift.value;

        let li = document.createElement('li');
        li.classList.add('gift')
        li.textContent = nameGift;
        listGiftUl.appendChild(li)

        let btnSend = document.createElement('button')
        btnSend.id = 'sendButton'
        btnSend.textContent = 'Send'
        li.appendChild(btnSend)

        let btnDiscard = document.createElement('button')
        btnDiscard.id = 'discardButton'
        btnDiscard.textContent = 'Discard'
        li.appendChild(btnDiscard)


        // work -->>
        const items = [...listGiftUl.querySelectorAll('li')];
        listGiftUl.innerHTML = '';

        items.sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(e => listGiftUl.appendChild(e))

        inputGift.value = ""

        btnSend.addEventListener('click', (e) => {
            sendGiftUl.appendChild(li)
            btnSend.remove();
            btnDiscard.remove()
        })
        btnDiscard.addEventListener('click', (e) => {
            discardedGiftUl.appendChild(li)
            btnSend.remove();
            btnDiscard.remove()


        });
    })




}