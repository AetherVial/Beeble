const Validator = require('validator');
const validText = require('./valid-text');
const validQuantity = require('./valid-quantity');


module.exports = function validateProductInput(data) {
    let errors  = {};

    data.name = validText(data.name) ? data.name : "";
    data.description = validText(data.description) ? data.description : "";

    if(!Validator.isLength(data.name, {min: 1, max: 80} )) {
        error.name = "Product Name must be between 1 and 80 characters";
    }

    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name must exist'
    }

    if (!Validator.isLength(data.description, { min: 1, max: 140 })) {
        error.description = "Product Description must be between 1 and 140 characters";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'Description must exist'
    }

    if (!validQuantity(parseInt(data.quantity))) {
        errors.quantity = 'Quantity must be more than 0';
    }

    return {
        errors, 
        isValid: Object.keys(errors).length === 0
    }
}