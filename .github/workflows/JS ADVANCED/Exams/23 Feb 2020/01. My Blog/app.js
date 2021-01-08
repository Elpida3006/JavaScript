function solve() {
    //Todo: Write your code here!

    let autor = document.getElementById('creator');
    let title = document.getElementById('title');
    let category = document.getElementById('category');
    let content = document.getElementById('content');

    let buttonCreate = document.querySelectorAll('button')[0];
    let articleSection = document.querySelector('main > section')
    let archiveUl = document.querySelector('.archive-section > ul')


    buttonCreate.addEventListener('click', (e) => {
        e.preventDefault();

        let autorValue = autor.value;
        let titleValue = title.value;
        let categoryValue = category.value;
        let contentValue = content.value;


        let article = document.createElement('article')
        articleSection.appendChild(article);

        let h1title = document.createElement('h1')
        article.appendChild(h1title)
        h1title.textContent = titleValue


        let pCategory = document.createElement('p')
        article.appendChild(pCategory)
        pCategory.innerHTML = `Category:<strong>${categoryValue}</strong>`

        let pCreator = document.createElement('p')
        article.appendChild(pCreator)
        pCreator.innerHTML = `Creator:<strong>${autorValue}</strong>`

        let pContent = document.createElement('p')
        article.appendChild(pContent)
        pContent.textContent = contentValue;

        let divButtons = document.createElement('div')
        divButtons.className = "buttons";
        article.appendChild(divButtons)

        let btnDel = document.createElement('button')
        btnDel.className = 'btn delete';
        divButtons.appendChild(btnDel)
        btnDel.textContent = 'Delete'

        let btnArchive = document.createElement('button')
        btnArchive.className = "btn archive";
        divButtons.appendChild(btnArchive)
        btnArchive.textContent = 'Archive'

        btnArchive.addEventListener('click', (e) => {
            articleSection.removeChild(article);
            let liArchive = document.createElement('li')
            archiveUl.appendChild(liArchive);
            liArchive.textContent = titleValue

            const items = [...archiveUl.querySelectorAll('li')];
            archiveUl.innerHTML = '';

            items.sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(e => archiveUl.appendChild(e))

        })

        btnDel.addEventListener('click', (e) => {
            article.remove()
        })

    })











}

// Unexpected error: expected '<h2>Articles</h2><article><h1>Arrays</h1><p>Category:<strong>Programming</strong></p><p>Creator:<strong>John</strong></p><p>IloveJavaScript</p><divclass="buttons"><buttonclass="btndelete">Delete</button><buttonclass="btnarchive">Archive</button></div></article>'
// to equal '<h2>Articles</h2>'