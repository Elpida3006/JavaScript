function solve() {
    //закачаме Listener
    document.querySelector('#searchBtn').addEventListener('click', onSearch);

    const input = document.querySelector('#searchField')

    function onSearch(event) {
        //четем входа
        const query = input.value.trim().toLocaleLowerCase();

        if (query.trim().length > 0) {
            const tbody = document.querySelector('tbody');

            //обхождаме редовете и премахваме клас select
            Array.from(tbody.querySelectorAll('tr')).forEach(tr => {
                tr.classList.remove('select')
            });

            //обхождаме клетките и търсим съвпадения -> добавяме клас select на родителя (реда)
            Array.from(tbody.querySelectorAll('td')).forEach(td => {

                if (td.textContent.trim().toLocaleLowerCase().includes(query)) {
                    td.parentNode.classList.add('select')
                }
            });
            //зачистваме полето
            input.value = ''
        }

    }
}

function solve() {
    const word = document.querySelector('#searchField')
    document.querySelector('#searchBtn').addEventListener('click', () => {

        Array.from(document.querySelectorAll('tr')).forEach(tr => {
            if (tr.textContent.includes(word.value)) {
                tr.classList.add('select')
            } else {
                tr.classList.remove('select')
            }

        });
        word.value = ''
    });


}