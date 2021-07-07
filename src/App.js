import './App.css';
import Blog from './Components/Blog'
import Home from './Components/Home'
import Post from './Components/Post'
import New from './Components/New'
import Edit from './Components/Edit'
import Header from './Components/Header'
import axios from 'axios'
import {
  useState,
  useEffect
} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


function App() {
  const [refreshToken, setRefreshToken] = useState(0)
  const[blogData, setBlogData] = useState([])
  

  useEffect(() => {
    axios.get('http://localhost:3001/blog')
      .then((response) => {
        setBlogData(response.data.allPosts)
      })
  }, [refreshToken])

  function refresh() {
    setRefreshToken( refreshToken + 1)
  }

  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>

          <Route path="/home" component={Home} />
          
          <Route 
            exact path="/blog" 
            render={() => <Blog blogData={blogData} />} 
            />
          <Route
          exact path="/blog/new"
          render={() => <New refresh={refresh} />}
          />
          <Route
            path="/blog/edit/:id"
            render={(props) => {
              const post = blogData.find(post => post._id.toString() === props.match.params.id)
              return <Edit post={post} refresh={refresh}/> 
          }}
            />
          <Route
            path="/blog/:id"
            render={(props) => {
              // console.log(props.match.params.id)
              const post = blogData.find(post => post._id.toString() === props.match.params.id)
              // console.log(post)            
              return <Post post={post} />
            }}
            />
        </Switch>
        </Router>
        </div>
  );
}

export default App;
