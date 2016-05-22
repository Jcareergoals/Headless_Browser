var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cmd = require('node-cmd');

var app = express(); 

app.use(express.static(path.join(__dirname, './client'))); 
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.
	get('/quotes', function(req, res){
		cmd.get('pwd', function(data){
			console.log(data)
		})
	})

app.listen(3000, function(){
	console.log('Listening at port: 3000'); 
})