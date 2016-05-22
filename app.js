var page = require('webpage').create(); 
var system = require('system'), username, password, t, url;

// response for invalid usage
if(system.args.length < 3){
	console.log('Usage: app.js <username> <password>'); 
	phantom.exit(); 
}

// set global variables
username = system.args[1];
password = system.args[2];
url = "https://fsi.policyport.com/wps/portal/fsi"; 

t = Date.now();
page.open(url, function(status){
	if(status === "success"){
		t = Date.now() - t; 
		console.log('Load time: '+t+' msec(s)');
		// include jquery library
		page.includeJs("https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js", function(){
			// callback for 'sanboxed' console.log messages withing pages
			page.onConsoleMessage = function(msg){ console.log(msg); }
			page.evaluate(function(u, p){
				$("#userID").val(u); 
				$("#password").val(p); 
				$('form').submit();  
			}, username, password); 

			// delay methods so page can load
			setTimeout(function(){
				page.render('loggedIn.pdf'); // screenshot logged in page
				page.open("https://fsi.policyport.com/agentlisting/login?__client=FSI", function(){
					page.render("workBench.pdf"); // screenshot workbench page
					console.log("this is the response"); 
					phantom.exit(1); 
				}); 
			}, 5000);
		}); 
	} else {
		console.log('Login credentials are incorrect: Contact Richard Hassad');
		phantom.exit(); 
	}
}); 