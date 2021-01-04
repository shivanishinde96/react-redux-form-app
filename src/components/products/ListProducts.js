import { makeStyles, Paper, Card, CardActions, CardContent, Typography, CardMedia, CardActionArea } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FormProduct from './FormProduct'
import { Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Button from '../../components/controls/Button'
import { connect } from 'react-redux'
import { addProduct, listAllProducts, deleteProduct, editProduct } from '../../actions'
import PopUp from '../controls/PopUp'
import ConfirmDialog from '../controls/ConfirmDialog'
import laptop from '../../laptop.jpg'

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(5),
    },
    button1: {
        backgroundColor: '#AEB6BF',
        borderRadius: '25px'
    },
    addbutton: {
        position: 'absolute',
        right: '70px',
        top: '90px',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            top: '75px',
            right: '20px'
        },
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            top: '80px',
            right: '50px'
        }
    },
    gridcontainer: {
        marginTop: '10px'
    },
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
        position: 'absolute',
        right: '30px',
        top: '155px',
        [theme.breakpoints.down('sm')]: {
            position: 'absolute',
            right: '10px',
            top: '155px'
        }
    }
}))


const ListProducts = (props) => {
    const [openPopUp, setOpenPopUp] = useState(false)
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', confirmationmsg: 'Confirmation' })
    const [edited, setEdited] = useState(null)
    const [counter, setCounter] = useState(0)
    const classes = useStyles()
    const addOrEdit = (product, resetForm) => {
        if (product.id == 0) {
            props.addProduct(product)
            setCounter(counter + 1)
        }
        else {
            props.editProduct(product.id, product)
        }
        resetForm()
        setOpenPopUp(false)
    }
    const renderProduct = (id) => {
        props.deleteProduct(id)
        setConfirmDialog(false)
        if (counter > 0) {
            setCounter(counter - 1)
        }
        else {
            setCounter(0)
        }
    }
    const openInPopUp = (product) => {
        setEdited(product)
        setOpenPopUp(true)
    }
    useEffect(() => {
        props.listAllProducts()
    }, [])
    return (
        <>
            <Paper className={classes.pageContent}>
                <Typography variant='h5' component='h5'>All Products({counter})</Typography>
                <Button text='Add Product'
                    variant='outlined'
                    startIcon={<AddIcon />}
                    className={classes.addbutton}
                    onClick={() => setOpenPopUp(true)} />


                <Grid container spacing={2} className={classes.gridcontainer}>
                    {props.products && props.products.map((product, index) => {
                        return <Grid item xs={12} sm={6} md={4} lg={3} key={index + 1} className={classes.griditem}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Laptop"
                                        height="140"
                                        image={laptop}
                                        title="Laptop"
                                    />
                                    <CardContent>
                                        <Typography variant='h3' component='h3' className={classes.title} color="textSecondary" gutterBottom>
                                            Product Name : {product.name}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary" variant='p' >
                                            Product Price : {product.price}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            Product Category : {product.category}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button text='Edit' variant='outlined'
                                        onClick={() => openInPopUp(product)}
                                        className={classes.button1} />
                                    <Button text='Delete' variant='outlined'
                                        onClick={() => setConfirmDialog({
                                            isOpen: true, onConfirmDialog: () => renderProduct(product.id),
                                            title: `Are you sure you want to delete this product? : ${product.name}`
                                        })}
                                        className={classes.button1}
                                    />
                                </CardActions>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Paper>

            <PopUp openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}
                title='Product Form'>
                <FormProduct
                    addOrEdit={addOrEdit}
                    edited={edited}
                    title='Hello'
                />
            </PopUp>
            <ConfirmDialog title={confirmDialog.title}
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
                confirmationmsg={confirmDialog.confirmationmsg}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return { products: Object.values(state.products).reverse() }
}

export default connect(mapStateToProps, { listAllProducts: listAllProducts, addProduct: addProduct, deleteProduct: deleteProduct, editProduct: editProduct })(ListProducts)
