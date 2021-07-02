import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/blogs')
    .then(response => response.json())
    .then(blogData => {
      console.log(blogData.blogs)
      setBlog(blogData.blogs)
    })
    .catch(err => console.log(err))
  }, [])

const renderedBlogs = blog.map((blog, idx) =>
  <div key={idx}>
    <h3> 
      {blog.title}
    </h3>
  </div>
  )

  return (
    <div className="App">
     <h1>Welcome to the Blog!</h1>
     
     {renderedBlogs}
     
    </div>
  );
}

export default App;
