import { 
  useState, 
  useEffect 
} from 'react'
import axios from 'axios'
import Blog from './components/Blog'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

export default function App() {
  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(response => {
          console.log(response)
      })
  }, [blogData])
  
  return(
    <div>
      <h1>Welcome to my Blog!</h1>
      <Router>

      </Router>
      <Blog />
    </div>
  )
}
