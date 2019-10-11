var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order');


/* GET home page. */
router.get('/', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize){
        productChunks.push(docs.slice(i, i + chunkSize))
    }
    res.render('shop/index', { title: 'Internal Inventory System', products: productChunks, successMsg: successMsg, noMessages: !successMsg});
  });
});
router.get('/add-to-cart/:id', function(req, res, next){
   var productId = req.params.id;
   var cart = new Cart(req.session.cart ? req.session.cart : {});

   Product.findById(productId, function(err, product) {
     if (err) {
       return res.redirect('/');
     }
     cart.add(product, product.id);
     req.session.cart = cart;
     console.log(req.session.cart);
     res.redirect('/');
   });
});

router.get('/reduce/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/orders-cart');

});

router.get('/remove/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.removeItem(productId);
  req.session.cart = cart;
  res.redirect('/orders-cart');

});

router.get('/orders-cart', function(req, res, next){
  if (!req.session.cart){
    return res.render('shop/orders-cart', {products: null});
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/orders-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});

});

router.get('/checkout', isLoggedIn, function(req, res, next){
  if (!req.session.cart) {
    return res.redirect('/orders-cart');
  }
  var cart = new Cart(req.session.cart);
  
  res.render('shop/checkout', {total: cart.totalPrice});

});
router.post('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/orders-cart');
  } 
  var cart = new Cart(req.session.cart);
  var order = new Order({
     user: req.user,
     cart: cart,
     name: req.body.name,
     email: req.body.email,
     department: req.body.department,
     branch: req.body.branch,
     timestamp: req.body.timestamp,
     status: req.body.status  
         
  });

  order.save(function(err, result){
  req.flash('success', 'Order has been submitted for Approval');
  req.session.cart = null;
  res.redirect('/');
  });

});  


router.get('/approve', function(req, res, next) {
  Order.find(function(err, orders){
    var cart;
      orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();   
      });
  
    res.render('approval/approve',{orders : orders});
  });
});



module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  req.session.oldurl = req.url;
  res.redirect('/user/signin');
  
}

