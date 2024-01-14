import React from 'react'
import PropTypes from 'prop-types'
//used the same structure as in Lab6 to be able to reuse the style.css
function Comment({commentText,userEmail}) {
    const avatarLetter = userEmail[0].toUpperCase()
    const email =userEmail
    const body = commentText
  return (
    <div className='comment'>
        <div className='comment-avatar'>{avatarLetter}</div>
        <div className= 'comment-content'>
            <div className='comment-email'>{email}</div>
            <div className= 'comment-body'>{body}</div>
        </div>      
    </div>
  )
}

Comment.propTypes = {
    commentText: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
}

export default Comment
