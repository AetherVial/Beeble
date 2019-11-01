import {connect} from 'react-redux';
import {addProduct, fetchProducts} from '../../actions/product_actions';
import ProductForm from './product_form';

const mstp = state => {
    return {}
}

const mdtp = dispatch => {
    return {
        addProduct: product => dispatch(addProduct(product)),
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mstp, mdtp)(ProductForm);

