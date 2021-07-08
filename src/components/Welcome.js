import { Link } from 'react-router-dom'

export default function Welcome (props) {
    return (
        <div>
        {props.welcome}

        <Link to={'/keebs'}><h3>The Keeb List</h3></Link>
        </div>
    )
}