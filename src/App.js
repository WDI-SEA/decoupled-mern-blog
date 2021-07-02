import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Blog from './components/Blog'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/blog" component={Blog} />

        <Route exact path="/blog/:id" render={(props) => <Blog {...props} />} />
      </Router>
    </div>
  );
}

export default App;
