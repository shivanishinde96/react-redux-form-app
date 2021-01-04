import React from 'react'
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#5733ff',
        transform:'translateZ(0)'
    },
    title: {
        color: '#000'
    }
})

const Header=()=>{
    const classes=useStyles()
    return(
        <AppBar position='static' className={classes.root}>
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" className={classes.title}>
                                Redux App
                        </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
    )
}

export default Header