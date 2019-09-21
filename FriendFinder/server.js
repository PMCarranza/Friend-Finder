
// dependencies
// npm packages that we will use to give the server useful functionality
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// tells node that we are creating an 'express' server
var app = express();

// sets an initial PORT.  It will be use later in the listener
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// USING BODY PARSER TO SEE WHAT HAPPENS 9.20 9:30pm
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd/api+json' }));


app.use(express.static(path.join(__dirname, 'app/public')));
console.log(__dirname);

// ROUTER
// pointing the server to the 'route' files.
// these routes give the server a 'map' of how to respond when users visit or request data from various URLs.

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);
// console.log('serverjs app--> ' + app); 


// LISTENER

// this is code that effectively 'starts' the server

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});