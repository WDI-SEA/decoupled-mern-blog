import {Paper} from "@material-ui/core"
import { TextField } from "@material-ui/core"

export default function Description(props){
    console.log(props, "DESCRIP PROPS")
    return(
        <Paper>
            <h3>{props.name}</h3>
            <p>Description: {props.description}</p> <span>Rating: {props.rating}</span>
        </Paper>
    )
}