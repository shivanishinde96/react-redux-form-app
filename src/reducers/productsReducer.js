import {ADD_PRODUCT,DELETE_PRODUCT,LIST_ALL_PRODUCTS,EDIT_PRODUCT} from '../actions/types'
import _ from 'lodash'

const productsReducer=(state={},action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return {...state,[action.payload.id]:action.payload}
        case LIST_ALL_PRODUCTS:
            return {...state,..._.mapKeys(action.payload,'id')}
        case EDIT_PRODUCT:
            return {...state,[action.payload.id]:action.payload}
        case DELETE_PRODUCT:
            return _.omit(state,action.payload)
        default:
            return state
    }
}

export default productsReducer