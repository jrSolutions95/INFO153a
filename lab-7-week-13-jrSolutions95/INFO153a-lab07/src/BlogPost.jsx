import React from 'react'
import Comment from './Comment'
import {useState} from 'react'
import PropTypes from 'prop-types'


function BlogPost({id,title,body}) {
    const [comments, setComments] = useState([])
    const [showComments, setShowComments] =useState(false)

    const fetchComments = () => {
        //console.log("Getting comments for the post:",id) 
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(data => setComments(data), setShowComments(!showComments))
        .catch(error => console.log("Error when fetching comments",error))
    }

return (
    <div>{/* need this otherwise comments will be inside of the blog post, maybe this should have a className?  */}
      <div className='blog-post' onClick={fetchComments}>
          <h2 className='blog-post-title'>{title}</h2>
          <p className='blog-post-body'>{body}</p>
      </div>
      {showComments && (
          <div className= 'comments-container'>
              {comments.map((comment) => (
                  <Comment 
                      commentText={comment.body}
                      userEmail={comment.email}
                  />
              ))}
          </div>
      )}
    </div>
  );
  
}

BlogPost.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default BlogPost
