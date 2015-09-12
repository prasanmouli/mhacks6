var http = require("http"),
    swig = require("swig"),
    bodyParser = require('body-parser'),
    assets = require('connect-assets'),
    errorHandler = require('errorhandler'),
    express = require('express'),
    firebase = require("firebase"),
    config = require("./config/token");

var app = express();
var myFirebaseRef = new firebase("https://crackling-torch-679.firebaseio.com/");

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
  res.render('app', {});
});

/* Update Budget */
app.get('/user', function(req, res) {
  if(isNaN(req.query.budget) || req.query.budget<0)
    res.render('app', {budgetErr : 'Invalid Budget. Please enter a valid number'});
  else{
    myFirebaseRef.authWithCustomToken(config.firebaseAuthToken, function(error, authData) {
      if(error){
        console.log("Login Failed!", error);
      } 
      else{
        console.log("Login Success!", authData);
        myFirebaseRef.set({
          username: "Prasanna",
          budget: req.query.budget,
        });
        res.render('app', {budgetVal : req.query.budget});
      }
    });
  }
});

/* Search Product */
app.get('/search/:id/', function(req, res) {
    res.send('search ' + req.params.id);
});


app.use(errorHandler());

app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});


var url = 'api.walmartlabs.com';
var options = {
  host: url,
  port: 80,
  path: '/v1/search?apiKey='+config.walmartAPIKey+'&query=ipod',
  method: 'GET'
};
/*
http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();*/


module.exports = app;
