var http = require("http"),
    swig = require("swig"),
    bodyParser = require('body-parser'),
    assets = require('connect-assets'),
    errorHandler = require('errorhandler'),
    express = require('express');

var app = express();

app.set('port', 8000);
app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views', __dirname+'/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(assets({
  paths: ['public/css', 'public/js']
}));
app.use(express.static(__dirname+'/public', { maxAge: 31557600000 }));


app.get('/', function (req, res) {
  res.render('app', { /* template locals context */ });
});

app.use(errorHandler());

app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
module.exports = app;
