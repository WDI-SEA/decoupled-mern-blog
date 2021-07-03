import React from 'react'
import axios from 'axios'

const Post = (props) => {
    const apiUrl = 'http://localhost:3001/blog/'

    const deletePost = async (id) => {
        // setup axios call to hit api /blog/:id
        await axios.delete(`${apiUrl}${id}`)
    }

    // setup list of tags
    let tags
    if(props.tags) {
        tags = props.tags.map((tag, index) => {
            return (
                <li key={index} className="tags">{tag}</li>
            )
        })
    }

    return (
        <div>
            <h2>{ props.title }</h2>
            <h3>{ props.author }</h3>
            <ul>{ tags }</ul>
            <p>{ props.content }</p>
            <p><a href={`/edit/${props._id}`}>Edit</a>  <a href="/" onClick={() => deletePost(props._id)}>Delete</a></p>

        </div>
    )
}

export default Post