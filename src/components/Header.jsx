import { Typography } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function Header() {
    return(
        <div style ={{paddingTop:56}}>
            <AppBar style={{ position: 'fixed', top: 0 }}>
                <Toolbar>
                    <Typography color="inherit">BEER BLOG</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )

}
