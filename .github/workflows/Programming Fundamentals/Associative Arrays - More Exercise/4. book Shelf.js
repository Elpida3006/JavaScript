function solve(input) {
    let shelfs = {};
    for (const line of input) {
        if (line.includes('->')) {
            let [id, genre] = line.split(' -> ');
            if (!shelfs.hasOwnProperty(id)) {
                shelfs[id] = { genre };
                shelfs[id].books = [];
            }
        } else if (line.includes(':')) {
            let [titleAuthor, genre] = line.split(', ');
            for (const key in shelfs) {
                if (shelfs[key].genre == genre) {
                    let [title, author] = titleAuthor.split(': ');
                    shelfs[key].books.push({ title, author })
                }
            }
        }
    }

    let sortedByBooks = Object.entries(shelfs).sort((a, b) => b[1].books.length - a[1].books.length);

    for (const shelf of sortedByBooks) {
        console.log(`${shelf[0]} ${shelf[1].genre}: ${shelf[1].books.length}`)
        for (const book of shelf[1].books.sort((a, b) => (a.title).localeCompare(b.title))) {
            console.log(`--> ${book.title}: ${book.author}`);
        }
    }
}