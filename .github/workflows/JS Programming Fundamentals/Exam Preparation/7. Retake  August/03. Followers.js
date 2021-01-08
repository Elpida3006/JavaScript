function peshoFollowers(stringOfArray) {



    let followers = {};

    let countUser = 0;

    function newF(username) {
        if (!followers[username]) {
            followers[username] = { like: 0, comments: 0 };

            countUser++
        }

    }

    function likes(username, count) {
        count = Number(count)

        if (!followers[username]) {
            followers[username] = { like: 0, comments: 0 };
            countUser++
        }
        followers[username].like += count


    }

    function comment(username) {


        if (!followers[username]) {
            followers[username] = { like: 0, comments: 0 };
            countUser++
        }
        followers[username].comments++


    }

    function blocked(username) {

        if (followers[username]) {

            delete followers[username];
            countUser--
        } else {
            console.log(`${username} doesn't exist.`);

        }
    }



    // 2. Execute commands
    let commands = stringOfArray.shift()

    while (commands !== 'Log out') {
        let command = commands.split(': ')

        switch (command[0]) {
            case 'New follower':
                newF(command[1]);
                break;
            case 'Like':
                likes(command[1], command[2]);
                break;
            case 'Comment':
                comment(command[1]);
                break;
            case 'Blocked':
                blocked(command[1]);
                break;
        }

        commands = stringOfArray.shift();

    }

    // 3.sorting

    let userEntries = Object.entries(followers).sort((a, b) => {
        if (b[1].like != a[1].like) {
            return b[1].like - a[1].like
        } else {
            return a[0].localeCompare(b[0])
        }


    });


    // 4.Print result

    console.log(`${countUser} followers`);

    for (const kvp of userEntries) {
        console.log(`${kvp[0]}: ${kvp[1].like + kvp[1].comments }`)

    }








}
peshoFollowers([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
])
peshoFollowers([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
])