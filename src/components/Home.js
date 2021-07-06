import React from 'react'	


export default function Home(props) {

    return(
      <div>
        <h1>{props.name}</h1>
        <h4>By:{props.author}</h4>
        <br></br>
        <p>{props.content}</p>
      </div>
  
    )
  }