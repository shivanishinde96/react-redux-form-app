import products from '../apis/products'
import {ADD_PRODUCT,LIST_ALL_PRODUCTS,DELETE_PRODUCT,EDIT_PRODUCT} from './types'

export const addProduct=(productDetails)=>{
    return async (dispatch)=>{
        const response=await products.post('/products',productDetails)
        dispatch({
            type:ADD_PRODUCT,
            payload:response.data
        })
    }
}

export const listAllProducts=()=>{
    return async (dispatch)=>{
        const response=await products.get('/products')
        dispatch({
            type:LIST_ALL_PRODUCTS,
            payload:response.data
        })
    }
}

export const editProduct=(id,productDetails)=>{
    return async (dispatch)=>{
        const response=await products.patch(`/products/${id}`,productDetails)
        dispatch({
            type:EDIT_PRODUCT,
            payload:response.data
        })
    }
}

export const deleteProduct=(id)=>{
    return async (dispatch)=>{
        await products.delete(`/products/${id}`)
        dispatch({
            type:DELETE_PRODUCT,
            payload:id
        })
    }
}