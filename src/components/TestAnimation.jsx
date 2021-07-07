import styled, { css, keyframes } from 'styled-components'



const moveAcross = keyframes`
0%{
    left: 0.25;
}
25%{
    left: .5;
}
50%{
    left: 1;
}
75%{
    left: .5;
}
100%{
    left: 0.25;
}
`

const Leaf = styled.h1`


 
animation: ${moveAcross} 10s inline;
`




export default function TestAnimation(){
    return(
        <div>
        <Leaf>🍃</Leaf>
        </div>
    )
}