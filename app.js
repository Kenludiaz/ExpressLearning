var express = require('express');
var app = express();
var logger = require('morgan');


app.use(express.static('public'));



app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(3005, function() {
  console.log('Example app listening on port 3005!');
});
