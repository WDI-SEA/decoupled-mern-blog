//import { Link } from "react-router-dom"

export default function Post(props) {
    console.log(props)
    return(
        <div>
            <h2>{props.title}</h2>
            <h4>by {props.name}</h4>
            <p>{props.content}</p>
        </div>
    )
}
// <Link to={`/blog/${props.post._id}`}> <h4>{props.post.title}</h4> </Link>
//  <h5>{props.post.author}</h5>
// <p>{props.post.content}</p>           