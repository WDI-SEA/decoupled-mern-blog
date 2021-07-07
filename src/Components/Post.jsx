import { Link } from 'react-router-dom'
export default function Post(props) {

    if(!props.post) {
        return(
            <div>
                loading
            </div>
        )
    }
   
    return(
        <div>
            <h3>{props.post.title}</h3>
            <h4>{props.post.subject}</h4>
            <h5>{props.post.name}</h5>
            <p>{props.post.content}</p>
            <Link to={`/blog/edit/${props.post._id}`}>Click to Edit</Link>
        </div>
    )
}