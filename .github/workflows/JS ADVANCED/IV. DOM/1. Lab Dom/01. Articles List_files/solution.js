function createArticle() {
    const createtitleInput = document.getElementById('createTitle');

    const createContentTextArea = document.getElementById('createContent')

    const articleSection = document.getElementById('articles');

    let titleInputValue = createtitleInput.value
    let contextValue = createContentTextArea.value

    if (!titleInputValue || !contextValue) {

        return;
    }


    const newArticle = document.createElement('article');
    const articleHeading = document.createElement('h3');
    const articleparagraph = document.createElement('p');

    newArticle.appendChild(articleHeading);
    newArticle.appendChild(articleparagraph);

    articleSection.appendChild(newArticle);
    articleHeading.textContent = titleInputValue
    articleparagraph.textContent = contextValue

    createtitleInput.value = ''
    createContentTextArea.value = ''

    //TODO...
}

// function createArticle() {
//     const createtitleInput = document.getElementById('createTitle');

//     const createContentTextArea = document.getElementById('createContent')

//     const articleSection = document.getElementById('articles');
//     const newArticle = document.createElement('article');
//     const articleHeading = document.createElement('h3');
//     const articleparagraph = document.createElement('p');


//     let titleInputValue = createtitleInput.value
//     let contextValue = createContentTextArea.value

//     if (titleInputValue !== '' && contextValue !== '') {
//         // h3.innerHTML = titleInputValue
//         // package.innerHTML = contextValue
//         newArticle.appendChild(articleHeading);
//         newArticle.appendChild(articleparagraph);
//         articleSection.appendChild(newArticle);

//         articleHeading.innerText = titleInputValue
//         articleparagraph.innerText = contextValue
//         createtitleInput.value = ''
//         createContentTextArea.value = ''
//     }


//     //TODO...
// }