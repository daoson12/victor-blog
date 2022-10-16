import React from 'react'
import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'maria', id: 1 },
    { title: 'My new party', body: 'lorem ipsum...', author: 'Austin', id: 2 },
    { title: 'My new tips', body: 'lorem ipsum...', author: 'victor', id: 3 }
  ]);
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((deleteById)=>deleteById.id !==id);
    setBlogs(newBlogs);
  }
  return (
    <div className='home'>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  )
}

export default Home
