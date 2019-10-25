// const rootDir = require('../util/path');
// const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');

// /admin/add-product => GET
// GET to render the page
// router.get('/add-product', (req, res, next) => {
//   // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'));
//   // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
//   res.render('add-product', {
//     pageTitle: 'Add Product',
//     path: '/admin/add-product',
//     activeAddProduct: true,
//     formsCSS: true,
//     productCSS: true
//   });
// });

// /admin/add-product => GET
// Render Add Product page
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
// POST to submit the form
router.post('/add-product', adminController.postAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/edit-product => PUT
router.get('/edit-product', adminController.getEditProduct);

// exports.routes = router;
// exports.products = products;

module.exports = router;
