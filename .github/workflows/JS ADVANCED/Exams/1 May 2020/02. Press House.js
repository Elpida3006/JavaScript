//85//
function solve() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content
        }
        toString() {
            let string = `Title: ${this.title}\nContent: ${this.content}`
            return string;
        }
    }



    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content)
            this.originalResearch = originalResearch
                // { title, autor }
            this.comments = []
        }

        get content() {
            return this._content
                //kogato ne e negowo sobstweno, a nasledeno trqbwa da go vzemem taka i da izvyrshim deistvieto v set, pak s this._ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }

        set content(value) {
            // As we create a short reports here we have a length limit for the content property
            // – it should be less than 150 symbols, otherwise throw an error with the next message:
            if (value.length < 150) { this._content = value; } else { throw new Error(`Short reports content should be less then 150 symbols.`); }
        }

        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(object) {
            // The property should have the both required properties , otherwise throw error with this message:
            if (object.hasOwnProperty('title') && object.hasOwnProperty('author')) {
                this._originalResearch = object;
            } else { throw new Error(`The original research should have author and title.`); }
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The Comment is added.\n';
        }
        toString() {
            let result = super.toString()
            result += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`

            if (this.comments.length > 0) {
                result += '\nComments:\n'
                result += (this.comments.join('\n'))
            }
            return result;
        }
    }


    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content)
            this.clients = []
                // { clientName, orderDescription }
            this.book = book
                // { name, autor }
        }
        addClient(clientName, orderDescription) {
            this.clients.map(client => {
                if (client.name === clientName) {
                    throw new Error `This client has already ordered this review.`
                }

            });
            let client = { name: clientName, order: orderDescription }
            this.clients.push(client)
            return `${clientName} has ordered a review for ${orderDescription}`


        }
        toString() {
            let result = super.toString()
            result += `\nBook: ${this.book.name}`
            if (this.clients.length > 0) {
                result += '\nOrders:\n'
                this.clients.map(client => {

                    result += `${client.name} - ${client.orderDescription}`

                }).join('\n');
            }
            return result;
        }
    }
    return {
        Article,
        ShortReports,
        BookReview
    }
}



//коцето
function solve() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }

            if (!originalResearch.hasOwnProperty('title') || !originalResearch.hasOwnProperty('author')) {
                throw new Error('The original research should have author and title.');
            }
            super(title, content);
            this.comments = [];
            this.originalResearch = originalResearch;
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            let output = super.toString();
            output += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;

            if (this.comments.length > 0) {
                output += '\nComments:\n'
                output += this.comments.join('\n');
            }

            return output;
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            let hasClient = this.clients.find(client => client.name === clientName &&
                client.description === orderDescription);

            if (hasClient) {
                throw new Error('This client has already ordered this review.');
            }

            this.clients.push({ name: clientName, description: orderDescription });
            return `${clientName} has ordered a review for ${orderDescription}`;
        }

        toString() {
            let output = super.toString() + '\n';
            output += `Book: ${this.book.name}`;
            if (this.clients.length > 0) {
                output += '\nOrders:\n';
                output += this.clients.map(client => `${client.name} - ${client.description}`).join('\n');
            }

            return output;
        }
    }

    return { Article, ShortReports, BookReview };
}

let classes = solve();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript s features are executed in C++—the underlying language.")


console.log(short.toString());

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());


// Unexpected error: Incorrect output: expected 'The comment is added.\nTitle: SpaceX and 
// Javascript\ nContent: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript.What are your views on this ? \nOriginal Research : Dragon 2 by wikipedia.org\ nComments: \nThank god they didn\ 't use java.\nIn the end JavaScript’s features are executed in C++ — the underlying language.'
// to equal

//     'Comment is added.\n\nTitle: SpaceX and Javascript\nContent: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?\nOriginal Research: Dragon 2 by wikipedia.org\nComments:\nThank god they didn\'t use java.\nIn the end JavaScript’s features are executed in C++ — the underlying language.'


// output: expected 'The Guardian has ordered a review for The Great Gatsby\nGoodreads has ordered a review for The Great Gatsby\nTitle: The Great Gatsby is so much more than a love story\nContent: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...\nBook: The Great Gatsby\nOrders:\nThe Guardian - 100 symbols\nGoodreads - 30 symbols'
// to equal

//     'The Guardian has ordered a review for The Great Gatsby\nGoodreads has ordered a review for The Great Gatsby\nTitle: The Great Gatsby is so much more than a love story\nContent: The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...\nBook: The Great Gatsby\nOrders:\nThe Guardian - 100 symbols.\nGoodreads - 30 symbols.'