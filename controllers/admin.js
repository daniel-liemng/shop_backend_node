const Product = require('../models/product')

// Get all Products
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      products: products,
      pageTitle: 'Admin Products List',
      path: '/admin/products'
    });
  });
}

// Add Product => GET
// Rende Add Product
exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  });
};

// Add Product => POST
// Post the form
exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
};

// Edit Product
exports.getEditProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    activeEditProduct: true,
    formsCSS: true,
    productCSS: true
  });
};

