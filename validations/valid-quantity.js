const validQuantity = num => {
    return typeof num === 'number' && num > 0;
}

module.exports = validQuantity;