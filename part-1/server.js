const express = require('express');
const app = express();
const shrinkRay = require('shrink-ray-current');

// Order matters for the app.use statements
// app.use(shrinkRay()); // Comment this line to enable BR encoding

// Comment this code block to enable delay in server response
app.use(function(req, res, next) {
	setTimeout(next, 2000);
});

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen('3000', function() {
	console.log('Your app is listening on port 3000 ');
});
