import React from 'react'		

const Blogs = (props) => {
    // console.log(props.blog)
    let blogData = props.blog
    // console.log(blogData)
    if(blogData){
        blogData = blogData.map((each, index) => {
            return (
                <li key={ index }>
                    <h4>{ each.title }</h4>
                    <h5>By: { each.author }</h5>
                    <p><a href={`/blog/${each._id}`}>Read further!</a></p>
                </li>
            )
        })
    }

    // console.log(props)

    return (
        <div>
            <ul>
                { blogData }
            </ul>
        </div>
    )
}

export default Blogs