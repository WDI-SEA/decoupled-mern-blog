import axios from 'axios'
import React from 'react'



const Post = (props) => {
  console.log('*** Post is rendering', props, props.name)

  const apiUrl = "http://localhost:3001/blog/"


  const deletePost = async (id) => {
    try {
        // setup axios call to hit api /blog/:id
        await axios.delete(`${apiUrl}${id}`)
    } catch (error) {
        console.log(error)
    }
}

  return (
    
    <div className="container pt-3 cardBlock">
       
         
          <div className="wrapper pt-3">
          
            <h1>{props.title}</h1>
            <h6>by:{props.author} </h6>
            <br/>
            <p>{props.content}</p>
          </div>

           <a href="/blog" onClick={() => deletePost(props._id)}>Delete </a>
           
           <a href={`/edit/${props._id}`}>Edit</a>

    </div>
   
)
}

export default Post;
