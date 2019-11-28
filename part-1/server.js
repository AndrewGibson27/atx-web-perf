const express = require('express');
const app = express();
const shrinkRay = require('shrink-ray-current');

// Order matters for the app.use statements
app.use(shrinkRay()); // Comment out this line to disable BR encoding

// Comment out this code block to disable delay in server response
app.use(function(req, res, next) {
	setTimeout(next, 1000);
});

app.use(express.static('public'));

const listener = app.listen('3000', function() {
	console.log('Your app is listening on port 3000 ');
});
