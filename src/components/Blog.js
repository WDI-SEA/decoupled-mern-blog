import React from 'react'

const Blog = (props) => {
    let listItems
    if(props.posts){
        listItems = props.posts.map((each, index) => {
            return (
                <li key={index}>
                    <h4>{ each.title }</h4>
                    <h5>By: { each.author }</h5>
                    <p><a href={`/post/${each._id}`}>Read More...</a></p>
                </li>
            )
        })
    }

    console.log(props)

    return (
        <div>
            <ul>
                { listItems }
            </ul>
        </div>
    )
}

export default Blog