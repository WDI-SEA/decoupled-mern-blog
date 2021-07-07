import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
export default function Edit(props) {
    const history = useHistory()
    const [editBlogPost, setEditBlogPost] = useState({
        name: '',
        title: '',
        subject: '',
        content: ''
    })
    
    useEffect(() => {
        if(props.post) {
            setEditBlogPost({
                name: props.post.name,
                title: props.post.title,
                subject: props.post.subject,
                content: props.post.content
            })
        }
    },[props.post])
    
    if(!props.post) {
        return(
            <div>
                <h1>
                    Just Give Me A Second!
                </h1>
            </div>
        )
    }

    async function handleSave(event) {
        event.preventDefault()
        await axios.put(`http://localhost:3001/blog/edit/${props.post._id}`, editBlogPost)
        props.refresh()
        history.push('/blog')
    }

    async function handleDelete() {
        await axios.delete(`http://localhost:3001/blog/${props.post._id}`)
        props.refresh()
        history.push('/blog')
    }
    
    return(
        <div>
            <button onClick={() =>{handleDelete()}}>Delete Post</button>
            <form>
                <input type='text' name='name' value={editBlogPost.name} onChange={(event) => {
                    setEditBlogPost({...editBlogPost, name:event.target.value})
                }}/>
                <input type='text' name='title' value={editBlogPost.title} onChange={(event) => {
                    setEditBlogPost({...editBlogPost, title: event.target.value})
                }}/>
                <input type='text' name='subject' value={editBlogPost.subject} onChange={(event) => {
                    setEditBlogPost({...editBlogPost, subject:event.target.value})
                }} />
                <input type='text' name='content' value={editBlogPost.content} onChange={(event) => {
                    setEditBlogPost({...editBlogPost, content:event.target.value})
                }} />
                <button onClick={(event) => {handleSave(event)}}>Save</button>
            </form>
        </div>
    )
}