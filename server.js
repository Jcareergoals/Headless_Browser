var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cmd = require('node-cmd');

var app = express(); 

app.use(express.static(path.join(__dirname, './client'))); 
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.
	post('/quotes', function(req, res){
		console.log(req.body)
		console.log('loading PhantomJs')
		var command = "phantomjs app.js "+req.body.username+" "+req.body.password
		cmd.get(command, function(data){
			console.log('Response from PhantomJs: ')
			console.log(data)
			res.json(data)
		})
	})

app.listen(3000, function(){
	console.log('Listening at port: 3000'); 
});