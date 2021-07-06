import './App.css'
import axios from 'axios'
import React, { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Blogs from './components/Blogs'
import Post from './components/Post'


function App()  {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
      axios.get("http://localhost:3001/blog")
      .then(res => {
          setBlogData(res.data)
          console.log(blogData)
      })
      .catch(err => console.log(err))
  },[])


  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <ul>
             <Link to='/'>Home</Link>
            </ul>
            <ul>
            <Link to='/blog'>Blog</Link>
            </ul>
          </ul>
        </nav>

        <Route
          exact path='/'
          render={() => <Home />}
          />

        <Route
          exact path='/blog'
          render={() => <Blogs blog={ blogData }/>}
          />

        <Route
        exact path="/blog/:id"
        render={props => {
            const post = blogData.find(e => e._id.toString() === props.match.params.id)
            props = {...props, ...post}
            return <Post {...props}/>
         }}
        />


      </Router>
    </div>
  )
  

 }
export default App;