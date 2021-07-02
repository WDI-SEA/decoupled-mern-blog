import { Link } from 'react-router-dom'
import Posts from './Posts'

const Blog = (props) => {
    const postData = props.post.map((post, index) => {
        return (
          <div key={index}>
            {/* <h3> Name: {post.name} </h3> */}
            <h4> <Link to={`/blog/${post.id}`}>{post.title}</Link> </h4>
            {/* <p> Content: {post.content} </p> */}
          </div>
        )
      })
    
    return(
        <div>
            <h2>List of Blogs</h2>
            <ul>
                {postData}
            </ul>
        </div>
    )
}

export default Blog