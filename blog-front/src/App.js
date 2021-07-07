import { useState, useEffect } from 'react'
import axios from 'axios'
import Blog from './components/Blog'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

export default function App() {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
       axios.get('http://localhost:3001/blog')
       .then((response) => {
         console.log(response.data.posts)
         setBlogData(response.data.posts)
       })
       .catch(err => console.log(err))
  }, [setBlogData])
  return(
    <div>
      <h1>Welcome to my Blog!</h1>
      <Router>
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:id" render={(props) => <Blog {...props} />} />
      </Router>
      <Blog />
    </div>
  )
}
// const [blogData, setBlogData] = useState([])

// useEffect(() => {
//   let blog = 'http://localhost:3001/'
//   axios.get(blog)
//     .then(response => {
//         console.log(response.data)
//         setBlogData(response.data)
//     })
//     .catch(err => console.log(err))
// }, [blogData])
