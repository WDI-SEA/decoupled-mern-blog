// import { 
//   useState, 
//   useEffect 
// } from 'react'
// import axios from 'axios'

export default function Post(props) {

  return(
    <div>
      <h1>Hey from post</h1>
      {props.name}
      {props.content}
    </div>

  )
}