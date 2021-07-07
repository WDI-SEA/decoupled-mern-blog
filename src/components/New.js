// TODO: create form to submit new posts
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const New = () => {
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [tags, setTags] = useState("")
    const apiUrl = 'http://localhost:3001/blog/'

    const postNew = async (e) => {
        e.preventDefault()
        let tagsArr = tags.split(',')
        await axios.post(apiUrl, {
            author: author,
            content: content,
            title: title,
            tags: tagsArr
        })
    }

    return (
        <>
        <h2>Create New Post</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author Name</Form.Label>
                <Form.Control
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Article Title</Form.Label>
                <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTags">
                <Form.Label>Tags</Form.Label>
                <Form.Control
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
                <Form.Text className="text-muted">
                    Use commas to separate tags, and no spaces between tags.
                </Form.Text>
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

            <Button variant="primary" type="submit" onClick={(e) => postNew(e)} >
                Submit
            </Button>
        </Form>
        </>
    )
}

export default New