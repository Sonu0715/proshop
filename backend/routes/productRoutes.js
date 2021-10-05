const express = require('express')
const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

const router = express.Router()

//@des  Fetch all products
//@route Get/api/products
//@access public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    // throw new Error('some error')
    res.json(products)
  })
)
//@des  Fetch single product
//@route Get/api/products/:id
//@access public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('Product Not Found')
    }
  })
)

module.exports = router
