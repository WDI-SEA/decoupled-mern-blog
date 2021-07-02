import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Blogs from './components/Blogs'
import Home from './components/Home'


function App() {
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
          render={() => <Blogs />}
          />

      </Router>
    </div>
  )
}

export default App;