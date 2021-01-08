const createArticle = (data) => `
    <article class="${data.sponsored ? 'sponsored-article' : 'article-item'}">
        <header>
            <h3>${data.title}</h3>
        </header>

        <section>
            <p>${data.body}</p>
        </section>

        <footer>
            <p>Author: ${data.author}</p>
        </footer>
    </article>
`;

export default createArticle;