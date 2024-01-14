const baseurl = "https://jsonplaceholder.typicode.com/"/* Best practice */

/* Could also have made a button */
window.onload = () => {
    fetchComments();
};


/* FetchComments is partly based on what was shown in Lab on friday*/
const fetchComments = () => {
    const commentContainer = document.getElementById('comments');
    
    fetch(baseurl + 'comments/')
        .then(response => response.json())
        .then((data) =>{
            data.slice(0,10).forEach((c) => {
                const comment = makeComment(c.email,c.body);
                commentContainer.appendChild(comment);
        });
    })
    .catch((error) =>{
        console.error('Error when fetching comments:', error);
});
};

/* should I maybe take in id aswell?, could make it under avatar if time */
const makeComment =(email,body) =>{
    const comment = document.createElement('div');
    comment.classList.add('comment');

    const commentAvatar = document.createElement('div');
    commentAvatar.classList.add('comment-avatar');
    commentAvatar.textContent = email[0].toUpperCase();

    commentContent = document.createElement('div');
    commentContent.classList.add('comment-content');

    const commentEmail = document.createElement('h2');
    commentEmail.classList.add('comment-email');
    commentEmail.textContent = email;

    const commentBody = document.createElement('p');
    commentBody.classList.add('comment-body');
    commentBody.textContent = body;

    commentContent.appendChild(commentEmail);
    commentContent.appendChild(commentBody);
    comment.appendChild(commentAvatar);
    comment.appendChild(commentContent);
    return comment;
};