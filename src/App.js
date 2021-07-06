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
            <h1>Andie's Blog 💀</h1>
            <Router>
              <Route exact path="/" render={() => <Blog posts={ posts } /> } />

              <Route
                path="/blog/:id"
                render={(props) => {
                    console.log(props)
                    const foundPost = posts.find(onePost => {
                    console.log(onePost)
                    return onePost = props.match.params.id 
                    })
                    props = { ...props, ...foundPost}
                  return <Post {...props} />
                }}
              />
           </Router>
        </div>
    )
}
