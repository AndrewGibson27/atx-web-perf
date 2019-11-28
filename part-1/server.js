const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const app = express();
const shrinkRay = require('shrink-ray-current');

app.use(shrinkRay());
app.use(
	'/',
	expressStaticGzip('public/', {
		enableBrotli: true,
		orderPreference: ['br']
	})
);

const listener = app.listen('3000', function() {
	console.log('Your app is listening on port 3000 ');
});
