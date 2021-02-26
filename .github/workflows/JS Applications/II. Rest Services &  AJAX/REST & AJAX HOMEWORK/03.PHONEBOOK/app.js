function attachEvents() {



    let url = 'https://phonebook-65b0f.firebaseio.com/phonebook.json'

    let btnLoad = document.getElementById('btnLoad')
    let btnCreate = document.getElementById('btnCreate');



    let ulphonebook = document.getElementById('phonebook')






    btnLoad.addEventListener('click', () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {

                Object.keys(data).forEach(key => {
                    let li = document.createElement('li')
                    li.textContent = `${data[key].person}:${data[key].phone}`;
                    let btnDelete = document.createElement('button')
                    btnDelete.textContent = 'Delete'
                    ulphonebook.appendChild(li)
                    li.appendChild(btnDelete)

                    let delURL = 'https://phonebook-65b0f.firebaseio.com/phonebook/' + key + '.json'
                    btnDelete.addEventListener('click', () => {
                        //have to remove from db

                        fetch(delURL, {
                            method: 'DELETE',
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                            }
                        }).then(response => response.json())
                        li.remove()

                    });

                })

            })
    })
    btnCreate.addEventListener('click', () => {
        let phoneValue = document.getElementById('phone')
        let personValue = document.getElementById('person')

        fetch(url, {
            method: 'POST',
            // headers: { 'content-type': json },
            body: JSON.stringify({ person: personValue.value, phone: phoneValue.value }),
        }).then(() => {
            phoneValue.value = ""
            personValue.value = ""
        })




    })

}

attachEvents();