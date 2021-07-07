import styled from 'styled-components'
// import { 
//   useState, 
//   useEffect 
// } from 'react'
// import axios from 'axios'

const StyledParent = styled.div`
 
  & .content {
      padding-bottom: 1rem;
      width: 340px;
      margin: 0 auto;
      line-height: 1.5rem;
  }
`

export default function Post(props) {

  return(
    <StyledParent>
      <div className="content">
        {props.content}
      </div>
      <div className="name">
        By: {props.name}
      </div>
    </StyledParent>

  )
}