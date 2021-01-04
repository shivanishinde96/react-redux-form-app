import { Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core'
import React from 'react'
import Button from './Button'
import CancelIcon from '@material-ui/icons/Cancel'

const PopUp = (props) => {
    const { title, children, openPopUp, setOpenPopUp } = props
    return (
        <Dialog open={openPopUp} maxWidth='sm'>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Button
                        text='X'
                        onClick={() => setOpenPopUp(false)}>
                        <CancelIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}

export default PopUp
