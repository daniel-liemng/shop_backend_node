// const path = require('path');
const express = require('express');
const router = express.Router();

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const shopController = require('../controllers/shop');

// GET to render the shop.html page
// router.get('/', (req, res, next) => {
//   // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));

//   // console.log('shop.js', adminData.products);
//   // res.sendFile(path.join(rootDir, 'views', 'shop.html'));

//   const products = adminData.products;
//   res.render('shop', {
//     products: products,
//     pageTitle: 'My Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;
