import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Blog = () => {
    const [apiRes, setApiRes] = useState(null)
    const [apiUrl, setApiUrl] = useState('http://localhost:3001/blog')

    useEffect(() => {
        async function getPosts() {
            try {
                const response = await axios.get(apiUrl)
                setApiRes(response.data.allPosts)
            } catch (error) {
                console.log(error)
            }
        }
        
        getPosts()
    }, [])

    console.log(apiRes)
    const postList = apiRes.map(each => {
        return (
            <li>
                <h4>{ each.title }</h4>
                <h5>{ each.author }</h5>
            </li>
        )
    })

    return (
        <div>
            <ul>
                { postList }
            </ul>
        </div>
    )
}

export default Blog