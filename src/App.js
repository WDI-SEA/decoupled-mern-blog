import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'
import axios from 'axios'
import Blogs from './components/Blogs'
import Home from './components/Home'
import Post from './components/Post'

//material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#03fcba"
  },
  image: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-main-drag-haleiwa-road-north-shore-hawaii-collection-art-reid-callaway.jpg')`,
    height: "250px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  title: {
    margin: theme.spacing(1),
    }
}));


function App() {

  const classes = useStyles()


  const [posts, setPosts] = useState([])

    useEffect (() => {
      async function getPost() {
        try{
          const url = `http://localhost:3001/blog`
          const response = await axios.get(url)
          setPosts(response.data.blog)
          console.log(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getPost()
    }, [])

  return (
    <div className="App">
      <Router>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Typography variant="h5">
                <Link to='/'>Home</Link>
              </Typography>
              <Typography variant="h5">
                <Link to='/blog'>Blog</Link>
              </Typography>
            </Grid> 
          </Toolbar>
        </AppBar>

        <Box className={classes.image}>
          <Box>Ken's Blog</Box>
        </Box>

        <Route
          exact path='/'
          render={() => <Home />}
          />

        <Route
          exact path='/blog'
          render={() => <Blogs blog={posts}/>}
          />

        <Route path='/blog/:id'>
            <Post />
        </Route>

      </Router>
    </div>
  )
}

export default App;