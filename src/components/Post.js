import React from 'react'

const Post = (props) => {
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
            <p><a href={`/edit/${props._id}`}>Edit</a></p>
        </div>
    )
}

export default Post