import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/Home'
import Blogs from './components/Blogs'
import Post from './components/Post'
import { Nav } from 'react-bootstrap';


function App()  {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/blog")
      .then(res => {
          setBlogData(res.data)
          // console.log(blogData)
      })
      .catch(err => console.log(err))
  },[])


  return (
    <div className="App">
      <Router>
        <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
          <Nav.Link href="/blog">Blog</Nav.Link>
      </Nav.Item>
      </Nav>

        <Route
          exact path='/'
          render={() => <Home />}
          />

        <Route
          exact path='/blog'
          render={() => <Blogs blog={ blogData }/>}
          />

        <Route
            exact path='/blog/:id'
            render={(props) => {
              const post = blogData.find(blog=> {
                return blog._id === props.match.params.id
  
              })
              props = {...props, ...post}
              return (
                <Post {...props}/>
              )
  
            }
          }
                
          />
                                      
      </Router>
    </div>
  )
  

 }
export default App;



