import React from 'react'


export default function Post(props) {
    console.log(props)
    const oneTag = props.tags.map(tag => {
        return (
            <li className="tags">{tag}</li>
        )
    })

    return (
        <div>
            <h2>{ props.name }</h2>
            <ul>{ oneTag }</ul>
            <p>{ props.content }</p>
        </div>
    )
}
