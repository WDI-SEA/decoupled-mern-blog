import styled, { } from 'styled-components'

const Header = styled.h1`
    font-family: 'Bungee Shade', cursive;
    font-size: 3rem;
    background-color: white;
    padding: 30px 20px;
    width: 45vw;
    margin: 45px auto;
    border-radius: 15px;
    
`

export default function Heading() {
    return(
        <Header>
        Andie's Blog
        </Header>
    )
}