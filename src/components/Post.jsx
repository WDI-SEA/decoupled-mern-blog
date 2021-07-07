
import React from 'react'
import axios from 'axios'

export default function Post(props) {
    const apiUrl = 'http://localhost:3001/blog/'

    const deletePost = async (id) => {
        try {
            // setup axios call to hit api /blog/:id
            await axios.delete(`${apiUrl}${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    // setup list of tags
    let tags
    if(props.tags) {
        tags = props.tags.map((tag, index) => {
            return (
                <button key={index} className="btn btn-outline-secondary btn-sm ml-2">{tag}</button>
            )
        })
    }

    return (
        <div className="container">
            <h2>{ props.title }</h2>
            <h3 className="text-muted">By: { props.author }</h3>
            <div>Tags: { tags }</div>
            <p>{ props.content }</p>
            <p><a href={`/edit/${props._id}`}>Edit</a>  <a href="/" onClick={() => deletePost(props._id)}>Delete</a></p>
        </div>
    )
}