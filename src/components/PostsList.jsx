import {Link} from 'react-router-dom'

export default function PostsList(props) {

    // let renderPosts 
    // if(posts.length>0){
    
    const renderPosts = props.posts.map((post, index) => {
        
        return <li key={index}>
            <Link to={`/blog/${post._id}`}>{post.name}</Link>
            </li>
    })
    // }



    return(
        <div>
            <h5>Check out a some of our blog posts:</h5>
            {renderPosts}
        </div>
    )
}