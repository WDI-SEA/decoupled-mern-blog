import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'
import axios from 'axios'
import Blogs from './components/Blogs'
import Home from './components/Home'
import Post from './components/Post'


function App() {

  const [posts, setPosts] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `http://localhost:3001/blog`
          const response = await axios.get(url)
          setPosts(response.data.blog)
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])

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
          render={() => <Blogs blog={posts}/>}
          />

        <Route path='/blog/:id'>
            <Post />
        </Route>

      </Router>
    </div>
  )
}

export default App;