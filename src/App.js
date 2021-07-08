import Beer from './components/Beer'
import Description from './components/Description'
import Header from './components/Header'

import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';


import React, {useState, useEffect} from 'react';
import axios from 'axios'

import {
  BrowserRouter as Router, 
  Route,
} from 'react-router-dom'

function App() {
  const [beer, setBeer] = useState([{
    name: '',
    description: '',
    rating: ''
  }])

  useEffect(() => {
      async function beers(){
          try{
              const url= `http://localhost:3001/beer/`
              const resData = await axios.get(url)
              console.log(resData.data.beer)
              setBeer(resData.data.beer)
          } catch (err){
              console.log(err)
          }
      }
      beers()
  }, [])


  return (
   
    <div className="App">
      <Header />
      <Router>
      
        <Route 
          exact path ='/'
          render ={() => <Beer beer={beer} />}
        />
        <Route 
          exact path='/beer/:id'
          render={props => {
            console.log(props, "PROPS ID")
            const description = beer.find(beer => beer._id.toString()=== props.match.params.id)
            props = {...props, ...description}
            return(
              <Description {...props} />
            )
          }}
        />
      </Router>
    </div>
  
  );
}

export default App;
