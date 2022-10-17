import React from 'react'
import BlogList from './BlogList'
import UseFetch from './UseFetch';

const Home = () => {
  const {data:blogs, isPending, error} =UseFetch('http://localhost:8000/blog')

  return (
    <div className='home'>
    {error && <div>{error}</div>}
    {isPending && <div style={{ color: 'slateblue' }}>Loading...</div>}
    {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home