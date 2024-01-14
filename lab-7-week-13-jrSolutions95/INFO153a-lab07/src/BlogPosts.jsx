import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'
import BlogPost from './BlogPost'

function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState([])

  //fetches the blog posts from the server
  const fetchBlogPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=50")
    .then(response => response.json())
    .then(data => setBlogPosts(data))
    .catch(error => console.log("Error when fetching posts",error))
  }


  //useEffect
  useEffect(() => {
    fetchBlogPosts()
  },[])
  
  return (
    <div className='blog-post-container'>
      {blogPosts.map((post) => (
        <BlogPost 
          id={post.id} 
          title={post.title} 
          body={post.body}/>
      ))}
    </div>
  )
}



export default BlogPosts
