import React from 'react'		

const Blogs = (props) => {
    let postData
    if(props.posts){
        postData = props.posts.map((each, index) => {
            return (
                <li key={ index }>
                    <h4>{ each.title }</h4>
                    <h5>By: { each.author }</h5>
                    <p><a href={`/post/${each._id}`}>Read further!</a></p>
                </li>
            )
        })
    }

    console.log(props)

    return (
        <div>
            <ul>
                { postData }
            </ul>
        </div>
    )
}

export default Blogs