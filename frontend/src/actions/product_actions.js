import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCT";
export const RECEIVE_NEW_PRODUCT = "RECEIVE_NEW_PRODUCT";

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

const receiveNewProduct = product => ({
    type: RECEIVE_NEW_PRODUCT,
    product
})

export const fetchProducts = () => dispatch => (
    ProductApiUtil.getProducts()
        .then(products => dispatch(receiveProducts(products)))
        .catch(err => console.log(err))
);

export const addProduct = data => dispatch => (
    ProductApiUtil.addProduct(data)
        .then(product => dispatch(receiveNewProduct(product)))
        .catch(err => console.log(err))
);