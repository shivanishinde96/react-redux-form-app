import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiOutlinedInput-input': {
            padding: '15px 14px'
        }
    }
}))

const Input = (props) => {
    const classes = useStyles()
    const { name, label, value, onChange, error = null } = props
    return (

        <TextField variant='outlined' className={classes.root}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...(error && { error: true, helperText: error })} />

    )
}

export default Input
