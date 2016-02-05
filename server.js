// server.js
'use strict';

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var path = require('path');

// configure the view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// instruct express to server up static assets
app.use(express.static('public'));

// Serve index.jade
app.route('/')
    .get(function(req, res) {
      res.render('index');
    });

// CONFIGURE & START THE SERVER
// =============================================================================
var port = process.env.PORT || 8080; // set our port
app.listen(port, function() {
  console.log('Node.js listening on port ' + port);
});