import React from 'react'
import { Link } from 'react-router-dom';

function BlogList({ blogs, title }) {

  return (
    <div className='blog-list'>
      <div className='blog-preview' style={{ backgroundColor: 'blue', color: 'white', fontSize: '26px' }}> {title}</div>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </Link>

        </div>
      ))}
    </div>
  )
}

export default BlogList
