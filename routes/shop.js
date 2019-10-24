const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// GET to render the shop.html page
router.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

  const products = adminData.products;
  res.render('shop', {
    products: products,
    pageTitle: 'My Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
