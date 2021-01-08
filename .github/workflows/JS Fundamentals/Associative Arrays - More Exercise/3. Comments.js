function siteComments(array) {
    let mapComment = new Map();
    let usersArray = [];

    function user(line) {
        let [x, user] = line.split(" ");
        if (!usersArray.includes(user)) {
            usersArray.push(user);
        }
    }

    function article(line) {
        let [x, article] = line.split(" ");
        if (!mapComment.has(article)) {
            mapComment.set(article, []);
        }
    }

    function postOn(line) {
        let [userArticle, titlePostComment] = line.split(": ");
        let [user, article] = userArticle.split(" posts on ");
        if (usersArray.includes(user) && mapComment.has(article)) {
            let [title, postComment] = titlePostComment.split(", ")
            mapComment.get(article).push({ user, title, postComment: postComment });
        }
    }

    array.forEach(line => {
        if (line.includes('user')) {
            user(line);
        } else if (line.includes('article')) {
            article(line);
        } else if (line.includes('posts on')) {
            postOn(line);
        }
    });

    let sortComments = Array.from(mapComment).sort((a, b) => b[1].length - a[1].length);
    for (const kvp of sortComments) {
        console.log(`Comments on ${kvp[0]}`);
        let sorted = kvp[1].sort((a, b) => (a.user).localeCompare(b.user))
        for (const comment of sorted) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.postComment}`);
        }
    }
}
siteComments(['user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])