function solve() {
    // TODO
    let container = document.getElementById('container')
    let movieName = document.querySelectorAll('input').item(0)
    let hallName = document.querySelectorAll('input').item(1);
    let ticketPrice = document.querySelectorAll('input').item(2);

    let movieUl = document.getElementById('movies').querySelector('ul')
    let archiveUl = document.getElementById('archive').querySelector('ul')
    let clearBtn = document.getElementById('archive').querySelector('button')

    let onScreenBtn = container.querySelector('button')

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let movieNameValue = movieName.value;
        let hallNameValue = hallName.value;
        let ticketPriceValue = ticketPrice.value;


        if (movieNameValue == "" || hallNameValue == "" || (!Number(ticketPrice.value))) {
            return;
        }
        let movieLi = document.createElement('li');
        movieUl.appendChild(movieLi);

        let movieSpan = document.createElement('span');
        movieLi.appendChild(movieSpan);
        movieSpan.textContent = movieNameValue;

        let movieStrongHall = document.createElement('strong');
        movieLi.appendChild(movieStrongHall);
        movieStrongHall.textContent = `Hall: ${hallNameValue}`;

        let movieDiv = document.createElement('div');
        movieLi.appendChild(movieDiv);

        let divStrong = document.createElement('strong');
        movieDiv.appendChild(divStrong)
        divStrong.textContent = ticketPriceValue

        let divInput = document.createElement('input');
        movieDiv.appendChild(divInput);
        divInput.placeholder = 'Tickets Sold'

        let divBtnArchive = document.createElement('button');
        movieDiv.appendChild(divBtnArchive)
        divBtnArchive.textContent = 'Archive'


        movieName.value = ""
        hallName.value = ""
        ticketPrice.value = ""

        divBtnArchive.addEventListener('click', (e) => {
            if (Number(divInput.value)) {
                let totalAmount = (divInput.value * ticketPriceValue).toFixed(2);


                archiveUl.appendChild(movieLi);

                movieStrongHall.textContent = `Total amount: ${totalAmount}`
                movieDiv.remove();

                let divBtnDelete = document.createElement('button');
                movieLi.appendChild(divBtnDelete)
                divBtnDelete.textContent = 'Delete'


                divBtnDelete.addEventListener('click', (e) => {
                    movieLi.remove()
                })

            }



        });

        clearBtn.addEventListener('click', (e) => {
            let listLi = document.querySelectorAll('li').forEach(li => li.remove())

        })


    })

}