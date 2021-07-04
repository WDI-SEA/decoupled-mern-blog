import PostsList from './components/PostsList'
import BlogPosts from './components/BlogPosts'
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

       <Router>
         
        

        <PostsList posts={posts}/> 
        

        <Route path ='/blog/:id' render={props => {
          
          // console.log(props.match.params.id) 

          // console.log(posts, "POSTS 😁")

          // posts.map((post, index) => {
          //   // props = {...props, ...post}
          //   // console.log(post)
          //   console.log(post._id)

          //   // posts.find(post._id.toString() === props.match.params.id)

          //   console.log(typeof(post._id.toString()), typeof(props.match.params.id))

          //   if(post._id.toString() === props.match.params.id){
          const findIt = posts.find(post=>post._id.toString() === props.match.params.id)
          console.log(findIt)
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
