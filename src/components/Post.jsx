import {
  useParams
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'
import axios from 'axios'

import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#af5ec0"
  }
}));

  const Posts = () => {
    const classes = useStyles()
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
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Box my={5} border={8} alignItems="center" width="50%" borderRadius={16} p={1} className={classes.box}>
          <Typography variant="subtitle1">
            {post.name}
          </Typography>
          <Typography variant="h4">
            {post.title}
          </Typography>
          <Typography variant="subtitle1">
            {post.content}
          </Typography>
        </Box>
      </Grid>
    )
  }

  export default Posts