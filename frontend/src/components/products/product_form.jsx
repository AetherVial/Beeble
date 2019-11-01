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
        console.log(this.state)
        this.setState({
            name: "",
            description: "",
            quantity: "",
            image: ""
        })
    }

    uploadFile(image, signedRequest, url) {
        const xhr = new XMLHttpRequest();
        xhr.open('PUT', signedRequest);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.setState({ image: url })
                }
                else {
                    alert('Could not upload image.');
                }
            }
        };
        xhr.send(image);
    }

    getSignedRequest(image) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `/sign-s3?image-name=${image.name}&image-type=${image.type}`);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    this.uploadFile(image, response.signedRequest, response.url);
                }
                else {
                    alert('Could not get signed URL.');
                }
            }
        };
        xhr.send();
    }

    handleUpload(e) {
        const file = e.currentTarget.files[0];
        if (file) {
            this.getSignedRequest(file);
        }
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
                    <label>Choose a picture:</label>

                    <input type="file" onChange={this.handleUpload}/>
                    <br></br>
                    <button onClick={this.handleSubmit}>Add new Product</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ProductForm;