import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/product_actions';
import ProductIndex from './product_index';

const mstp = state => {
    return { products: Object.values(state.products.all)}
}

const mdtp = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mstp, mdtp)(ProductIndex);

