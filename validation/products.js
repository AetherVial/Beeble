const Validator = require('validator');
const validProduct = require('./valid-product');


module.exports = function validateProductInput(data) {
    let errors  = {};

    data.product = validProduct(data.product) ? data.product : '';

    if(!Validator.isLength(data.name, {min: 1, max: 80} )) {
        error.name = "Product Name must be between 1 and 80 characters";
    }

    if (!Validator.isLength(data.description, { min: 1, max: 140 })) {
        error.description = "Product Description must be between 1 and 140 characters";
    }

    if (!Validator.isNumeric(data.price, { min: 0 })) {
        error.price = "Product Price must be positive";
    }

}