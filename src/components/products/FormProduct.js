import { makeStyles, Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Input from '../../components/controls/Input'
import Select from '../controls/Select'
import * as productService from '../../services/productService'
import DatePicker from '../controls/DatePicker'
import Button from '../controls/Button'

const initialValues = {
    id: 0,
    name: '',
    description: '',
    quantity: '',
    price: '',
    dop: new Date(),
    category: ''
}
const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))
const FormProduct = (props) => {
    const classes = useStyles()
    const validate = () => {
        let errors = {}
        errors.name = values.name ? '' : 'This field is required'
        errors.description = values.description ? '' : 'This field is required'
        errors.quantity = values.quantity ? '' : 'This field is required'
        errors.price = values.price ? '' : 'This field is required'
        errors.category = values.category.length != 0 ? '' : 'This field is required'
        setErrors({
            ...errors
        })
        return Object.values(errors).every((formValues) => formValues == '')
    }

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const resetForm = () => {
        setValues(initialValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            props.addOrEdit(values, resetForm)
        }
    }
    useEffect(() => {
        if (props.edited != null) {
            setValues({
                ...props.edited
            })
        }
    }, [props.edited])
    return (
        <form onSubmit={handleSubmit} className={classes.root} autoComplete='off' >
            <Grid container>
                <Grid item>
                    <Input
                        name='name'
                        value={values.name}
                        label='Name'
                        onChange={handleChange}
                        error={errors.name} />
                    <Input
                        label='Description'
                        name='description'
                        value={values.description}
                        onChange={handleChange}
                        error={errors.description} />
                    <Input
                        label='Quantity'
                        name='quantity'
                        value={values.quantity}
                        onChange={handleChange}
                        error={errors.quantity} />
                    <Input
                        label='Price'
                        name='price'
                        value={values.price}
                        onChange={handleChange}
                        error={errors.price} />
                    <DatePicker
                        name='dop'
                        label='Date Of Purchase'
                        value={values.dop}
                        onChange={handleChange}
                    />
                    <Select
                        name='category'
                        label='Category'
                        value={values.category}
                        onChange={handleChange}
                        options={productService.getProductCollection()}
                        error={errors.category} />
                    <div>
                        <Button variant='contained'
                            color='primary'
                            size='large'
                            text='Submit'
                            type='submit'
                        />
                    </div>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormProduct
