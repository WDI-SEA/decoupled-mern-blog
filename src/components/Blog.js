import React from 'react'

export default function Blog(props) {
    // manipulate the response
    const renderPosts = props.posts.map((post, index) => {
        return (
            <div key={index}>  
                 <h3><a href={`/blog/${post._id}`}>{post.name}</a></h3>
                <h6>{post.tags}</h6>
            </div>
        )
    })

    return (
        <div>
            {renderPosts}
        </div>
    )
}

