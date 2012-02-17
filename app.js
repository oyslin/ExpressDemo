/**
 * @author waouyang
 */

var express = require('express'),
	app = express.createServer();
	

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', { layout: 'layout' });
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

app.get('/', function(req, res){
	res.render('index', {title : 'Express Demo', appName : 'Express Demo'});
});

app.listen(8000);

console.log('Server Started on port 8000');


