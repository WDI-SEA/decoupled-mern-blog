import { Link as RouterLink} from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import PrettyLink from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(() => ({
    toolbarLink: {
        flexshrink: 0,
        flex: 1,
    },
    
}))

export default function Blog(props) {
    const classes = useStyles()
    const renderedBlog = props.blogData.map((posts) => {
        return (
            <ListItem alignItems='flex-start' key={posts._id} style={{ listStyle: 'none' }}>
                <ListItemAvatar>
                    <Avatar alt='Author Pic' src="https://picsum.photos/200" />
                </ListItemAvatar>
                <ListItemText>
                    <RouterLink to={`/blog/${posts._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <Typography variant='h6' gutterBottom>{posts.title || 'No title'}</Typography>
                    </RouterLink>
                    <Typography>{posts.subject}</Typography>
                    <Divider />
                </ListItemText>
            </ListItem>
        )
    })

    return(
        <div>
            <Toolbar>
                <PrettyLink
                    noWrap
                    className={classes.toolbarLink}
                    align="center"
                    textdecoraction="none"
                >
                <RouterLink to='/blog/new' style={{ textDecoration: 'none', color: 'black' }} >Create New Blog Post</RouterLink>
                </PrettyLink>
            </Toolbar>
            <Grid container spacing={5} item xs={12} md={8}>
                    <ul>
                        {renderedBlog}
                    </ul>
            </Grid>
        </div>
    )
}