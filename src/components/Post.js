import { Link } from "react-router-dom"

export default function Post(props) {
    return (
        <div>
            <Link to={`/blog/${props.post._id}`}>
                <h3>{props.post.title}</h3>
            </Link>
            <h5>{props.post.author}</h5>
            <p>{props.post.content}</p>
        </div>
    )
}