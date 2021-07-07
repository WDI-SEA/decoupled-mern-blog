import './App.css';
import Header from "./Header"
import Blog from './Blog'

import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Link } from 'react-router-dom'

// STYLING

import styled from 'styled-components';

const StyledLink = styled.li`
  list-style-type: none;
  color: purple;
  &:hover {
    background: green;
  }
`

const Welcome = styled.h1`
background: #FF12DF;
background: -webkit-linear-gradient(to right, #FF12DF 0%, #1EF72C 100%);
background: -moz-linear-gradient(to right, #FF12DF 0%, #1EF72C 100%);
background: linear-gradient(to right, #FF12DF 0%, #1EF72C 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

function App() {
  const [blog, setBlog] = useState([])
  // const [title, setTitle] = useState('')
  // const [subTitle, setSubTitle] = useState('')
  // const [content, setContent] = useState('')

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
      <StyledLink>
        <Link to={`/blogs/${blog._id}`}> {blog.title}</Link>
      </StyledLink>
    </h3>
  </div>
  )
  

  return (
    <div className="App">
      <Router>
        <Header />

        <Welcome>Welcome to the Blog!</Welcome>
        {renderedBlogs}

        <Route 
          path='/blogs/:id' 
          render={props => {
            return(<Blog {...props} />) 
          }}
          />

      </Router>
    
    </div>
  );
}

export default App;
