// setup =================

var express = require('express');
var utils = require('utils');
var app = express();                                //create app
var mongoose = require('mongoose');                 //mongoose for mongodb
var morgan = require('morgan');                     //log requests to the console
var bodyParser = require('body-parser');            // pull info from the HTML post
var methodOverride = require('method-override');    // simulate DELETE and PUT

// define model

var Todo = mongoose.model('Todo', {
  text : String
});

// configuration ===============

mongoose.connect('mongodb://admin:makers@apollo.modulusmongo.net:27017/qoJyh9ep');

app.use(express.static(__dirname + '/public'));                       // set static files location
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(methodOverride());

// listen

app.listen(8080);
console.log('App listening on port 8080');
