import './App.css';
import styled from 'styled-components'
//import Grid from 'styled-components-grid';

import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Blog from './components/Blog'
import Post from './components/Post'

const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`;

const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem
`;

const UL = styled.ul`

  display: flex;
  justify-content:center;
  padding-left: 0;

  a {
    text-decoration: none;
  }
  a:hover, a:visited {
    color: #000;
  }

  li {
    color: #000;
    margin: 0 0.8rem;
    font-size: 1.5rem;
    position: relative;
    list-style: none;
  }
`;

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
      <Grid>
        <nav>
          <UL>
            {/* <li>
             <Link to='/'>Home</Link>
            </li> */}
            <li>
              {/* style center and bullets */}
            <NavLink to='/blog'>Welcome to my Blog</NavLink>
            </li>
          </UL>
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
        </Grid>
      </Router>
    </div>
  );
}

export default App;
