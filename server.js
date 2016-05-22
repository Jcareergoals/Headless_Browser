var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); 

app.use(express.static(path.join(__dirname, './client'))); 
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.
	get('/quotes', function(req, res){
		res.json('working')
	})

app.listen(3000, function(){
	console.log('Listening at port: 3000'); 
})