var express = require('express');
var moment = require('moment');
moment().format();
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
	res.end('Hello Heroku')
})

app.get('/:time', (req, res) => {
	var datestring = req.params.time;
	var isUnix = /^[0-9]+$/.test(datestring);
	if (isUnix)
		date = moment(datestring, 'X');
	else
		date = moment(datestring, 'MMMM DD, YYYY');
	
	var result = {
		unix: null,
		natural: null
	};
	if (date.isValid()) 
		result = {
			unix: date.format('X'),
			natural: date.format('MMMM DD, YYYY')
		}

	res.end(JSON.stringify(result));
	// var isUnix = /^[0-9]+$/.test(timestring);
	// var result = {};
	// if (isUnix) 

})

app.listen(app.get('port'), () => {
	console.log('Running');
})