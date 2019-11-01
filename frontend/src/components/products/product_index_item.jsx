import React from 'react';


class ProductIndexItem extends React.Component {

    render() {
        let img = this.props.product.image ? this.props.product.image : require("../../assets/image-placeholder.png");
        return (
                <tr>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.description}</td>
                    <td>{this.props.product.quantity}</td>
                    <td>
                        <img src={img} alt="hi beeble"/>
                    </td>
                </tr>
        )
    }
}

export default ProductIndexItem;