import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Edit = (props) => {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
   
    const apiUrl = 'http://localhost:3001/edit/'

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
        console.log("this is title: " + title)
        console.log("this is content: " + content)
        await axios.put(`${apiUrl}${props._id}`, {
            title: title,
            content: content
        })
    }

    const newTitle = async (e) => {
      setTitle(e.target.value)  
    }
    const newContent = async (e) => {
      setContent(e.target.value)  
    }
    const newAuthor = async (e) => {
      setAuthor(e.target.value)  
    }

    return (
      <div className="container pt-3 newPost">
      <h1>Edit Blog Post</h1>
      
        <div className="wrapper pt-3">
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    {/* <input type="text" className="form-control" name={title}/> */}
                    <input value={title} onChange={e => newTitle(e)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="content">Author: </label>
                    {/* <textarea className="form-control" name="content"/> */}
                    <input value={author} onChange={e => newAuthor(e)}/>
                </div>
              
                <div className="form-group">
                    <label htmlFor="content">Content: </label>
                    {/* <textarea className="form-control" name="content"/> */}
                    <input value={content} onChange={e => newContent(e)}/>
                </div>

                <button type="submit" onClick={(e) => putEdit(e)}>
                    Submit
                </button>
            </form>
        </div>
    </div>
    )
}


export default Edit