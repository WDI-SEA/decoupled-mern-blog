import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const Edit = (props) => {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const apiUrl = 'http://localhost:3001/blog/'

    useEffect(() => {
        console.log(props)
        if(props.title) {
            setTitle(props.title)
            setContent(props.content)
        }
    }, [props])

    const putEdit = async (e) => {
        e.preventDefault()
        console.log(e.target)
        await axios.put(`${apiUrl}${props._id}`, {
            title: title,
            content: content
        })
    }

    return (
        <div>
            <h2>Edit Post</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Article Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(e) => putEdit(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Edit