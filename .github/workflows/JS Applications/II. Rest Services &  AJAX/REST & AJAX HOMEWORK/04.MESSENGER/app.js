//Ако  нe се рефрешва в бразузъра, провери с Постман, би трябвало всичко да се ъпдейтва :)

function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json'
        // let textArea = document.getElementById('messages')

    // function send() {
    //     let name = document.getElementById('author').value;
    //     let message = document.getElementById('content').value
    //     fetch(url, {
    //         method: "POST",
    //         body: JSON.stringify({ author: name, content: message })
    //     })

    //     name = ""
    //     message = ""



    // }

    let btnSend = document.getElementById("submit").addEventListener('click', () => {
        let name = document.getElementById('author').value;
        let message = document.getElementById('content').value
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ author: name, content: message })
        })

        name = ""
        message = ""



    })


    // function refresh() {
    //     fetch(url)
    //         .then((data) => data.json)
    //         .then((data) => {
    //             let text = Object.values(data).reduce((paragraph, value) => (paragraph += `${value.author}: ${value.content}\n`), '');
    //             textArea.textContent = text
    //         })
    // }

    let btnRefresh = document.getElementById("refresh").addEventListener('click', () => {
        fetch(url)
            .then((data) => data.json)
            .then((data) => {
                let text = Object.values(data).reduce((messages, value) => (messages += `${value.author}: ${value.content}\n`), '');
                document.getElementById('messages').textContent = text
            })
    })


}

attachEvents();