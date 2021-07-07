import './App.css'
import Heading from './components/Header'
import Blog from './components/Blog'
import Post from './components/Post'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, BrowserRouter as Router } from 'react-router-dom'

export default function App() {

    // state holding blog posts
    const [posts, setPosts] = useState([])

    async function fetchPosts(){
      try {
          const url = `http://localhost:3001/blog`
          const response = await axios.get(url)
          let responseData = (response.data.posts)

          // set state
          setPosts(responseData)

      } catch(error) {
          console.log(error)
      }
    }

    // use effect call to api
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="App">
            <Heading />
            <Router>
              <Route exact path="/blog" render={() => <Blog posts={ posts } /> } />

              <Route
                path="/blog/:id"
                render={(props) => {
                    console.log(props)
                    const foundPost = posts.find(onePost => onePost._id.toString() === props.match.params.id) || {tags:[]}
                    console.log(foundPost)
                    props = { ...props, ...foundPost}
                  return <Post {...props} />
                }}
              />
           </Router>
        </div>
    )
}
