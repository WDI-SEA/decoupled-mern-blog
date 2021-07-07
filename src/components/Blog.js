import React from 'react'
import { Card } from 'react-bootstrap'
import './Blog.css'

const Blog = (props) => {
    let listItems
    if(props.posts){
        listItems = props.posts.map((each, index) => {
            // get a list of tags from each article
            let tags = each.tags.map(tag => {
                return (
                    <li className="btn btn-outline-secondary btn-sm">{tag}</li>
                )
            })

            // return a card for each article
            return (
                <Card className="mb-3" key={index}>
                    <Card.Body>
                        <Card.Title>{ each.title }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">By: { each.author }</Card.Subtitle>
                        <Card.Text className="truncate">{ each.content }</Card.Text>
                        <Card.Link href={`/post/${each._id}`}>Read More...</Card.Link>
                    </Card.Body>
                    <Card.Footer>
                        Tags: {tags}
                    </Card.Footer>
                </Card>
            )
        })
    }

    return (
        <div>
            { listItems }
        </div>
    )
}

export default Blog