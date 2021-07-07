import { makeStyles } from '@material-ui/core/styles'
import {Toolbar, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        flexShrink: 0,
    },
}))

export default function Header() {
    const classes = useStyles()
    
    return(
        <div>
            <Toolbar className={classes.toolbar}>
                <Typography
                    component="h2"
                    variant="h5"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Traveling the World, One day Off at a Time!
                </Typography> 
            </Toolbar>
        </div>
    )
}