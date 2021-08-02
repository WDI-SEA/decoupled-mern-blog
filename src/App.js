import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'



import Blog from './Components/Blog'
import Nav from './Components/Nav'
import NewPost from './Components/NewPost'
import Post from './Components/Post'
import Edit from './Components/Edit'
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';

import {
  BrowserRouter, // alias BrowserRouter as Router
  Route,
  Switch
} from 'react-router-dom'




const App = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/blog')
    
    .then((response) => {
      setBlog(response.data)
      console.log(response)
  })
    .catch((err) => console.log(err))
  }, [])
  

  return (
    <div >
       <Nav />
      

          <BrowserRouter>
            <Switch>
              <Route  //home
                exact path='/blog'
                render={() => {
                  console.log('*** /blog is also being hit :(')
                  return <Blog />
                }}
                />

              <Route
                path="/blog/:id"
                render={props => {
                  const blogPost = blog.find(e => e._id.toString() === props.match.params.id)
                  props = {...props, ...blogPost}
                  console.log('*** /blog/:id is being hit', props)
                  return <Post {...props} />
                }}
                />

              <Route
                path="/edit/:id"
                render={(props) => {
                    const blogPost = blog.find(e => e._id.toString() === props.match.params.id)
                    props = {...props, ...blogPost}
              
                    return <Edit {...props} />
                } }
              />

              <Route
                path="/newpost"
                component={NewPost}
                />
            </Switch>
          
          </BrowserRouter>
  
    
    </div>
  );
}


export default App;
