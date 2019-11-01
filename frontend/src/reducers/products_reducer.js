import {RECEIVE_PRODUCTS, RECEIVE_NEW_PRODUCT} from '../actions/product_actions';

const ProductsReducer = (state = {all: {}, new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            newState.all = action.products.data;
            console.log(newState);
            return newState;
        case RECEIVE_NEW_PRODUCT:
            newState.new = action.product.data;
            return newState;
        default:
            return state;
    } 
}

export default ProductsReducer;