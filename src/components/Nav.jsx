import styled, { css, keyframes } from 'styled-components'
import {Link} from 'react-router-dom'



const fade = keyframes`
    0%{
        opacity: 0.25;
    }
    25%{
        opacity: .5;
    }
    50%{
        opacity: 1;
    }
    75%{
        opacity: .5;
    }
    100%{
        opacity: 0.25;
    }
`




const NavHolder = styled.nav`
border: 2px solid black;
color: white;
text-align: center; 
animation: ${fade} 10s linear infinite;
`
const Header = styled.h1`
color: lightblue;
font-size: 35px;
`
const NavBarLi = styled.li `
color: lightpink;
display: inline;
list-style-type: none;
padding: 8px;

`




export default function Nav() {
    return(
        <div>

            <NavHolder>
                <Header>Blog Site</Header>
                <ul >
                
                    <NavBarLi>
                        Home 
                    </NavBarLi>
                    <NavBarLi>
                        About
                    </NavBarLi>
                    <NavBarLi>
                        Social Media
                    </NavBarLi>
                </ul>
                
            </NavHolder>
        </div>
    )
}