import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {
    const [content, setContent] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [postId, setPostId] = useState("")
    const apiUrl = 'http://localhost:3001/blog/'

    useEffect(() => {
        console.log(props)
    })

    const putEdit = async (e) => {
        e.preventDefault()
        console.log(e.target)
        await axios.put(`${apiUrl}${props._id}`, content, {headers: {'Content-Type': 'application/json'} })
        setRedirect(true)
        setPostId(`/blog/${props._id}`)
    }

    if(redirect) {
        return <Redirect to={postId} />
    }

    return (
        <div>
            <form>
                <label>
                    Change content to:
                    <textarea type="text" name="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                </label>
                <button type="submit" onClick={(e) => putEdit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default Edit