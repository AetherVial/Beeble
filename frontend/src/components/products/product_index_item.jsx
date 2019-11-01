import React from 'react';

class ProductIndexItem extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li>Product Name: {this.props.product.name}</li>
                    <li>Product Description: {this.props.product.description}</li>
                    <li>Quantity: {this.props.product.quantity}</li>
                </ul>
                <br></br>
            </div>
        )
    }
}

export default ProductIndexItem;