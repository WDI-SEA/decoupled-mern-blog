import React from 'react'
import { Card } from 'react-bootstrap'

const Blog = (props) => {
    let listItems
    if(props.posts){
        listItems = props.posts.map((each, index) => {
            return (
                <Card className="mb-3" key={index}>
                    <Card.Body>
                        <Card.Title>{ each.title }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{ each.author }</Card.Subtitle>
                        <Card.Link href={`/post/${each._id}`}>Read More...</Card.Link>
                    </Card.Body>
                </Card>
                // <li key={index}>
                //     <h4>{ each.title }</h4>
                //     <h5>By: { each.author }</h5>
                //     <p><a href={`/post/${each._id}`}>Read More...</a></p>
                // </li>
            )
        })
    }

    console.log(props)

    return (
        <div>
            { listItems }
        </div>
    )
}

export default Blog