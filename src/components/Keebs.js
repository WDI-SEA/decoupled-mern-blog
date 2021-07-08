
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Box } from '@material-ui/core'

export default function Keebs (props) {
    console.log(props, "HI")
    const showKeebs = props.moarKeebs.map ( show => {
        return <Button><Link to={`/keebs/${show._id}`}>{show.name}</Link></Button>
    })

    return (
        <Box
        display="flex"
        >
            <Box m="auto">
            <h4>The Latest Custom Keyboards</h4>
            <ButtonGroup
                orientation="vertical"
                color="primary">
                {showKeebs}
            </ButtonGroup>
            </Box>
        </Box>
    )
}
