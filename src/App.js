import './App.css';

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Blog from './components/Blog'
import Post from './components/Post'

function App() {

  const [blog, setBlog] = useState([])

  useEffect (() => {
    async function getBlogs() {
      try{
        const url = `http://localhost:3001/blogs`
        const response = await axios.get(url)
        
        //console.log(typeof response.data)
        const responseArray = (response.data.blogs)
        setBlog(responseArray)
        //console.log(responseArray)
      } catch (err) {
        console.log(err)
      }
    }
    getBlogs()
  }, [])



  //form 

  //axios post - to post
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <ul>
             {/* <Link to='/'>Home</Link> */}
            </ul>
            <ul>
            <Link to='/blog'>Blog</Link>
            </ul>
          </ul>
        </nav>

        {/* {/* <Route
          exact path='/'
          render={() => <Home />}
          /> */}

        <Route
          exact path='/blog'
          render={() => <Blog blog={blog}/>}
        />
        
        <Route
          exact path='/blog/:id'
          render={(props) => {
            const foundBlog = blog.find(oneBlog => {
              console.log(oneBlog)
              return oneBlog._id == props.match.params.id

            })
            props = {...props, ...foundBlog}
            return (
              <Post {...props}/>
            )

          }
        }
              
        />

      </Router>
    </div>
  );
}

export default App;
