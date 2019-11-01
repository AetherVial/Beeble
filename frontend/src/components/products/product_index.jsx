import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        
        let products = this.props.products.map(product => {
            return <ProductIndexItem key={product._id} product={product}/>
        })
        if (products.length === 0) {
            return (
                <div>no items</div>
            )
        } else {
            return (
                <ul>{products}</ul>
            )
        }
            
        
    }
}

export default ProductIndex;