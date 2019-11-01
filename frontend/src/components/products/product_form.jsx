import React from 'react';

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            quantity: "",
            image: "",
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addProduct(this.state)
            .then(() => this.props.fetchProducts());
        this.setState({
            name: "",
            description: "",
            quantity: "",
            image: ""
        })
    }

    handleUpload(e) {

    }

    render() {
        return(
            <React.Fragment>
                <form> Make a new Item!
                    <br></br>
                    <label> Name:
                        <input type="text" onChange={this.handleInput('name')}/>
                    </label>
                    
                    <br></br>
                    <label> Description:
                        <br></br>
                        <textarea cols="40" rows="10" onChange={this.handleInput('description')} />
                    </label>
                    <br></br>
                    <label> Quantity:
                        <input type="text" onChange={this.handleInput('quantity')} />
                    </label>
                    <br></br>
                    <label for="avatar">Choose a picture:</label>

                    <input type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg"
                        onChange={this.handleUpload}/>
                    <br></br>
                    <button onClick={this.handleSubmit}>Add new Product</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ProductForm;