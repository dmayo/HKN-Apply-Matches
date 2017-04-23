var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('/'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "apply.html" );
})
app.get('/apply.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/style.css', function (req, res) {
   res.sendFile( __dirname + "/" + "style.css" );
})
app.get('/matches.txt', function (req, res) {
   res.sendFile( __dirname + "/" + "matches.txt" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})