function attachEvents() {
    const url = 'https://blog-apps-c12bf.firebaseio.com'
    const postsUrl = `https://blog-apps-c12bf.firebaseio.com/posts`;
    // const commentsURL = `https://blog-apps-c12bf.firebaseio.com/posts/comments.json`

    const btnLoadPosts = document.getElementById('btnLoadPosts')
    const postsValue = document.getElementById('posts')
    btnViewPost = document.getElementById('btnViewPost')
    const postDetails = document.getElementById('post-body')
    const comments = document.getElementById('post-comments')
    const postTitle = document.getElementById('post-title')

    btnLoadPosts.addEventListener('click', () => {
        fetch(`${postsUrl}.json`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                Object.entries(data).forEach(kvp => {
                    const option = document.createElement('option');
                    postsValue.appendChild(option)
                    const key = kvp[0]
                        // option.value = key
                    option.textContent = kvp[1].title




                });

            });
    });


    btnViewPost.addEventListener('click', () => {

        const commentsReq = fetch(`${postsUrl}/${postsValue.value}.json`)
            .then((res) => res.json())
        const postReq = fetch(`${postsUrl}.json`)
            .then((res) => res.json())
        Promise.all([commentsReq, postReq]).then(([commentsPost, currPost]) => {
            // console.log(data)
            postTitle.textContent = currPost.title;
            postDetails.textContent = currPost.body
            comments.innerHTML = ''
            Object.entries(currPost.comments || {})
                .fotEach(([key, commentText]) => {
                    const li = document.createElement('li');
                    li.textContent = commentText.text
                    comments.appendChild(li)
                });

        });
    });
}

// comment = { postId: "c2", text: "So so" },
//     create = () => {
//         fetch(commentsURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(comment),
//         });
//     }
// post = {

//     body: "Asynhronous",
//     comments: {},
//     id: "1",
//     title: "Asynhronous programming",

// }


// fetch(postsUrl, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(post),
// });





attachEvents();