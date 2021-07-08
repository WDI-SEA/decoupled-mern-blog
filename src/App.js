import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//components
import Welcome from './components/Welcome'
import Keebs from './components/Keebs'
import KeebsDetail from './components/KeebsDetail'



export default function App () {
  
  
  
const [keebs, setKeebs] = useState([])
const [welcome, setWelcome] = useState('')


 useEffect (()=> {
  async function getKeebs () {
    try {
      const keebApi = await axios.get('http://localhost:5900/keebs')
      const welcomeRes = await axios.get('http://localhost:5900/')
      setKeebs(keebApi.data.keebs)
      setWelcome(welcomeRes.data.msg)
      // console.log(welcome)
      // console.log(keebs)
    } catch (err) {
      console.log(err)
    }
  }
  getKeebs()
  }, [])
  console.log(keebs)
 
  return (
    <div>
    <Router>
      <Route
        path="/"
        render={() => <Welcome welcome={welcome} /> }
      />

      <Route 
        exact path="/keebs"
        render= {() =>
        <Keebs moarKeebs={keebs} />
        }
      />

    <Route 
        exact path="/keebs/:id"
        render= { props => {
          const details = keebs.find ( keebs => keebs._id.toString()=== props.match.params.id )
          props = {...props, ...details}
          console.log(props)
          return (
            <KeebsDetail {...props} />
          )
        }}
      />
      </Router>
  </div>
  );
}
