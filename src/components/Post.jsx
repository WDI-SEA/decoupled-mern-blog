import {
  useParams
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'
import axios from 'axios'

  const Posts = () => {
    const {id} = useParams()

    const [post, setPost] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `http://localhost:3001/blog/${id}`
          const response = await axios.get(url)
        
          setPost(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])

    return(
      <div>
       <h3>{post.name}</h3>
  
       <h2>{post.title}</h2>
  
       <p>{post.content}</p>
      </div>
    )
  }

  export default Posts