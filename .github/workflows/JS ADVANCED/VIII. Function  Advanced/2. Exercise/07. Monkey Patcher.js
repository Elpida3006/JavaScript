(function solve() {
    const commands = {
        upvote: (post) => post.upvote++,
        downvote: (post) => post.downvote++,
        score: (post) => {
            let { upvote, downvote } = post;
            let total = upvote + downvote;
            let balance = upvote - downvote
            let obfuscated = 0;

            if (total > 50) {
                obfuscated = Math.ceil(0.25 * Math.max(upvote, downvote));
                upvote += obfuscated
                downvote += obfuscated
            }
            let rating = 'new';

            if (total < 10) {
                rating = 'new';

            } else if (upvote / total > 0.66) {
                rating = 'hot';

            } else if (balance >= 0 && (upvote > 100 || downvote > 100)) {
                rating = 'controversial';

            } else if (balance < 0) {
                rating = 'unpopular';
            }
            return [upvote, downvote, balance, rating]
        }
    };
    return { call: (post, command) => commands[command](post) }
})()

//IIFE