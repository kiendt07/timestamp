var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
	res.end('Hello Heroku');
})

app.listen(app.get('port'), () => {
	console.log('Running');
})