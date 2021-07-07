import { Link } from 'react-router-dom'

const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home Page</Link>
                </li>    

                <li>
                    <Link to='/Create'>Create a Blog</Link>
                </li>
            </ul>
            
            {/* <ul>
                <li> */}
                {/* </li>

                <li>
                </li>

                <li> 
                    <Link to='/One'>Entry One</Link>
                </li>

                <li> 
                    <Link to='/Two'>Entry Two</Link>
                </li>
                
                <li> 
                    <Link to='/Three'>Entry Three</Link>
                </li>
            </ul> */}
        </nav>
    )
}

export default Navigation; 