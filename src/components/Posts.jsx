import { 
    useState, 
    useEffect 
  } from 'react'
  import axios from 'axios'

  const Posts = () => {

    const [post, setPost] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `http://localhost:3001/blog`
          const response = await axios.get(url)
          setPost(response.data.blog)
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])
    
    const postData = post.map((post, index) => {
      return (
        <div key={index}>
          <h3> Name: {post.name} </h3>
          <h4> Title: {post.title} </h4>
          <p> Content: {post.content} </p>
        </div>
      )
    })
 
    return (
      <div>
        {postData}
      </div>
    )
  }

  export default Posts