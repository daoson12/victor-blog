import React from 'react'

function BlogList({blogs, title}) {
   
  return (
    <div className='blog-list'>
    <div className='blog-preview' style={{backgroundColor:'blue',color:'white', fontSize:'26px'}}> {title}</div>
      {blogs.map((blog)=>(
        <div className='blog-preview' key={blog.id}>
       
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <p style={{color: "blue",borderRadius:'8px', fontStyle:'italic'}}>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogList
