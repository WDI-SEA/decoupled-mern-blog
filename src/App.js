import React, { useEffect, useState } from 'react'
import './App.css';
import Navigation from './Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create'
import One from './One'
import Two from './Two'
import Three from './Three'
import Home from './Home'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const App = () => {
  const [blog, setBlog] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/Blog')
    .then(response => response.json())
      .then(blogData => {
        setBlog(blogData.blogs)
        console.log(blogData.blogs)
      })
      .catch(err => console.log(err))
  }, [])

  // const renderedBlog = blog.map((blog, index) => <div key={index}>{blog.title}</div>)

  return (
      <div>
        <Router>
    
            <h1>
              Welcome to the Blog Place!
            </h1>
            <h4>
              Select a blog post from below to read it
            </h4>
          
  <CardDeck>
  <Card>
    <Card.Img variant='top' src='ocean.jpeg' />
    <Card.Body>
      <Card.Title>Oceans</Card.Title>
      <Card.Text>
        Who doesn't love the ocean?  In this post, we'll explore some of the best 
        beaches around to decide where we should head next.
      </Card.Text>
    </Card.Body>
    <Card.Link href='/One'>Entry One</Card.Link>
    <Card.Footer>
      <small className='text-muted'>Published: October 3rd</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant='top' src='mountain.jpeg' />
    <Card.Body>
      <Card.Title>Mountains</Card.Title>
      <Card.Text>
        It doesn't get much better than a hammock in the mountains on a warm summer
        day.  In this post, we'll find mountain towns to explore.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Link href='/Two'>Entry Two</Card.Link>
    <Card.Footer>
      <small className='text-muted'>Published: October 20th</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant='top' src='jungle.jpeg' />
    <Card.Body>
      <Card.Title>Jungle</Card.Title>
      <Card.Text>
      What's more unforgettable than a trip to the jungle?  In this post, we'll 
      find our next super green vacation.
      </Card.Text>
    </Card.Body>
    <Card.Link href='/Three'>Entry Three</Card.Link>
    <Card.Footer>
      <small className='text-muted'>Published: Today</small>
    </Card.Footer>
  </Card>
</CardDeck>
  
          <Switch>
            <Route exact path='/' component={Home} /> 
        
            <Route path='/Create' component={Create} />
              
            <Route path='/One' component={One} />
        
            <Route path='/Two' component={Two} />
        
            <Route path='/Three' component={Three} />  
          </Switch> 
         
          <Navigation />
        </Router>
        </div>   
  );
        }

export default App;
