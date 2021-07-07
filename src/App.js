import PostsList from './components/PostsList'
import BlogPosts from './components/BlogPosts'
import Nav from './components/Nav'
import TestAnimation from './components/TestAnimation'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



function App() {


  const [posts, setPosts] = useState([])

  useEffect(() => {
        

    async function getBackend() {
        try{
            const url = 'http://localhost:3001/blog'
            const response = await axios.get(url)
            console.log(response.data.blog)
            setPosts(response.data.blog)
            
            
        } catch(err) {
            console.log(err)
        }
    }
  getBackend()
  }, [])






  return (
    <div className="App">
      <Nav />
       <Router>
         
        

        <PostsList posts={posts}/> 
        

        <Route path ='/blog/:id' render={props => {
          
          
          const findIt = posts.find(post=>post._id.toString() === props.match.params.id)
          // console.log(findIt)
          props = {...props, ...findIt}
              return <BlogPosts {...props} />

            // }
              
        // })
        

        }} />



       </Router>


        
    </div>
  );
}

export default App;
