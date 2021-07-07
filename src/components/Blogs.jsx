import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: "#af5ec0"
  },
}));

const Blogs = (props) => {
  const classes = useStyles()

    const postData = props.blog.map((post, index) => {
        return (
          <div key={index}>
            <h4> <Link to={`/blog/${post._id}`}>{post.title}</Link> </h4>
          </div>
        )
      })
    
    return(
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Box my={5} border={8} alignItems="center" width="50%" borderRadius={16} p={1} className={classes.box}>
          <Typography variant="h4">
            Blogs
          </Typography>
          <Grid container direction="column" justifyContent="space-around" alignItems="center">
            <Typography variant="h6">
             {postData}
            </Typography>
          </Grid>
        </Box>
      </Grid>
    )
}

export default Blogs