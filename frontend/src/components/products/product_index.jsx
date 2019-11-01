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
                <table>
                    <thead>
                        <tr>
                            <td>Product Name</td>
                            <td>Description</td>
                            <td>Quantity</td>
                            <td>Image</td>
                        </tr>
                    </thead>
                </table>
            )
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <td>Product Name</td>
                            <td>Description</td>
                            <td>Quantity</td>
                            <td>Image</td>
                        </tr>
                    </thead>
                    <tbody>{products}</tbody>
                
                </table>
            )
        }
            
        
    }
}

export default ProductIndex;