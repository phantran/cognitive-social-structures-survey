
/**
 * Module dependencies.
 */
var fs = require('fs');
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var cors = require('cors');
//var d3 = require("d3");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// select appropriate db
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/db';

// Connect to database
mongoose.connect(uristring, {useNewUrlParser: true} , function (err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connecting to: ' + uristring);
	}
});

app.use(cors());


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(app.router);
app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, 'index')));

//ParticipantProvider
//ParticipantProvider = require('./ParticipantProvider')/ParticipantProvider;

// development only
//if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}

app.get('/', (req,res) => {
	res.sendFile(__dirname + "index.html");
});
//app.get('/users', user.list);
//app.get('/test', (req,res) => {
//    res.render(__dirname + "/drumkit/index-FINISHED.html");
//});

app.post('/survey', (req,res) => {
    res.sendFile(__dirname + "/survey.html");
});


app.post('/save', (req,res) => {
	let timestamp = new Date().getTime().toString();
	let fileName = timestamp +".json";
 	fs.writeFile('./Collected_Data/' + fileName, JSON.stringify(req.body), 'binary', (err)=> {
 		if(err) console.log(err);
   		else console.log('File saved');
	});
});
//app.post('/survey', routes.surveypost);
//app.get('/thanks', routes.thanks);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
