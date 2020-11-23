function schoolLibrary(array) {


    let listNamesBooks = array.shift().split('&')

    function add(bookName) {
        if (!(listNamesBooks.includes(bookName))) {
            listNamesBooks.splice(0, 0, bookName);
            // listNamesBooks.unshift(bookName)
        }
    }

    function take(bookName) {
        if (listNamesBooks.includes(bookName)) {
            let index = listNamesBooks.indexOf(bookName)
            listNamesBooks.splice(index, 1)
        }
    }

    function swap(book1, book2) {
        // if (listNamesBooks.includes(book1) && listNamesBooks.includes(book1)) {
        let index1 = Number(listNamesBooks.indexOf(book1));
        let index2 = Number(listNamesBooks.indexOf(book2));
        // 100 точки с проверка по индекс, не с includes, 
        if (index1 !== -1 && index2 !== -1) {
            listNamesBooks[index1] = book2;
            listNamesBooks[index2] = book1
        }
    }

    function insert(bookName) {
        listNamesBooks.push(bookName)
    }

    function check(index) {
        let index1 = Number(index);
        if (listNamesBooks[index1] !== undefined) {
            console.log(listNamesBooks[index1]);
        }
    }
    let command = array.shift();

    while (command !== 'Done') {
        let book = command.split(' | ')
        switch (book[0]) {
            case 'Add Book':
                add(book[1]);
                break;
            case 'Take Book':
                take(book[1]);
                break;
            case 'Swap Books':
                swap(book[1], book[2]);
                break;
            case 'Insert Book':
                insert(book[1]);
                break;
            case 'Check Book':
                check(book[1]);
                break;

        }
        command = array.shift()
    }
    console.log(listNamesBooks.join(', '));
}
// schoolLibrary([
//     'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
//     'Add Book | The Odyssey',
//     'Take Book | Don Quixote',
//     "Insert Book | Alice's Adventures in Wonderland",
//     'Check Book | 3',
//     'Done',
// ])
schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
])