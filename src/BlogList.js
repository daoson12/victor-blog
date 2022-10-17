import React from 'react'

function BlogList({blogs, handleDelete}) {
   
  return (
    <div className='blog-list'>
      {blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <p>Written by {blog.author}</p>
        <button onClick={()=>handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
