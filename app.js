const path = require('path');
const express = require('express');

// const expressHbs = require('express-handlebars');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Set template engine

// PUG
// app.set('view engine', 'pug');

// HANDLEBARS
// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
// app.set('view engine', 'hbs');

// EJS
app.set('view engine', 'ejs');

app.set('views', 'views');

// Middleware
app.use(express.urlencoded({ extended: false }));

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '' });
});

// Port
app.listen(3000, () => console.log('Server running'));
