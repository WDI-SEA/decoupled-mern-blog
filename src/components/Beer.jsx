import {Link} from 'react-router-dom'
import React from 'react';
import {Paper} from '@material-ui/core'
import {List} from '@material-ui/core'
import {Divider} from '@material-ui/core'
import {ListItem} from '@material-ui/core'
import {ListItemText} from '@material-ui/core'
 
export default function Beer(props) {
    return (
        <List >
            {props.beer.map(item => (
                <ListItem>
                    <ListItemText>
                        <span>{item.name}</span> 
                        <br></br>
                        <Link to={`/beer/${item._id}`}>Learn More</Link>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}