import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      margin: 'auto'
    },
    title: {
      fontSize: 14,
    }
  });






export default function KeebsDetail (props) {
    const classes = useStyles()
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" component="p">
            {props.content}
          </Typography>
        </CardContent>
      </Card>
    );
}


// export default function KeebsDetail (props) {
//     return (
//         <Box
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         alignContent="center"
//         >
//             <Box m="auto">
//             <h3>{props.name}</h3>
//             <p>{props.content}</p>
//             </Box>
//         </Box>
//     )
// }