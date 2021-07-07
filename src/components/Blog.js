import React from 'react'

export default function Blog(props) {
    // console.log(props.tags)
    const oneTag = (post) => post.tags.map(tag => {
                return (
                    <li className="tags">{tag}</li>
                )
            })


    // manipulate the response
    const renderPosts = props.posts.map((post, index) => {
        return (

            <div key={index}>  
                 <h3><a href={`/blog/${post._id}`}>{post.name}</a></h3>
                <h6>{ oneTag(post) }</h6>
            </div>
        )
    })

    return (
        <div>
            {renderPosts}
        </div>
    )
}

