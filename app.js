var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('dev'));  // Enable/disable logging here


app.get('/test', function (req, res) {
  res.send({ status: 'Ok' });
});

module.exports = app;
