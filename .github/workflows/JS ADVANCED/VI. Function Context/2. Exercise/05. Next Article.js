function getArticleGenerator(articlesArray) {
    const content = document.querySelector('#content');

    function showNext() {

        if (articlesArray.length > 0) {
            const article = document.createElement('article');
            article.textContent = articlesArray.shift();
            content.appendChild(article);
        }

    }

    return showNext;
}

function getArticleGenerator(articles) {

    const content = document.querySelector('#content');

    function showNext() {

        const article = document.createElement('article');

        if (articles.length === 0) { return; }
        article.textContent = articles.shift();
        content.appendChild(article);
    }

    return showNext;
}