var page = require('webpage').create(); 
var system = require('system');

// response for invalid usage
if(system.args.length === 1){
	console.log('Usage: app.js <url address>'); 
	phantom.exit(); 
}

// set global variables
var url = system.args[1];
var username = system.args[2];
var password = system.args[3];

page.onConsoleMessage = function(msg){
	console.log(msg);
}

var t = Date.now() ;
page.open(url, function(){
	if(status === 'success'){
		console.log(status);
		phantom.exit(); 
	} else {
		console.log('unable to login');
		phantom.exit(); 
	}
}); 