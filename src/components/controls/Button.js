import React from 'react'
import {Button as MuiButton, makeStyles} from '@material-ui/core'

const Button = (props) => {
    const {text,size,color,variant,onClick,...other}=props
    return (
        <MuiButton variant={variant||'contained'}
        size={size}
        color={color}
        onClick={onClick}
        {...other}>
            {text}
        </MuiButton>
    )
}

export default Button
