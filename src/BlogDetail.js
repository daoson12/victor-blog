import React from 'react'
import { useParams } from "react-router-dom";
import UseFetch from './UseFetch';

function BlogDetail() {

  const {id}=useParams();
  const {data:blog, error, isPending}= UseFetch('http://localhost:8000/blog/'+id)
  return (
    <div className='blog-details'>
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {blog && (<div>
      <article>
      <h1>{blog.title}</h1>
      <p style={{ color: "blue", borderRadius: '8px', fontStyle: 'italic' }}>Written by: {blog.author}</p>
      <div>{blog.body}</div>
      </article>
    </div>)}
    </div>
  )
}

export default BlogDetail