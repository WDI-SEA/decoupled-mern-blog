import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>
                <li>
                    <Link to='/blog'>Create A Blog</Link>
                </li>
            </ul>
      </nav>
    )
}