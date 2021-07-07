import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function New(props) {
    const history = useHistory()
    const [newBlogPost, setNewBlogPost] = useState({
        name: '',
        title: '',
        subject: '',
        content: ''
    })

    async function handleSave(event) {
        event.preventDefault()
        const res = await axios.post('http://localhost:3001/blog', newBlogPost)
        props.refresh()
        history.push('/blog')
    }

    return(
        <div>
            <form>
                <input type="text" name="name" value={newBlogPost.name} onChange={(event) => {
                    setNewBlogPost({...newBlogPost, name:event.target.value})
                }}/>
                <input type="text" name="title" value={newBlogPost.title} onChange={(event) => {
                    setNewBlogPost({...newBlogPost, title:event.target.value})
                }} />
                <input type="text" name="subject" value={newBlogPost.subject} onChange={(event) => {
                    setNewBlogPost({...newBlogPost, subject:event.target.value})
                }}/>
                <input type="text" name="content" value={newBlogPost.content} onChange={(event) => {
                    setNewBlogPost({...newBlogPost, content:event.target.value})
                }}/>
                <button onClick={(event) => handleSave(event)} >Save</button>
            </form>
        </div>
    )
}