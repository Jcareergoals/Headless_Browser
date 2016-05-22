var page = require('webpage').create(); 
var system = require('system');

// response for invalid usage
if(system.args.length < 4){
	console.log('Usage: app.js <url> <username> <password>'); 
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
page.open(url, function(status){
	if(status === 'success'){
		t = Date.now() - t;
		console.log("Load time: " + t + " msec(s)");
		phantom.exit(); 
	} else {
		console.log('unable to login');
		phantom.exit(); 
	}
}); 