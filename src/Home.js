import React from 'react'
import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blog')
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch a data from the resource")
        }
        console.log(res);
          return res.json();
        })
        .then(data => {
          console.log(data);
          setBlogs(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err=>{
         setIsPending(false)
         setError(err.message)
        })
    }, 1000);
  }, []);

  return (
    <div className='home'>
    {error && <div>{error}</div>}
      {isPending && <div style={{ color: 'slateblue' }}>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home