import { Link } from 'react-router-dom'
import styled from 'styled-components'

// STYLING

const BlogLink = styled.li`
    list-style-type: none;
`

export default function Header() {
    return (
        <nav>
            <ul>
                <BlogLink>
                    <Link to='/'>Home Page</Link>
                </BlogLink>
                <BlogLink>
                    <Link to='/blog'>Create A Blog</Link>
                </BlogLink>
            </ul>
      </nav>
    )
}