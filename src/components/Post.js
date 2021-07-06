import React from 'react'


export default function Post(props) {
    // console.log(props.tags)
    // const tags = props.tags.map((tag, index) => {
    //     return (
    //         <li key={index} className="tags">{tag}</li>
    //     )
    // })


    return (
        <div>
            <h2>{ props.name }</h2>
            {/* <ul>{ tags }</ul> */}
            <p>{ props.content }</p>
        </div>
    )
}
