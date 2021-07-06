import React, { useEffect, useState } from 'react'
import './App.css';
import Navigation from './Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Create from './Create'
import One from './One'
import Two from './Two'
import Three from './Three'

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
      <Router>

       <h1>Welcome to the Blog Place!</h1>
       <h2>Select a blog post from below to read it</h2>

       <Navigation />

        <Route exact path='/' component={App} 
        render={App} /> 
    
        <Route path='/Create' component={Create} />
          
        <Route path='/One' component={One} />
     
        <Route path='/Two' component={Two} />
     
        <Route path='/Three' component={Three} /> 

      {renderedBlog}
      </Router>
</div>  
  );
} 

export default App;
