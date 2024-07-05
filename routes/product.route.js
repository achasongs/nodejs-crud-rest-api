const express = require('express');
const Product = require("../models/product.model.js"); 
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct, deleteAllProducts} = require("../controllers/product.controllers.js");


//get all products or single product
router.get('/', getProducts);
router.get('/:id', getProduct);


//create Product
router.post('/', createProduct);


//update Product
router.put('/:id', updateProduct);


//delete a Product
router.delete('/:id', deleteProduct);
router.delete('/', deleteAllProducts);


module.exports = router;