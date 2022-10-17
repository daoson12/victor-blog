import React from 'react'
import { useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((deleteById)=>deleteById.id !==id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    fetch('http://localhost:8000/blog').then(
      (res)=>{
       return res.json();
      })
      .then(data=>{
        console.log(data);
        setBlogs(data)
      })
  },[]);

  return (
    <div className='home'>
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  )
}

export default Home
