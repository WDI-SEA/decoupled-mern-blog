import {
  useParams
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'
import axios from 'axios'

  const Posts = (props) => {
    const {id} = useParams()

    const [post, setPost] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `http://localhost:3001/blog/${id}`
          const response = await axios.get(url)
          // const postTitle = response.map((single, index) => {
          //   if(single._id === id)
          //   {
          //     return(
          //       single
          //     )
          //   }
          // })
          setPost(response.data)
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])

    // if(!post.name) return <h1>{`I have never heard of a service called ${props.match.params.id} before 🤔`}</h1>
    return(
      <div>
       <h3>{post.name}</h3>
  
       <h6>{post.title}</h6>
  
       <p>{post.content}</p>
      </div>
    )
  }

  export default Posts