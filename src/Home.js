import React from 'react'
import { useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState(null);

  const[isPending, setIsPending]= useState(true)

  useEffect(()=>{
setTimeout(() => {
  fetch('http://localhost:8000/blog').then(
    (res)=>{
     return res.json();
    })
    .then(data=>{
      console.log(data);
      setBlogs(data)
      setIsPending(false)
    })
}, 5000);
  },[]);

  return (
    <div className='home'>
      {isPending && <div style={{color:'slateblue'}}>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}
    </div>
  )
}

export default Home