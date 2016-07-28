const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://<yoda>:<yoda>@ds023475.mlab.com:23475/quotes',(err, database) => {
	if (err) return console.log(err);
	db = database;
	
});
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');	
});

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err);
		console.log('saved to database');
		res.redirect('/');
});
});

MongoClient.connect('mongodb://yoda:yoda@ds023475.mlab.com:23475/quotes',(err, database) => {
	if (err) return console.log(err);
	db = database;

app.listen(3000, function() {
	console.log('listening on port 3000..');
	
});
	
});
