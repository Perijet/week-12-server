
var http = require('http');
var twitter = require('twitter');
var PORTA = 7000;
var PORTB = 7500;

var servera = http.createServer(function(req, res){
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'

	});

	var computerChoices = ['You do not rock!', 'You do not have paper!', 'You are not as sharp as a pair of scissors'];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	//var body = '<u><b>You are awesome!!!</b> </u>';

	res.end(computerGuess);

});


var serverb = http.createServer(function(req, res){
	console.log(req.url);

	res.writeHead(200, {
		'Content-Type': 'text/html'

	});

	var computerChoices = ['You rock!', 'You have paper!', 'You are sharp as a pair of scissors'];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	//var body = '<u><b>You are not awesome!!!</b> </u>';

	res.end(computerGuess);

});


servera.listen(PORTA, function(){
	console.log('Server Listening on %d', PORTA);
});

serverb.listen(PORTB, function(){
	console.log('Server Listening on %d', PORTB);
});




// Create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// ** Bonus **

// Generate the good / bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet!