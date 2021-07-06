import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

export default function Blog(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try{
                let resPosts = {}
                if(props.match.params.id) {
                    resPosts = await axios.get(`http://localhost:8000/blog/${props.match.params.id}`)
                    setPosts([resPosts.data.post])
                } else {
                    resPosts = await axios.get('http://localhost:8000/blog')
                    setPosts(resPosts.data)
                }
            } catch(err) {
                console.log(err)
            }
        }
        
        getPosts()
        // eslint-disable-next-line
    },[])

    const postsToRender = posts.map((post) => {
        console.log(post)
        return (
            <Post key={post._id} post={post} />
        )
    })

    return (
        <div>
            {postsToRender}
        </div>
    )
}