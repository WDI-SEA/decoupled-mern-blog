import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core'

export default function Welcome (props) {
    return (
    <Box
        display="flex"
        alignItems="flex"
        >
            <Box m="auto">
            <Box
            bgcolor="pink">
            {props.welcome}
            </Box>
            <Button variant="contained" color="secondary"><Link to={'/keebs'}><h3>The Keeb List</h3></Link></Button>
        </Box>
    </Box>
    )
}