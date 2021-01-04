import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Button from './Button'
import {deleteProduct} from '../../actions'
import {connect} from 'react-redux'

const useStyles=makeStyles(theme=>({
    dialogContent:{
        textAlign:'center'
    },
    dialogAction:{
        justifyContent:'center'
    },
    dialogTitle:{
        textAlign:'center'
    }
}))

const ConfirmDialog = (props) => {
    const { title, confirmDialog, setConfirmDialog } = props
    const classes=useStyles()
    return (
        <Dialog open={confirmDialog.isOpen} className={{paper:classes.paper}}>
            <DialogTitle>
                <Typography variant='h5' className={classes.dialogTitle}>
                    Confirmation
                </Typography>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>
                    {title}
                </Typography>
                <Typography variant='subtitle2'>
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Button
                    text='No'
                    color='default'
                    onClick={() => setConfirmDialog({isOpen:false})}>
                </Button>
                <Button
                    text='Yes'
                    onClick={confirmDialog.onConfirmDialog}>
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default connect(null,{deleteProduct:deleteProduct})(ConfirmDialog)
