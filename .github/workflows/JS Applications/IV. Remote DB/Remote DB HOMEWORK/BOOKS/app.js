const htnlSelectors = {
    'loadBooks': () => document.getElementById('loadBooks'),
    'createBookBtn': () => document.querySelector('#create-book > button'),
    'title': () => document.getElementById('create-title'),
    'author': () => document.getElementById('create-author'),
    'isbn': () => document.getElementById('create-isbn'),
    'booksTable': () => document.querySelector('table > tbody'),
    'create': () => document.getElementById('create-book'),
    'edit': () => document.getElementById('edit-book'),
    'editBookBtn': () => document.querySelector('#edit-book > button'),
    'edittitle': () => document.getElementById('edit-title'),
    'editauthor': () => document.getElementById('edit-author'),
    'editisbn': () => document.getElementById('edit-isbn'),

}

htnlSelectors['loadBooks']().addEventListener('click', fetchBooks);
htnlSelectors['createBookBtn']().addEventListener('click', createBook)


function createBook(e) {
    e.preventDefault()
    const title = htnlSelectors['title']()
    const author = htnlSelectors['author']()
    const isbn = htnlSelectors['isbn']()

    if (title.value !== '' && author.value !== '' && isbn.value !== '') {
        fetch('https://test-app-185a2.firebaseio.com/Books.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'title': title.value, 'author': author.value, 'isbn': isbn.value }),

            })
            .then((res) => res.json())
            .then(fetchBooks)
            .catch(handlerError)

        title.value = ''
        author.value = ''
        isbn.value = ''
    } else {
        const error = { message: '' };

        if (title.value === '' || author.value === '' || isbn.value === '') {
            error.message += 'Please field any inputs!'
        }
    }
}

function fetchBooks() {
    fetch('https://test-app-185a2.firebaseio.com/Books.json')
        .then((res) => res.json())
        .then(renderB)
        .catch(handlerError)

}

function handlerError(error) {
    console.log(error);
}

function renderB(data) {


    const div = htnlSelectors['booksTable']();


    div.innerHTML = ''


    Object.keys(data).forEach(id => {
        const { title, author, isbn } = data[id];


        const tableR = createDom('tr', '', {}, {},
            createDom('td', title, {}, {}),
            createDom('td', author, {}, {}),
            createDom('td', isbn, {}, {}),
            createDom('td', '', {}, {},
                createDom('button', 'Edit', { 'data-key': id }, { click: readBookId }),
                createDom('button', 'Delete', { 'data-key': id }, { click: deletBook })))


        div.appendChild(tableR);


    });
}

function deletBook() {
    const id = this.getAttribute('data-key')
    const url = 'https://test-app-185a2.firebaseio.com/Books/' + `${id}.json`
    fetch(url, {
            method: 'DELETE'
        })
        .then(fetchBooks)
        .catch(handlerError)




}

function readBookId() {
    const id = this.getAttribute('data-key')
        // console.log(id);
    const url = 'https://test-app-185a2.firebaseio.com/Books/' + `${id}.json`
    fetch(url)
        .then((res) => res.json())
        .then(({ title, author, isbn }) => {
            htnlSelectors['edittitle']().value = title;
            htnlSelectors['editauthor']().value = author;
            htnlSelectors['editisbn']().value = isbn;
            htnlSelectors['edit']().style.display = 'block'
            htnlSelectors['create']().style.display = 'none'
            htnlSelectors['editBookBtn']().setAttribute('data-key', id)
            htnlSelectors['editBookBtn']().addEventListener('click', sendEdit)

        })
        .catch(handlerError)

}

function sendEdit(e) {
    e.preventDefault()
    const title = htnlSelectors['edittitle']()
    const author = htnlSelectors['editauthor']()
    const isbn = htnlSelectors['editisbn']()

    if (title.value !== '' && author.value !== '' && isbn.value !== '') {
        const idE = this.getAttribute('data-key')
        const urlEd = 'https://test-app-185a2.firebaseio.com/Books/' + `${idE}.json`
        fetch(urlEd, {
            method: 'PATCH',
            body: JSON.stringify({ 'title': title.value, 'author': author.value, 'isbn': isbn.value }),

        }).then(res => {
                htnlSelectors['edit']().style.display = 'none'
                htnlSelectors['create']().style.display = 'block'

            }

        ).then(fetchBooks)
    } else {
        error.message = 'Please field any inputs!'
    }
}

function createDom(type, text, attributes, events, ...children) {
    const domElement = document.createElement(type);
    if (text !== '') { domElement.textContent = text }

    Object.entries(attributes).forEach(([key, value]) => {
        domElement.setAttribute(key, value)
    });
    Object.entries(events).forEach(([name, handler]) => {
        domElement.addEventListener(name, handler)
    });
    children.forEach((child) => {
        domElement.appendChild(child)
    });
    return domElement;

}




// </script>
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyAiXU9LenWOey1cy7pbu3YYy9wbuieMUVQ",
//     authDomain: "test-app-185a2.firebaseapp.com",
//     databaseURL: "https://test-app-185a2.firebaseio.com",
//     projectId: "test-app-185a2",
//     storageBucket: "test-app-185a2.appspot.com",
//     messagingSenderId: "146762385124",
//     appId: "1:146762385124:web:d1682e66401b99b3c18ef1",
//     measurementId: "G-42KFH94X4V"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>