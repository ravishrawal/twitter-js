const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank.js')
const routes = require('./routes');
app.use('/',routes);
app.set('view engine','html');
app.engine('html',nunjucks.render);

app.use('/',function(req,res,next){
  next();
})
nunjucks.configure('views',{noCache:true});
var port = 3000 || process.env.PORT
app.listen(port,function(){
  console.log('server listening');
})
app.use(function(req,res,next){
  console.log(req.method,req.route)
  next();
})
app.use('/news',function(req,res,next){
  console.log('You\'ve reached news')
  next();
})

var userCmd='list';
tweetBank[userCmd]();
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/stylesheets/style.css',function(req,res,next){
  res.sendFile('/stylesheets/style.css');
  next();
});

// nunjucks.render('index.html',locals,function(err,output){
//   console.log(output);
// });
