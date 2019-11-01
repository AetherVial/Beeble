const express = require("express");
const router = express.Router();
const Product = require("../../models/Product")
const validateProductInput = require("../../validations/products");

router.get("/test", (req, res) => res.json({ msg: "This is the products route" }));

router.post("/", (req, res) => {
    
    const { errors, isValid } = validateProductInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        image: req.body.image,
    });

    newProduct.save().then(product => res.json(product))

})

router.get("/", (req, res) => {
    Product
        .find()
        .sort({date: -1})
        .then(products => res.json(products))
        .catch(error => res.status(400).json(err));
})

module.exports = router;