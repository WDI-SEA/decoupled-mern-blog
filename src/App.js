import React, { useEffect, useState } from 'react'
import './App.css';
import BlogHome from './BlogHome'

const App = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/Blog')
    .then(response => response.json())
      .then(blogData => {
        setBlog(blogData.blogs)
        console.log(blogData.blogs)
      })
      .catch(err => console.log(err))
  }, [])

  const renderedBlog = blog.map((blog, index) => <div key={index}>{blog.title}</div>)

  return (
    <div>
      <BlogHome />
      <h1>Hello from the front end</h1>
      {renderedBlog}
    </div>
  );
}

export default App;
