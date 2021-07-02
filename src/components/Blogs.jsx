import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Posts from './Posts'

const Blog = (props) => {
    
    return(
        <div>
            <h2>List of Blogs</h2>
            <Posts />
        </div>
    )
}

export default Blog