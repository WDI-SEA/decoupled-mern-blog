import { Link } from 'react-router-dom'

const Blogs = (props) => {
    const postData = props.blog.map((post, index) => {
        return (
          <div key={index}>
            <h4> <Link to={`/blog/${post._id}`}>{post.title}</Link> </h4>
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

export default Blogs