import { useState, useEffect } from 'react'
import axios from 'axios'
import Post from './Post'

export default function Blog(props) {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    const getPosts = async () => {
      try{
        let blogPosts = {}
        if(props.match.params.id) {
          blogPosts = await axios.get(`http://localhost:3001/blog/${props.match.params.id}`)
          setPosts([blogPosts.data.post])
        } else {
          blogPosts = await axios.get('http://localhost:3001/blog')
          setPosts(blogPosts.data)
        }
      } catch(err) {
        console.log(err)
      }
    }
    getPosts() 
  }, [])
  const renderPosts = posts.map((post) => {
    console.log(post)
    return (
      <Post key={post._id} post={post} />
    )
  })
  return(
    <div>
      <h2>this is a blog</h2>
      {renderPosts}
    </div>
  )
}